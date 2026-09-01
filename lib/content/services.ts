import type { ServiceTier } from './types'

/**
 * The four ways to work with DNA. Names, descriptions and hrefs are locked copy
 * from the homepage. `includes` / `bestFor` are supporting detail assembled only
 * from claims already made elsewhere on the site (approval, revisions, outlet
 * count, permanence) — see CONTENT-NOTES.md.
 */
export const serviceTiers: ServiceTier[] = [
  {
    id: 'packages',
    eyebrow: '01',
    name: 'Foundation → Platinum Monthly Packages',
    description:
      'Ongoing PR with consistent placements, a dedicated team, and a strategy that compounds month over month.',
    href: '/services#packages',
    bestFor:
      'Founders and firms who want coverage to keep arriving, not a single moment.',
    includes: [
      'A dedicated publicist and editorial team',
      'A monthly placement schedule mapped to your goals',
      'Story development and full editorial writing',
      'Outlet selection across our 1,100+ publication network',
      'Unlimited revisions — nothing publishes without your sign-off',
      'Permanent, searchable articles that keep working after launch',
    ],
  },
  {
    id: 'alacarte',
    eyebrow: '02',
    name: 'A La Carte (Single Features)',
    description:
      'One bespoke, high-impact article written to your niche and placed in the outlet you want. Maximum visibility, short term.',
    href: '/services#alacarte',
    bestFor:
      'A specific moment — a launch, a funding round, an award, or a first credible feature.',
    includes: [
      'One feature, written to your niche and voice',
      'Outlet chosen before we start, with a realistic timeline',
      'A short questionnaire — you never write the article',
      'Unlimited revisions until it reads the way you want',
      'A permanent, searchable placement on a real publication',
    ],
  },
  {
    id: 'prime',
    eyebrow: '03',
    name: 'DNA Prime (Premium Strategy)',
    description:
      'Our flagship long-game — top-tier placements, SEO, AI reputation management and media training that makes you the name.',
    href: '/services#prime',
    bestFor:
      'Executives and firms whose buyers research them hard before they commit.',
    includes: [
      'Top-tier placement strategy across the outlets that matter to your buyers',
      'Search and AI reputation work — what people and answer engines find first',
      'Media training so interviews land the way the coverage does',
      'Ongoing story development, not one-off announcements',
      'A named team who knows your business',
    ],
  },
  {
    id: 'branding',
    eyebrow: '04',
    name: 'Elite Branding (Beyond PR)',
    description:
      'Websites, ads, design, social and SEO — everything around the coverage so the attention actually converts.',
    href: '/services#branding',
    bestFor:
      'Anyone who has coverage — or is about to — and nowhere good to send the traffic.',
    includes: [
      'Website design and build',
      'Brand and identity design',
      'Paid advertising and creative',
      'Social media strategy and production',
      'SEO so the coverage compounds',
    ],
  },
]

/**
 * The seven steps behind the "7 Steps to Publication" figure on the homepage,
 * written from the process described in the FAQ and client reviews.
 */
export const publicationSteps = [
  {
    number: '01',
    title: 'Consultation',
    body: 'We ask who you want to reach and what you want the coverage to do. If PR is not the right spend for your business, we say so.',
  },
  {
    number: '02',
    title: 'Outlet strategy',
    body: 'We recommend the publications your audience already trusts, and we are honest about which we can place you in and which we can only pitch toward.',
  },
  {
    number: '03',
    title: 'Story questionnaire',
    body: 'A short questionnaire captures your story in your own words. This is the only writing you do.',
  },
  {
    number: '04',
    title: 'Angle development',
    body: 'Our editorial team shapes the angle — the reason an editor runs this story now, rather than a press release nobody asked for.',
  },
  {
    number: '05',
    title: 'Editorial draft',
    body: 'We write the full piece to editorial standard, in your voice, with the facts checked against what you told us.',
  },
  {
    number: '06',
    title: 'Your approval',
    body: 'You review it. Unlimited revisions. Nothing goes live without your sign-off — every word, every time.',
  },
  {
    number: '07',
    title: 'Placement & publication',
    body: 'We place the piece, confirm it live, and send you the link and shareable assets. The article is permanent and searchable from day one.',
  },
] as const

export const servicesPage = {
  eyebrow: 'What we do',
  heading: 'Four ways to work with DNA',
  intro:
    'Every engagement is quoted to your goals — which outlets you want, how many placements, and how much writing is involved. Tell us what you are after and we will price it.',
} as const
