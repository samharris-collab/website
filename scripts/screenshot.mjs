/** Dev-only visual check. Usage: node scripts/screenshot.mjs <path> <out.png> [width] [--full] */
import { chromium } from 'playwright-core'

const [, , route = '/', out = 'shot.png', width = '1440', ...flags] = process.argv
const full = flags.includes('--full')
const dark = flags.includes('--dark')

const browser = await chromium.launch({
  args: ['--no-sandbox'],
  executablePath: process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
})
const page = await browser.newPage({
  viewport: { width: Number(width), height: Number(width) < 500 ? 900 : 1000 },
  deviceScaleFactor: 1,
  colorScheme: dark ? 'dark' : 'light',
})
const errors = []
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
page.on('pageerror', (e) => errors.push(String(e)))

await page.goto(`http://127.0.0.1:3100${route}`, { waitUntil: 'load', timeout: 45000 })
// Scroll through the page so every whileInView reveal has fired, then jump
// back to the top instantly (smooth scrolling would still be in flight).
await page.evaluate(async () => {
  const step = window.innerHeight * 0.8
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo({ top: y, behavior: 'instant' })
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo({ top: 0, behavior: 'instant' })
})
await page.waitForTimeout(1400)
await page.screenshot({ path: out, fullPage: full })
if (errors.length) console.log('CONSOLE ERRORS:\n' + errors.join('\n'))
else console.log('no console errors')
await browser.close()
