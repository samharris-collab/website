/**
 * Accessibility audit. Runs axe-core against a list of routes in both color
 * schemes and both viewports, and reports every violation.
 *
 *   node scripts/a11y.mjs [route ...]
 */
import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

import { existsSync } from 'node:fs'

/** The sandbox ships Chromium at a fixed path; CI installs its own. */
const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
const executablePath =
  process.env.CHROMIUM_PATH ??
  (existsSync(SANDBOX_CHROMIUM) ? SANDBOX_CHROMIUM : undefined)


const axeSource = readFileSync('node_modules/axe-core/axe.min.js', 'utf8')

const routes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      '/',
      '/contact',
      '/services',
      '/case-studies',
      '/case-studies/matthew-brick',
      '/pr-for',
      '/pr-for/attorneys',
      '/get-featured-in',
      '/get-featured-in/forbes',
      '/guides',
      '/guides/get-featured-in-forbes',
      '/guides/how-to-get-featured-on-msn',
      '/reviews',
      '/publications',
      '/compare',
      '/about',
      '/privacy',
      '/nope-404',
    ]

const contexts = [
  { name: 'desktop-light', width: 1440, height: 1000, colorScheme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, colorScheme: 'dark' },
]

const browser = await chromium.launch({
  args: ['--no-sandbox'],
  executablePath,
})

let total = 0
const seen = new Map()

for (const ctx of contexts) {
  const page = await browser.newPage({
    viewport: { width: ctx.width, height: ctx.height },
    colorScheme: ctx.colorScheme,
  })

  for (const route of routes) {
    await page.goto(`http://127.0.0.1:3100${route}`, { waitUntil: 'load', timeout: 45000 })
    // Let scroll-triggered reveals settle so nothing is audited mid-animation.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.9
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo({ top: y, behavior: 'instant' })
        await new Promise((r) => setTimeout(r, 60))
      }
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
    // Reveals fade in over ~400ms. Auditing before they finish reports the
    // half-opacity blend as a contrast failure, so wait them out.
    await page.waitForTimeout(1500)
    await page.addScriptTag({ content: axeSource })
    const results = await page.evaluate(async () =>
      await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] },
      })
    )

    for (const v of results.violations) {
      total += v.nodes.length
      const key = `${v.id}`
      if (!seen.has(key)) seen.set(key, { impact: v.impact, help: v.help, hits: [] })
      seen.get(key).hits.push(`${ctx.name} ${route} ×${v.nodes.length}: ${v.nodes[0].target.join(' ')}`)
    }
  }
  await page.close()
}

await browser.close()

if (seen.size === 0) {
  console.log(`axe: 0 violations across ${routes.length} routes × ${contexts.length} contexts`)
} else {
  console.log(`axe: ${total} violating nodes, ${seen.size} distinct rules\n`)
  for (const [id, info] of [...seen].sort((a, b) => b[1].hits.length - a[1].hits.length)) {
    console.log(`[${info.impact}] ${id} — ${info.help}`)
    for (const hit of info.hits.slice(0, 4)) console.log(`   ${hit}`)
    if (info.hits.length > 4) console.log(`   … and ${info.hits.length - 4} more`)
    console.log()
  }
  process.exitCode = 1
}
