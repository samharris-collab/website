# Content notes — what is locked, what needs your approval

The rebuild treats the existing copy as locked. Everything below is either
(a) preserved verbatim, or (b) new supporting copy that the current site did not
supply and that a page could not exist without. Section (b) is what needs a read
before launch.

## Locked and preserved verbatim

Reproduced word for word from the current site, in `lib/content/`:

| Content | File | Count |
| --- | --- | --- |
| Homepage hero, about, difference, section headings, CTAs | `home.ts` | — |
| Client reviews | `testimonials.ts` | 32 |
| Client placements (with live article links) | `placements.ts` | 12 |
| Homepage FAQ | `faq.ts` | 10 |
| Case study names, roles, outlets, summaries, slugs | `case-studies.ts` | 5 |
| Industry titles, slugs, meta descriptions | `industries.ts` | 12 |
| Guide titles and slugs | `guides.ts` | 44 |
| Publication names | `publications.ts` | 30 marquee + 18 footer |
| Navigation, footer, address, hours, legal line | `site.ts`, `footer.tsx` | — |

Every existing URL is preserved, including the transliterated case study slug
`/case-studies/andr-a-albright`. Where a page might be reached by an older or
alternative path, `next.config.ts` adds a 301 rather than a new URL.

## New supporting copy — please review

These pages exist in the sitemap but the brief supplied only their title and
meta description, so the page body is new writing. It was written to a strict
rule set: no invented statistics, no named editors or journalists, no placement
guarantees, no claimed affiliation with any publication, no specific prices.
Every factual claim is one the site already makes (45+ team, 1,100+ outlets,
100+ placements, unlimited revisions, client approval before publishing,
permanent placements, replies within 24 hours).

- **Services page detail** — `lib/content/services.ts`. The four tier names and
  descriptions are locked homepage copy; the `includes` bullets and `bestFor`
  lines are new.
- **The seven publication steps** — `lib/content/services.ts`. The homepage
  states "7 Steps to Publication" without listing them. These seven are
  reconstructed from the process described in the FAQ and in client reviews.
- **Case study narratives** — `lib/content/case-studies.ts`. The challenge /
  approach / outcome sections are new, written from the published articles.
- **Industry page bodies** — `lib/content/industries.ts`.
- **Publication page bodies** — `lib/content/outlets.ts`.
- **Guide bodies** — `lib/content/guide-bodies.ts`.
- **Legal pages** — `/privacy`, `/terms`, `/refunds`. These are drafts that
  describe the practices the rest of the site describes. **They are not legal
  advice and must be reviewed by your attorney before launch.**

## How that copy was checked

Everything in the list above was written against a fixed rule set — no invented
statistics, no named editors or journalists, no placement guarantees, no claimed
affiliation with any publication, no specific prices — and then read back
against that same rule set by a reviewer whose brief was to reject it.

The review found and we corrected:

- Two industry pages that listed Apple News and Google News as places a feature
  is commissioned. They are distribution surfaces; coverage reaches them through
  a publisher already in the network.
- A page that credited the publication with writing the article, when the site's
  own model is that our editorial team writes it.
- A publication page that gave the story questionnaire a duration ("under an
  hour") that nothing supports.
- Five guides carrying invented figures: a wire's reach in "hundreds of papers",
  a claim about what "most buying decisions" involve, a two-year payoff horizon,
  a one-year results duration, and a buyer's "ninety seconds of attention".
- A guide that grouped MarketWatch with contributed-content routes. It is a Dow
  Jones editorial property.
- Two passages that implied placement was assured — one an unbroken process with
  no branch where the publication declines, one the phrase "placements we
  control".
- A batch of duplicated and padded passages across adjacent guides, rewritten so
  each page carries something its neighbors cannot.

`scripts/check-content.mjs` keeps enforcing the mechanical half of these rules,
including a minimum length and a cross-guide duplicate-sentence check.

## Assets that could not be recovered

The build environment cannot reach `digitalnetworkingagency.com`, so the current
site's images could not be downloaded.

- `public/media/*.jpg` — art-directed vector compositions standing in for the
  hero, about, and case study photography, at the correct aspect ratios. Replace
  any file at the same path and nothing else changes. See `public/media/README.md`.
- `public/logos/` — empty. Publication wordmarks are licensed assets and are not
  reproduced here. Until a file is dropped in, `PublicationMark` sets the
  publication's name as type instead. See `public/logos/README.md`.
- `public/client-testimonial.mp4` — absent. The homepage renders the poster and
  attribution instead of an empty player; dropping the file in restores the
  player automatically.
