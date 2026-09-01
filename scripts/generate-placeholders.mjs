/**
 * Generates the site's placeholder imagery.
 *
 * These are ART-DIRECTED VECTOR COMPOSITIONS, not stand-ins for photography that
 * happens to be missing: the real photography on the current site could not be
 * fetched during the rebuild. Each file below is designed to hold its slot at the
 * correct aspect ratio so layout, LCP and CLS are real, and to look deliberate
 * rather than broken. Drop a real photograph over any file at the same path and
 * the same aspect ratio and nothing else needs to change.
 *
 *   node scripts/generate-placeholders.mjs
 */
import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'

const INK = '#0A0A0A'
const CREAM = '#FAF9F6'
const PAPER = '#FFFFFF'
const ACCENT = '#B4FB44'
const MUTED = '#8A8A8A'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Deterministic pseudo-random so regenerating gives identical files. */
function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

const grainFilter = `
  <filter id="grain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="7" result="n"/>
    <feColorMatrix in="n" type="saturate" values="0"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.055"/></feComponentTransfer>
  </filter>`

/** A single stylised magazine/newspaper cover. */
function cover({ x, y, w, h, rotate, fill, nameplate, accentBar, rand }) {
  const pad = w * 0.09
  const lines = []
  let ly = y + h * 0.42
  const lineCount = 4 + Math.floor(rand() * 3)
  for (let i = 0; i < lineCount; i += 1) {
    const lw = (w - pad * 2) * (0.45 + rand() * 0.55)
    lines.push(
      `<rect x="${x + pad}" y="${ly}" width="${lw}" height="${h * 0.022}" rx="1" fill="${INK}" opacity="${0.16 + rand() * 0.14}"/>`
    )
    ly += h * 0.05
  }
  const imgH = h * 0.2
  return `
  <g transform="rotate(${rotate} ${x + w / 2} ${y + h / 2})">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" rx="2"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${INK}" stroke-opacity="0.10" rx="2"/>
    ${accentBar ? `<rect x="${x}" y="${y}" width="${w}" height="${h * 0.018}" fill="${ACCENT}"/>` : ''}
    <text x="${x + pad}" y="${y + h * 0.17}" font-family="Instrument Serif" font-size="${w * 0.155}" fill="${INK}" letter-spacing="${-w * 0.005}">${esc(nameplate)}</text>
    <rect x="${x + pad}" y="${y + h * 0.215}" width="${w - pad * 2}" height="1.5" fill="${INK}" opacity="0.35"/>
    <rect x="${x + pad}" y="${y + h * 0.245}" width="${w - pad * 2}" height="${imgH}" fill="${INK}" opacity="${0.06 + rand() * 0.06}" rx="1"/>
    ${lines.join('\n    ')}
  </g>`
}

async function render(svg, out, { width, height }) {
  await sharp(Buffer.from(svg), { density: 200 })
    .resize(width, height, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(out)
  console.log('wrote', out)
}

/* ---------------------------------------------------------------- hero ---- */
async function hero() {
  const W = 2400
  const H = 1000
  const rand = rng(11)
  const covers = []
  const nameplates = [
    'Forbes', 'USA Today', 'Entrepreneur', 'MSN', 'Inc.', 'CEO Weekly',
    'NY Weekly', 'Benzinga', 'MarketWatch', 'Fast Company', 'Yahoo', 'AP',
  ]
  const cols = 6
  const rows = 2
  const cw = 300
  const ch = 400
  const gapX = (W - cols * cw) / (cols + 1)
  const gapY = 40
  let i = 0
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const x = gapX + c * (cw + gapX)
      const y = 90 + r * (ch + gapY) + (c % 2 === 0 ? -14 : 10)
      covers.push(
        cover({
          x, y, w: cw, h: ch,
          rotate: (rand() - 0.5) * 3.2,
          fill: i === 4 ? ACCENT : i % 5 === 2 ? CREAM : PAPER,
          nameplate: nameplates[i % nameplates.length],
          accentBar: i % 4 === 1,
          rand,
        })
      )
      i += 1
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="18%" r="72%">
      <stop offset="0%" stop-color="#2A2A28"/>
      <stop offset="60%" stop-color="#121211"/>
      <stop offset="100%" stop-color="${INK}"/>
    </radialGradient>
    <linearGradient id="vign" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${INK}" stop-opacity="0.55"/>
      <stop offset="35%" stop-color="${INK}" stop-opacity="0"/>
      <stop offset="78%" stop-color="${INK}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${INK}" stop-opacity="0.75"/>
    </linearGradient>
    ${grainFilter}
  </defs>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g opacity="0.97">${covers.join('\n')}</g>
  <rect width="${W}" height="${H}" fill="url(#vign)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.8"/>
</svg>`
  await render(svg, 'public/media/hero-media.jpg', { width: W, height: H })
}

/* --------------------------------------------------------------- about ---- */
async function about() {
  const W = 1600
  const H = 1200
  const surfaces = [
    { label: 'Digital', x: 120, y: 150, w: 620, h: 400, rot: -2.5, fill: PAPER },
    { label: 'Print', x: 640, y: 90, w: 560, h: 700, rot: 2.0, fill: CREAM },
    { label: 'TV', x: 190, y: 560, w: 640, h: 380, rot: 1.5, fill: PAPER },
    { label: 'Podcast', x: 760, y: 640, w: 520, h: 330, rot: -1.8, fill: ACCENT },
    { label: 'Speaking', x: 1130, y: 300, w: 380, h: 520, rot: 3.0, fill: PAPER },
  ]
  const rand = rng(23)
  const cards = surfaces
    .map(({ label, x, y, w, h, rot, fill }) => {
      const pad = 34
      const rows = []
      let ly = y + h * 0.42
      for (let i = 0; i < 5; i += 1) {
        rows.push(
          `<rect x="${x + pad}" y="${ly}" width="${(w - pad * 2) * (0.4 + rand() * 0.6)}" height="9" rx="1" fill="${INK}" opacity="${0.14 + rand() * 0.1}"/>`
        )
        ly += 24
      }
      return `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" rx="4"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${INK}" stroke-opacity="0.12" rx="4"/>
      <text x="${x + pad}" y="${y + 62}" font-family="Inter" font-weight="600" font-size="20" letter-spacing="3" fill="${INK}" opacity="0.55">${esc(label.toUpperCase())}</text>
      <rect x="${x + pad}" y="${y + 86}" width="${w - pad * 2}" height="1.5" fill="${INK}" opacity="0.2"/>
      <rect x="${x + pad}" y="${y + 112}" width="${w - pad * 2}" height="${h * 0.22}" fill="${INK}" opacity="0.07" rx="2"/>
      ${rows.join('\n      ')}
    </g>`
    })
    .join('\n')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1C1C1A"/>
      <stop offset="100%" stop-color="${INK}"/>
    </linearGradient>
    ${grainFilter}
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g opacity="0.06" stroke="${CREAM}" stroke-width="1">
    ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${i * 100}" x2="${W}" y2="${i * 100}"/>`).join('')}
    ${Array.from({ length: 16 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="${H}"/>`).join('')}
  </g>
  ${cards}
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.8"/>
</svg>`
  await render(svg, 'public/media/about-media.jpg', { width: W, height: H })
}

/* ---------------------------------------------------- placement mockups ---- */
async function placement({ file, outlet, headline, kicker, seed, accent = false }) {
  const W = 1600
  const H = 1200
  const rand = rng(seed)
  const M = 130
  const colW = W - M * 2

  // Headline set as up to three lines of display serif.
  const words = headline.split(' ')
  const lines = []
  let current = ''
  const maxChars = 26
  for (const w of words) {
    if ((current + ' ' + w).trim().length > maxChars && current) {
      lines.push(current.trim())
      current = w
    } else {
      current = `${current} ${w}`
    }
  }
  if (current.trim()) lines.push(current.trim())
  const headlineLines = lines.slice(0, 3)

  const body = []
  // Body copy starts just under the rule, whatever height the headline took.
  let by = 400 + headlineLines.length * 96 + 70
  for (let i = 0; i < 14; i += 1) {
    const isNewPara = i > 0 && rand() > 0.78
    if (isNewPara) by += 14
    body.push(
      `<rect x="${M}" y="${by}" width="${colW * (0.62 + rand() * 0.38)}" height="10" rx="1" fill="${INK}" opacity="0.16"/>`
    )
    by += 30
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>${grainFilter}</defs>
  <rect width="${W}" height="${H}" fill="${accent ? CREAM : PAPER}"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${ACCENT}"/>
  <text x="${M}" y="150" font-family="Instrument Serif" font-size="76" fill="${INK}" letter-spacing="-2">${esc(outlet)}</text>
  <rect x="${M}" y="188" width="${colW}" height="2" fill="${INK}" opacity="0.65"/>
  <text x="${M}" y="248" font-family="Inter" font-weight="600" font-size="22" letter-spacing="4" fill="${MUTED}">${esc(kicker.toUpperCase())}</text>
  ${headlineLines
    .map((l, i) => `<text x="${M}" y="${340 + i * 96}" font-family="Instrument Serif" font-size="88" fill="${INK}" letter-spacing="-2.5">${esc(l)}</text>`)
    .join('\n  ')}
  <rect x="${M}" y="${360 + headlineLines.length * 96}" width="180" height="3" fill="${ACCENT}"/>
  <rect x="${M}" y="${400 + headlineLines.length * 96}" width="${colW}" height="1.5" fill="${INK}" opacity="0.14"/>
  ${body.join('\n  ')}
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.5"/>
</svg>`
  await render(svg, `public/media/${file}`, { width: W, height: H })
}

/* -------------------------------------------------------- video poster ---- */
async function poster() {
  const W = 1920
  const H = 1080
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="p" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#26261F"/>
      <stop offset="100%" stop-color="${INK}"/>
    </radialGradient>
    ${grainFilter}
  </defs>
  <rect width="${W}" height="${H}" fill="url(#p)"/>
  <g opacity="0.10" stroke="${ACCENT}" stroke-width="2">
    ${Array.from({ length: 26 }, (_, i) => {
      const h = 40 + Math.abs(Math.sin(i * 1.7)) * 260
      return `<line x1="${300 + i * 50}" y1="${540 - h / 2}" x2="${300 + i * 50}" y2="${540 + h / 2}" stroke-linecap="round"/>`
    }).join('')}
  </g>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.7"/>
</svg>`
  await render(svg, 'public/media/client-testimonial-poster.jpg', { width: W, height: H })
}

/* -------------------------------------------------------------- icons ----- */
function markSvg(size, { rounded = true } = {}) {
  const r = rounded ? size * 0.22 : 0
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="${ACCENT}"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
        font-family="Instrument Serif" font-size="${size * 0.56}" fill="${INK}" letter-spacing="${-size * 0.02}">dna</text>
</svg>`
}

async function icons() {
  await writeFile('public/icon.svg', markSvg(512))
  for (const [size, name] of [
    [180, 'apple-touch-icon.png'],
    [192, 'icon-192.png'],
    [512, 'icon-512.png'],
  ]) {
    await sharp(Buffer.from(markSvg(size)), { density: 400 })
      .resize(size, size)
      .png()
      .toFile(`public/${name}`)
    console.log('wrote', `public/${name}`)
  }
  // favicon.ico: a single 48px PNG payload wrapped in an ICO container.
  const png = await sharp(Buffer.from(markSvg(48, { rounded: false })), { density: 400 })
    .resize(48, 48)
    .png()
    .toBuffer()
  const header = Buffer.alloc(22)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)
  header.writeUInt8(48, 6)
  header.writeUInt8(48, 7)
  header.writeUInt8(0, 8)
  header.writeUInt8(0, 9)
  header.writeUInt16LE(1, 10)
  header.writeUInt16LE(32, 12)
  header.writeUInt32LE(png.length, 14)
  header.writeUInt32LE(22, 18)
  await writeFile('public/favicon.ico', Buffer.concat([header, png]))
  console.log('wrote public/favicon.ico')
}

await mkdir('public/media', { recursive: true })
await hero()
await about()
await poster()
await placement({
  file: 'placement-kirk-msn.jpg', outlet: 'MSN', kicker: 'Health',
  headline: "The body isn't a machine", seed: 41,
})
await placement({
  file: 'placement-brick.jpg', outlet: 'Wall Street Times', kicker: 'Legal',
  headline: 'From Mario Kart to the Supreme Court', seed: 42, accent: true,
})
await placement({
  file: 'placement-indran.jpg', outlet: 'USA Today', kicker: 'Medicine',
  headline: 'Leadership in Medicine and Community Health', seed: 43,
})
await placement({
  file: 'placement-albright.jpg', outlet: 'New York Weekly', kicker: 'Publishing',
  headline: 'Leaving a Mark', seed: 44, accent: true,
})
await placement({
  file: 'placement-kelly.jpg', outlet: 'CEO Weekly', kicker: 'Industry',
  headline: 'Giving Fresh Produce a Global Voice', seed: 45,
})
await icons()
console.log('done')
