# Launch checklist

Status against section 4.9 of the brief. Everything marked **you** needs an
account, a key, or a decision that this build cannot make for you.

## Done and verified

| Item | Evidence |
| --- | --- |
| Custom 404 | `app/not-found.tsx`, branded, links to the six routes that matter |
| Full favicon set | `favicon.ico`, `icon.svg`, `apple-touch-icon.png`, 192/512 PNGs, `site.webmanifest` |
| Every internal link, image and anchor verified | `node scripts/check-links.mjs` — zero broken |
| Contact form exercised end to end | `node scripts/check-contact-api.mjs` — validation, honeypot, rate limit |
| Spellcheck | `npm run spell` — zero issues across 95 files |
| Accessibility | `node scripts/a11y.mjs` — zero axe violations, 16 routes × light/dark |
| Performance budget | `node scripts/perf.mjs` — 201–209kB JS, CLS 0 |
| Mobile layout | Rendered and reviewed at 390px; the mobile action bar and sheet are purpose-built, not a scaled desktop |
| Dependabot | `.github/dependabot.yml`, weekly npm, monthly actions |
| CI | `.github/workflows/ci.yml` runs typecheck, lint, spelling, copy rules, build, audit, a11y, links, contact API, and web vitals on every PR |
| `npm audit` | Zero vulnerabilities, production and dev |
| Security headers | CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy — `next.config.ts` |
| Redirects | non-www → www, plus 301s from every legacy path shape |
| Sitemap and robots | Generated; robots disallows `/api/` only |
| JSON-LD | Organization, WebSite, LocalBusiness, FAQPage, Article, Review + AggregateRating, BreadcrumbList |

## Needs you before launch

| Item | What to do |
| --- | --- |
| **Contact form delivery** | Set `RESEND_API_KEY` and `RESEND_FROM` in Vercel. Until then the endpoint returns 503 and the form offers a prefilled mailto — deliberately, so no enquiry is silently lost. Send one real submission after setting it. |
| **Rate limiting across instances** | Set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. Without them the limiter is per-instance. |
| **Bot protection** | Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`. |
| **Error tracking** | Set `SENTRY_DSN` and `NEXT_PUBLIC_SENTRY_DSN`. |
| **Product analytics** | Set `NEXT_PUBLIC_POSTHOG_KEY`. Conversion events are already wired: `contact_form_submitted`, `contact_form_failed`, `cta_clicked`. |
| **Legal review** | `/privacy`, `/terms` and `/refunds` are drafts. They describe the practices the rest of the site describes and defer every commercial specific to your engagement letter. **Have your attorney read them and fill in the deferred terms.** |
| **Photography** | `public/media/` holds generated compositions, because the live site was unreachable from the build environment. Replace at the same paths and ratios — see `public/media/README.md`. |
| **Publication wordmarks** | `public/logos/` is empty by design. Drop licensed assets in and the marquee switches from type to images automatically — see `public/logos/README.md`. |
| **Testimonial video** | Add `public/client-testimonial.mp4` and the homepage switches from the poster card to a real player. |
| **Uptime monitoring** | Point UptimeRobot or BetterStack at `https://www.digitalnetworkingagency.com/` and `/api/contact` (expect 405 on GET, which is a fine liveness signal). |
| **Real device test** | Verified at 390px in Chromium. Worth ten minutes on an actual iPhone and a mid-range Android before you point DNS. |
| **DNS** | Verify the preview deploy first, then point the domain. The non-www → www redirect is already configured. |

## Worth knowing

- **Copy.** Every word from the previous site is preserved verbatim. Pages that
  the brief did not supply copy for carry new supporting copy written to a fixed
  rule set. `CONTENT-NOTES.md` lists exactly which is which.
- **The 200kB JS budget** cost two libraries: Framer Motion and Radix's
  accordion. Both were doing work CSS does natively. See the commit history if
  you want either back.
