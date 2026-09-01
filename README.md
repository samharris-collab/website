# Digital Networking Agency

Marketing site for DNA PR — [digitalnetworkingagency.com](https://www.digitalnetworkingagency.com).

Next.js App Router, TypeScript in strict mode, Tailwind, deployed on Vercel.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

Nothing needs configuring to run locally. Copy `.env.example` to `.env.local`
when you want the contact form to actually deliver mail — see **Environment**.

```bash
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
```

## The checks

Three scripts audit the production build. Run `npm run build`, start the server
with `node scripts/serve.mjs`, then:

```bash
node scripts/a11y.mjs         # axe-core, WCAG 2.1 AA, 16 routes × light/dark
node scripts/check-links.mjs  # every internal link, image and #anchor
node scripts/perf.mjs         # bytes over the wire, LCP, CLS
```

All three run in CI on every pull request. `a11y.mjs` must report zero
violations; treat a regression there as a build failure, not a warning.

`scripts/screenshot.mjs <route> <out.png> [width] [--full] [--dark]` renders a
page for a visual check.

## How the code is arranged

```
app/(marketing)      every public page
app/(legal)          privacy, terms, refunds — routed at /privacy etc.
app/api/contact      form endpoint
components/ui        primitives (button, card, accordion, form fields)
components/sections  page sections
components/layout    header, footer, floating CTA
lib/content          ALL site copy, as typed data
lib/seo              JSON-LD and the Open Graph image template
scripts              audits and local tooling
```

### Copy lives in `lib/content`

Every word on the site is a typed constant, not JSX. To change a testimonial,
add a guide, or reword a service tier, edit the relevant file in `lib/content/`
— you should not need to touch a component. `CONTENT-NOTES.md` records what is
locked copy from the previous site and what was written for the rebuild.

### The design system

`app/globals.css` is the single source of truth: colour, type scale, line height
by role, letter spacing, the 8px spacing scale, radius, shadow and layout, in
both light and dark. `tailwind.config.ts` only exposes those variables to
Tailwind — and it *replaces* Tailwind's default palette, so a stray `slate-500`
will not compile. `lib/tokens.ts` mirrors the same values for the few places
that cannot read CSS (the Open Graph image renderer).

Adding a raw hex or px value to a component breaks that contract. If a value is
missing, add it to `globals.css` first.

### Images

`public/media/` currently holds art-directed vector compositions, because the
rebuild environment could not reach the live site to download the original
photography. They are the right aspect ratios, so layout and CLS are already
correct — drop a real photograph over any file at the same path and nothing else
changes. `public/media/README.md` lists them; `public/logos/README.md` explains
how to add licensed publication wordmarks.

## Environment

Everything is optional and the site degrades honestly without it. See
`.env.example` for the full list. Before launch you want at least:

| Variable | Why |
| --- | --- |
| `RESEND_API_KEY`, `RESEND_FROM` | Contact form delivery. Without it the endpoint returns 503 and the form offers a prefilled mailto instead of a false success. |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Rate limiting that holds across serverless instances. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Bot protection on the form. |

## Deploying

Vercel builds on push. `next.config.ts` carries the security headers, the
non-www to www redirect, and 301s from the previous site's alternate paths — if
you add or move a route, add the redirect there.
