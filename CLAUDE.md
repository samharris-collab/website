# Working in this repo

Marketing site for Digital Networking Agency. Next.js App Router, TypeScript
strict, Tailwind, deployed on Vercel.

## Before you finish any change

```bash
npm run check        # typecheck, lint, spelling, copy rules
npm run build
node scripts/serve.mjs
node scripts/a11y.mjs && node scripts/check-links.mjs && node scripts/perf.mjs
```

`scripts/a11y.mjs` must report **zero** violations — it is a build gate, not a
warning. `scripts/perf.mjs` should stay at or under ~210kB of JS on the
homepage; the brief's budget is 200kB and React plus the Next runtime is ~152kB
of that, so there is very little headroom. Adding a client-side library to the
root layout will blow it.

## Two rules that are easy to break

**1. Copy lives in `lib/content/`, never in JSX.** Every word is a typed
constant. If you find yourself typing prose into a component, stop and put it in
a content file instead.

Some of that copy is *locked* — reproduced verbatim from the previous site and
not ours to reword: `testimonials.ts`, `faq.ts`, `home.ts`, `placements.ts`, the
titles and descriptions in `guides.ts`, and the names, roles, outlets, summaries
and slugs in `case-studies.ts` and `industries.ts`. `CONTENT-NOTES.md` is the
full list. Everything else was written for the rebuild and follows a rule set
that `scripts/check-content.mjs` partly enforces: no invented figures, no
prices, no named editors, no placement guarantees, no claimed affiliation with
any publication. Honesty about what cannot be promised is the brand's strongest
asset — do not soften it.

**2. `app/globals.css` is the only place a design value is defined.** Color,
type scale, line height, tracking, spacing, radius, shadow, layout — all of it,
in both light and dark. `tailwind.config.ts` only exposes those variables, and
it replaces Tailwind's default palette, so `slate-500` will not compile. A raw
hex or px value in a component is a bug; add the token first.

Two color tokens are easy to confuse:
- `ink-inverse` flips with the theme. Use it on a surface that also flips.
- `ink-on-dark` does not. Use it on a surface that is dark in both schemes —
  an image overlay, the accent band's button.

## Adding a route

Add the redirect in `next.config.ts` if it replaces an old path, and add it to
`app/sitemap.ts`. Dynamic sections filter their own lists (guides only appear
once they have a body in `guide-bodies.ts`), so keep that pattern rather than
listing slugs that do not resolve.

## What is deliberately not here

- **No animation library.** The scroll reveal is CSS plus an IntersectionObserver
  (`components/primitives/reveal.tsx`), and its hidden state is scoped to
  `html.js` so the page reads fine without JavaScript.
- **No accordion library.** The FAQ is native `<details name>`.
Both were removed for the JS budget; the commit messages explain the trade.
- **No images from the live site.** It is unreachable from the build
  environment, so `public/media/` holds generated compositions at the right
  aspect ratios. `public/logos/` is empty because publication wordmarks are
  licensed trademarks.

## Deploying

Vercel builds on push. Nothing needs environment variables to build or run —
every integration degrades honestly without its key. `LAUNCH.md` says which ones
matter before going live.
