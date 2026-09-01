/**
 * Measures what a first-time visitor actually downloads, plus LCP and CLS.
 * Run against `next start` (production output), not the dev server.
 *
 *   node scripts/perf.mjs [route ...]
 */
import { chromium } from 'playwright'

import { existsSync } from 'node:fs'

/** The sandbox ships Chromium at a fixed path; CI installs its own. */
const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
const executablePath =
  process.env.CHROMIUM_PATH ??
  (existsSync(SANDBOX_CHROMIUM) ? SANDBOX_CHROMIUM : undefined)


const routes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['/', '/services', '/case-studies', '/pr-for/attorneys', '/reviews', '/contact']

const browser = await chromium.launch({
  args: ['--no-sandbox'],
  executablePath,
})

const kb = (n) => `${(n / 1024).toFixed(1)}kB`

for (const route of routes) {
  // A fresh context per route means an empty cache, like a first visit.
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()

  await page.goto(`http://127.0.0.1:3100${route}`, { waitUntil: 'load', timeout: 45000 })

  const vitals = await page.evaluate(
    () =>
      new Promise((resolve) => {
        let lcp = 0
        let cls = 0
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) lcp = entry.startTime
        }).observe({ type: 'largest-contentful-paint', buffered: true })
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) if (!entry.hadRecentInput) cls += entry.value
        }).observe({ type: 'layout-shift', buffered: true })

        setTimeout(() => {
          const nav = performance.getEntriesByType('navigation')[0]
          // transferSize is what actually crossed the wire, compression included.
          const bytes = { script: 0, css: 0, img: 0, font: 0, other: 0 }
          const types = []
          for (const r of performance.getEntriesByType('resource')) {
            const size = r.transferSize || r.encodedBodySize || 0
            if (r.initiatorType === 'script' || r.name.endsWith('.js')) bytes.script += size
            else if (r.name.includes('.css')) bytes.css += size
            else if (r.initiatorType === 'img' || /image|_next\/image/.test(r.name)) {
              bytes.img += size
              types.push(size)
            } else if (/\.(woff2?|ttf)/.test(r.name)) bytes.font += size
            else bytes.other += size
          }
          bytes.html = performance.getEntriesByType('navigation')[0]?.transferSize ?? 0
          resolve({ lcp: Math.round(lcp), cls: Number(cls.toFixed(4)), dcl: Math.round(nav?.domContentLoadedEventEnd ?? 0), bytes })
        }, 2500)
      })
  )

  const b = vitals.bytes
  const totalJs = b.script
  console.log(
    `${route.padEnd(22)} HTML ${kb(b.html).padStart(8)}  JS ${kb(totalJs).padStart(9)}  CSS ${kb(b.css).padStart(8)}` +
      `  IMG ${kb(b.img).padStart(9)}  FONT ${kb(b.font).padStart(8)}` +
      `  | LCP ${String(vitals.lcp).padStart(5)}ms  CLS ${vitals.cls}`
  )

  await context.close()
}

await browser.close()
