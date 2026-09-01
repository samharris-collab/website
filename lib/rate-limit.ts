/**
 * Fixed-window rate limiting for the contact endpoint: 5 submissions per IP per
 * hour.
 *
 * Uses Upstash Redis when UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
 * are set, which is the only correct option across serverless instances. Without
 * them it falls back to an in-process map — that still stops a naive flood from
 * one client but does not hold across instances, so set the Upstash variables
 * before launch.
 */
const LIMIT = 5
const WINDOW_SECONDS = 60 * 60

type Result = { success: boolean; remaining: number; resetSeconds: number }

const memory = new Map<string, { count: number; expiresAt: number }>()

function memoryLimit(key: string, now: number): Result {
  // Opportunistic sweep so the map cannot grow without bound.
  if (memory.size > 5000) {
    for (const [k, v] of memory) if (v.expiresAt <= now) memory.delete(k)
  }

  const entry = memory.get(key)
  if (!entry || entry.expiresAt <= now) {
    memory.set(key, { count: 1, expiresAt: now + WINDOW_SECONDS * 1000 })
    return { success: true, remaining: LIMIT - 1, resetSeconds: WINDOW_SECONDS }
  }

  entry.count += 1
  const resetSeconds = Math.ceil((entry.expiresAt - now) / 1000)
  return {
    success: entry.count <= LIMIT,
    remaining: Math.max(0, LIMIT - entry.count),
    resetSeconds,
  }
}

async function upstashLimit(key: string, url: string, token: string): Promise<Result> {
  const headers = { Authorization: `Bearer ${token}` }
  const redisKey = `ratelimit:contact:${key}`

  const incr = await fetch(`${url}/incr/${encodeURIComponent(redisKey)}`, {
    headers,
    cache: 'no-store',
  })
  if (!incr.ok) throw new Error(`Upstash INCR failed: ${incr.status}`)
  const count = Number(((await incr.json()) as { result: number }).result)

  // Only the first request in a window sets the expiry, so the window is fixed
  // rather than sliding forward with every hit.
  if (count === 1) {
    await fetch(`${url}/expire/${encodeURIComponent(redisKey)}/${WINDOW_SECONDS}`, {
      headers,
      cache: 'no-store',
    })
  }

  const ttl = await fetch(`${url}/ttl/${encodeURIComponent(redisKey)}`, {
    headers,
    cache: 'no-store',
  })
  const resetSeconds = ttl.ok
    ? Number(((await ttl.json()) as { result: number }).result)
    : WINDOW_SECONDS

  return {
    success: count <= LIMIT,
    remaining: Math.max(0, LIMIT - count),
    resetSeconds: resetSeconds > 0 ? resetSeconds : WINDOW_SECONDS,
  }
}

export async function rateLimit(key: string): Promise<Result> {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (url && token) {
    try {
      return await upstashLimit(key, url, token)
    } catch (error) {
      // A Redis outage must not take the contact form down with it.
      console.error('[rate-limit] Upstash unavailable, falling back to memory', error)
    }
  }

  return memoryLimit(key, Date.now())
}

/** Best-effort client IP from the proxy headers Vercel sets. */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return headers.get('x-real-ip') ?? 'unknown'
}
