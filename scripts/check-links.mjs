/**
 * Crawls every internal page from the sitemap, collects every link and image,
 * and checks that internal targets resolve.
 *
 * External links are listed but not fetched: this build environment's egress
 * policy blocks the news sites the placements point at, so a failure here would
 * say nothing about the link.
 *
 *   node scripts/check-links.mjs
 */
const BASE = 'http://127.0.0.1:3100'

const sitemapXml = await (await fetch(`${BASE}/sitemap.xml`)).text()
const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname)
  .sort()

const internal = new Map() // href -> pages that link to it
const external = new Map()
const images = new Set()
const anchors = new Map() // page -> Set(ids)
const hashLinks = new Map()

for (const route of routes) {
  const res = await fetch(`${BASE}${route}`)
  if (!res.ok) {
    console.log(`PAGE ${res.status} ${route}`)
    continue
  }
  const html = await res.text()

  anchors.set(route, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])))

  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    if (href.startsWith('#')) {
      if (!hashLinks.has(route)) hashLinks.set(route, new Set())
      hashLinks.get(route).add(href.slice(1))
    } else if (href.startsWith('/')) {
      const [path, hash] = href.split('#')
      if (!internal.has(path)) internal.set(path, new Set())
      internal.get(path).add(route)
      if (hash) {
        if (!hashLinks.has(path)) hashLinks.set(path, new Set())
        hashLinks.get(path).add(hash)
      }
    } else if (href.startsWith('http')) {
      if (!external.has(href)) external.set(href, new Set())
      external.get(href).add(route)
    }
  }

  for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    images.add(src.replace(/&amp;/g, '&'))
  }
}

console.log(`Crawled ${routes.length} pages from the sitemap.\n`)

let broken = 0

for (const [path, sources] of [...internal].sort()) {
  const res = await fetch(`${BASE}${path}`, { method: 'GET' })
  if (!res.ok) {
    broken += 1
    console.log(`BROKEN LINK ${res.status} ${path}`)
    console.log(`   linked from: ${[...sources].slice(0, 4).join(', ')}`)
  }
}

for (const src of images) {
  const url = src.startsWith('http') ? src : `${BASE}${src}`
  if (!url.startsWith(BASE)) continue
  const res = await fetch(url)
  if (!res.ok) {
    broken += 1
    console.log(`BROKEN IMAGE ${res.status} ${src}`)
  }
}

// In-page anchor targets (#packages, #book …) must exist on the page they name.
for (const [path, hashes] of hashLinks) {
  const ids = anchors.get(path)
  if (!ids) continue
  for (const hash of hashes) {
    if (hash && !ids.has(hash)) {
      broken += 1
      console.log(`MISSING ANCHOR #${hash} on ${path}`)
    }
  }
}

console.log(`\nInternal links checked: ${internal.size} distinct targets, ${images.size} images.`)
console.log(`External links (not fetched — egress is restricted here): ${external.size}`)
for (const [href] of [...external].sort().slice(0, 40)) console.log(`   ${href}`)

if (broken) {
  console.log(`\n${broken} problem(s).`)
  process.exitCode = 1
} else {
  console.log('\nNo broken internal links, images, or anchors.')
}
