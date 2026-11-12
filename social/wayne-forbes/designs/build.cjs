/* Builds each design as one self-contained HTML file and renders it with Playwright.
   Usage: node designs/build.cjs [d1 d2 ...] [--guide]                                  */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const b64 = (p) => fs.readFileSync(path.join(ROOT, p)).toString('base64');
const img = (name) => `data:image/png;base64,${b64(`assets/${name}.png`)}`;
const font = (f) => `data:font/woff2;base64,${b64(`designs/fonts/${f}`)}`;
const A = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/anchors.json'), 'utf8'));
const tokens = fs.readFileSync(path.join(__dirname, 'tokens.css'), 'utf8');

const FONT_CSS = `
@font-face{font-family:Syne;font-weight:800;src:url(${font('syne-latin-800-normal.woff2')}) format('woff2')}
@font-face{font-family:Syne;font-weight:700;src:url(${font('syne-latin-700-normal.woff2')}) format('woff2')}
@font-face{font-family:Syne;font-weight:500;src:url(${font('syne-latin-500-normal.woff2')}) format('woff2')}
@font-face{font-family:Archivo;font-weight:100 900;font-stretch:62% 125%;src:url(${font('archivo-latin-wdth-normal.woff2')}) format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:italic;font-weight:400;src:url(${font('instrument-serif-latin-400-italic.woff2')}) format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:normal;font-weight:400;src:url(${font('instrument-serif-latin-400-normal.woff2')}) format('woff2')}`;

const GRAIN = `<svg class="grain" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 1 0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;

const FORBES_ASPECT = 3592 / 940;
const DNA_MARK_ASPECT = 876 / 321;
const DNA_FULL_ASPECT = 876 / 401;

/* Place Wayne from measured anchors. `anchorX` is where his visual centre lands.
   bias 0 = centre on the tie knot, 1 = centre on the shoulder midpoint.           */
function wayne({ version, scale, anchorX, headTopY, bias = 0.5, cls = '', style = '' }) {
  const shoulderMid = (A.shoulder_left_x + A.shoulder_right_x) / 2;
  const ax = A.tie_knot[0] * (1 - bias) + shoulderMid * bias;
  const [w, h] = A.cutout_1x_size;
  const left = anchorX - ax * scale;
  const top = headTopY - A.head_top_y * scale;
  const tb = A.thumb_box.map((v) => v * scale);
  const geo = {
    left, top, width: w * scale, height: h * scale,
    knotX: left + A.tie_knot[0] * scale,
    shoulderL: left + A.shoulder_left_x * scale, shoulderR: left + A.shoulder_right_x * scale,
    thumb: { x0: left + tb[0], y0: top + tb[1], x1: left + tb[2], y1: top + tb[3] },
  };
  const html = `<img class="wayne ${cls}" id="wayne" src="${img(version)}" style="position:absolute;left:${left}px;top:${top}px;width:${geo.width}px;height:${geo.height}px;${style}">`;
  return { html, geo };
}
const forbes = (color, h, extra = '') =>
  `<img class="chk logo" data-aspect="${FORBES_ASPECT}" data-name="forbes" src="${img(`forbes_${color}`)}" style="height:${h}px;width:${h * FORBES_ASPECT}px;${extra}">`;
const dna = (lock, color, h, extra = '') => {
  const asp = lock === 'mark' ? DNA_MARK_ASPECT : DNA_FULL_ASPECT;
  return `<img class="chk logo" data-aspect="${asp}" data-name="dna" src="${img(`dna_${lock}_${color}`)}" style="height:${h}px;width:${h * asp}px;${extra}">`;
};

module.exports = { wayne, forbes, dna, GRAIN, A, img };

/* ---------- ink metrics: where the visible glyph edges are, as ratios of font-size ---------- */
async function inkMetrics(browser, text, cls, extraCss = '') {
  const page = await browser.newPage({ viewport: { width: 2400, height: 700 }, deviceScaleFactor: 1 });
  const S = 300;
  await page.setContent(`<style>${FONT_CSS}${tokens}body{background:#fff}#t{position:absolute;left:150px;top:150px;font-size:${S}px;color:#000;${extraCss}}</style><span id="t" class="${cls}">${text}</span>`);
  await page.evaluate(() => document.fonts.ready);
  const shot = (await page.screenshot()).toString('base64');
  const m = await page.evaluate(async (shot) => {
    const im = new Image(); im.src = 'data:image/png;base64,' + shot; await im.decode();
    const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
    const x = c.getContext('2d'); x.drawImage(im, 0, 0);
    const d = x.getImageData(0, 0, c.width, c.height).data;
    let x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
    for (let y = 0; y < c.height; y++) for (let xx = 0; xx < c.width; xx++) {
      if (d[(y * c.width + xx) * 4] < 128) { if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    }
    const r = document.getElementById('t').getBoundingClientRect();
    return { x0, y0, x1: x1 + 1, y1: y1 + 1, adv: r.width };
  }, shot);
  await page.close();
  return { left: (m.x0 - 150) / S, width: (m.x1 - m.x0) / S, top: (m.y0 - 150) / S, height: (m.y1 - m.y0) / S, advance: m.adv / S };
}

/* ---------- render + automated checks ---------- */
async function render(browser, d, opts) {
  const W = d.w || 1080, H = d.h || 1350, M = d.margin ?? 64;
  const body = d.body + (opts.guide ? '<div class="guide"></div>' : '');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${d.title}</title><style>${FONT_CSS}${tokens}#c{width:${W}px;height:${H}px}${d.css}</style></head><body><div id="c">${body}</div></body></html>`;
  if (!opts.guide) fs.writeFileSync(path.join(__dirname, `${d.id}.html`), html);
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: d.dsf || 2 });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0));
  const res = await page.evaluate(async ({ W, H, M, thumb, allowOverlap, onWayne, visBottom }) => {
    const errs = [];
    const faces = ['800 40px Syne', '700 15px Syne', '500 15px Syne', '900 100px Archivo', 'italic 400 40px "Instrument Serif"', '400 40px "Instrument Serif"'];
    await Promise.all(faces.map((f) => document.fonts.load(f)));
    for (const f of ['800 40px Syne', '700 15px Syne', '500 15px Syne', '900 100px Archivo', 'italic 400 40px "Instrument Serif"', '400 40px "Instrument Serif"'])
      if (!document.fonts.check(f)) errs.push('font not loaded: ' + f);
    const boxes = [...document.querySelectorAll('.chk')].map((e) => {
      const r = e.getBoundingClientRect();
      const n = e.dataset.name || e.textContent.trim().slice(0, 28) || e.className;
      if (e.dataset.ink) {   // poster words are checked by their measured INK box, not the advance box
        const [l, t, w, h] = e.dataset.ink.split(',').map(Number), fs = parseFloat(getComputedStyle(e).fontSize);
        return { n, x0: r.left + l * fs, y0: r.top + t * fs, x1: r.left + (l + w) * fs, y1: r.top + (t + h) * fs, e };
      }
      // a right-aligned tracked label carries one trailing letter-space that holds no ink
      const trail = e.classList.contains('r') ? parseFloat(getComputedStyle(e).letterSpacing) || 0 : 0;
      return { n, x0: r.left, y0: r.top, x1: r.right - trail, y1: r.bottom, e };
    });
    const tol = 0.5;
    for (const b of boxes) {
      if (b.x0 < M - tol || b.y0 < M - tol || b.x1 > W - M + tol || b.y1 > H - M + tol)
        errs.push(`outside safe area: ${b.n} [${b.x0.toFixed(0)},${b.y0.toFixed(0)},${b.x1.toFixed(0)},${b.y1.toFixed(0)}]`);
      if (b.e.classList.contains('logo')) {
        const asp = (b.x1 - b.x0) / (b.y1 - b.y0), want = +b.e.dataset.aspect;
        if (Math.abs(asp / want - 1) > 0.005) errs.push(`logo aspect off: ${b.n} ${asp.toFixed(3)} vs ${want.toFixed(3)}`);
      }
      if (b.e.scrollWidth > b.e.clientWidth + 8 && !b.e.classList.contains('logo')) errs.push('text overflows its box: ' + b.n);
    }
    const hit = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++)
      if (hit(boxes[i], boxes[j]) && !boxes[i].e.contains(boxes[j].e) && !boxes[j].e.contains(boxes[i].e)) {
        const key = [boxes[i].n, boxes[j].n];
        if (!allowOverlap.some((p) => key.every((k) => p.some((q) => k.startsWith(q))))) errs.push(`overlap: ${boxes[i].n} x ${boxes[j].n}`);
      }
    if (thumb) {
      if (thumb.x0 < 0 || thumb.y0 < 0 || thumb.x1 > W || thumb.y1 > H) errs.push('thumb outside canvas');
      for (const b of [...boxes, ...[...document.querySelectorAll('.cover')].map((e) => { const r = e.getBoundingClientRect(); return { n: 'cover:' + e.className, x0: r.left, y0: r.top, x1: r.right, y1: r.bottom }; })])
        if (hit(thumb, b)) errs.push('thumb covered by: ' + b.n);
    }
    // no text or logo box may sit on Wayne's silhouette unless the design declares it
    const wi = document.getElementById('wayne');
    if (wi) {
      const r = wi.getBoundingClientRect(), cw = Math.round(r.width), ch = Math.round(r.height);
      const cv = document.createElement('canvas'); cv.width = cw; cv.height = ch;
      const cx = cv.getContext('2d'); cx.drawImage(wi, 0, 0, cw, ch);
      const al = cx.getImageData(0, 0, cw, ch).data;
      for (const b of boxes) {
        if (onWayne.some((q) => b.n.startsWith(q))) continue;
        let n = 0, tot = 0;
        for (let y = Math.max(0, Math.floor(b.y0 - r.top)); y < Math.min(ch, Math.ceil(Math.min(b.y1, visBottom) - r.top)); y++)
          for (let x = Math.max(0, Math.floor(b.x0 - r.left)); x < Math.min(cw, Math.ceil(b.x1 - r.left)); x++) { tot++; if (al[(y * cw + x) * 4 + 3] > 40) n++; }
        if (n > 12) errs.push(`collides with Wayne: ${b.n} (${n}px)`);
      }
    }
    const txt = document.getElementById('c').innerText;
    for (const bad of ['PRESS FEATURE', 'endorsed', 'approved', 'http']) if (txt.toLowerCase().includes(bad.toLowerCase())) errs.push('forbidden text: ' + bad);
    return { errs, boxes: boxes.map(({ e, ...b }) => b) };
  }, { W, H, M, thumb: d.geo && d.geo.thumb, allowOverlap: d.allowOverlap || [], onWayne: d.onWayne || [], visBottom: d.visBottom ?? H });
  if (d.geo && d.centre) {
    const gl = d.geo.shoulderL - d.centre.x0, gr = d.centre.x1 - d.geo.shoulderR;
    console.log(`  ${d.id} centring: knot x=${d.geo.knotX.toFixed(1)}  shoulder gaps L=${gl.toFixed(0)} R=${gr.toFixed(0)}`);
  }
  const out = path.join(ROOT, opts.guide ? `work/${d.id}_guide.png` : `outputs/${d.file}.png`);
  await page.screenshot({ path: out });
  await page.close();
  return { out, errs: res.errs };
}

async function main() {
  const args = process.argv.slice(2);
  const guide = args.includes('--guide');
  const want = args.filter((a) => !a.startsWith('--'));
  const browser = await chromium.launch();
  const ink = {
    FEATURED: await inkMetrics(browser, 'FEATURED', 'poster'),
  };
  const designs = require('./designs.cjs')(ink);
  let failed = false;
  for (const d of designs) {
    if (want.length && !want.includes(d.id)) continue;
    const r = await render(browser, d, { guide });
    console.log(`${d.id} -> ${path.relative(ROOT, r.out)}${r.errs.length ? '' : '  checks OK'}`);
    for (const e of r.errs) { console.log('   FAIL ' + e); failed = true; }
  }
  await browser.close();
  if (failed) process.exitCode = 1;
}
if (require.main === module) main();
