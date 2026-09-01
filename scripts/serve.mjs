/**
 * Restarts the local preview server on :3100.
 *
 * Two things this has to get right:
 *  - Kill the real server, not the npm wrapper. `npx next start` spawns a child;
 *    killing the wrapper orphans it, and the orphan then serves fresh HTML from
 *    disk against its own stale chunk manifest — which looks exactly like a
 *    broken build. So we spawn the Next binary directly and also sweep /proc.
 *  - Never match on a command line the way pkill does: the pattern would appear
 *    in the command line of whatever shell invoked this, and kill the caller.
 */
import { spawn } from 'node:child_process'
import { readFileSync, readdirSync } from 'node:fs'

const PORT = 3100
const self = process.pid

// Match on /proc/<pid>/comm, never the command line: a caller's shell has the
// search string in its own argv, and matching that kills the caller.
for (const entry of readdirSync('/proc')) {
  if (!/^\d+$/.test(entry) || Number(entry) === self) continue
  let comm
  try {
    comm = readFileSync(`/proc/${entry}/comm`, 'utf8').trim()
  } catch {
    continue
  }
  if (comm.startsWith('next-server') || comm.startsWith('next-router')) {
    try {
      process.kill(Number(entry), 'SIGTERM')
    } catch {
      // Already gone.
    }
  }
}

const reachable = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/sitemap.xml`, { cache: 'no-store' })
    return res.ok
  } catch {
    return false
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

for (let i = 0; i < 20 && (await reachable()); i += 1) await sleep(500)

const child = spawn('./node_modules/.bin/next', ['start', '-p', String(PORT)], {
  detached: true,
  stdio: ['ignore', 'ignore', 'ignore'],
})
child.unref()

for (let i = 0; i < 60; i += 1) {
  await sleep(500)
  if (await reachable()) {
    console.log('server ready on', PORT)
    process.exit(0)
  }
}
console.error('server failed to start')
process.exit(1)
