import type { Publication } from './types'

/**
 * Marquee logos. `logo` points at /public/logos/<slug>.svg when a licensed
 * wordmark asset is present; when it is absent the <PublicationMark> component
 * renders a typographic lockup instead, so the strip never shows a broken image.
 * See public/logos/README.md for the drop-in manifest.
 */
export const marqueePublications: Publication[] = [
  { slug: 'forbes', name: 'Forbes' },
  { slug: 'business-insider', name: 'Business Insider' },
  { slug: 'rolling-stone', name: 'Rolling Stone' },
  { slug: 'esquire', name: 'Esquire' },
  { slug: 'maxim', name: 'Maxim' },
  { slug: 'allure', name: 'Allure' },
  { slug: 'glamour', name: 'Glamour' },
  { slug: 'architectural-digest', name: 'Architectural Digest' },
  { slug: 'haute-beauty', name: 'Haute Beauty' },
  { slug: 'sports-illustrated', name: 'Sports Illustrated' },
  { slug: 'us-weekly', name: 'Us Weekly' },
  { slug: 'los-angeles-times', name: 'Los Angeles Times' },
  { slug: 'entrepreneur', name: 'Entrepreneur' },
  { slug: 'hollywood-life', name: 'Hollywood Life' },
  { slug: 'ok-magazine', name: 'OK! Magazine' },
  { slug: 'success-magazine', name: 'Success Magazine' },
  { slug: 'muscle-and-fitness', name: 'Muscle & Fitness' },
  { slug: 'womans-world', name: "Woman's World" },
  { slug: 'ibtimes', name: 'IBTimes' },
  { slug: 'investing-com', name: 'Investing.com' },
  { slug: 'flaunt', name: 'Flaunt' },
  { slug: 'haute-residence', name: 'Haute Residence' },
  { slug: 'the-business-journals', name: 'The Business Journals' },
  { slug: 'law-and-crime', name: 'Law & Crime' },
  { slug: 'law-news-day', name: 'Law News Day' },
  { slug: 'usa-today', name: 'USA Today' },
  { slug: 'benzinga', name: 'Benzinga' },
  { slug: 'fox', name: 'FOX' },
  { slug: 'ceo-weekly', name: 'CEO Weekly' },
  { slug: 'new-york-weekly', name: 'New York Weekly' },
]

/**
 * The 18 outlets that get a dedicated /get-featured-in/<slug> page and a footer
 * link. Order matches the footer column on the current site.
 */
export const topPublications: Publication[] = [
  {
    slug: 'forbes',
    name: 'Forbes',
    featured: true,
    blurb:
      'The business title most people name first. Contributor-led, editorially selective, and the hardest of the group to earn.',
  },
  {
    slug: 'usa-today',
    name: 'USA Today',
    featured: true,
    blurb:
      'National general-interest reach, strong search authority, and a contributor-content program that runs founder and expert profiles.',
  },
  {
    slug: 'msn',
    name: 'MSN',
    featured: true,
    blurb:
      'A syndication surface rather than an original newsroom — placements reach it through partner publications and land in front of an enormous audience.',
  },
  {
    slug: 'entrepreneur',
    name: 'Entrepreneur',
    featured: true,
    blurb:
      'Built for founders and operators. Practical, lesson-led stories travel further here than announcements.',
  },
  {
    slug: 'business-insider',
    name: 'Business Insider',
    featured: true,
    blurb:
      'Reported, staff-written business journalism. You earn a place in a story rather than supplying one.',
  },
  {
    slug: 'bloomberg',
    name: 'Bloomberg',
    blurb:
      'Markets and finance at the highest editorial bar. Realistically a source relationship, not a placement.',
  },
  {
    slug: 'fast-company',
    name: 'Fast Company',
    blurb:
      'Design, innovation and the future of work. Ideas-first — the story has to argue something.',
  },
  {
    slug: 'inc',
    name: 'Inc.',
    blurb:
      'Growth-stage company building. Numbers, operating detail and hard-won lessons carry the pitch.',
  },
  {
    slug: 'apple-news',
    name: 'Apple News',
    blurb:
      'A distribution channel, not a publisher. Coverage reaches it via publications already in the Apple News network.',
  },
  {
    slug: 'google-news',
    name: 'Google News',
    blurb:
      'An index, not an outlet. Getting in means being published somewhere Google already indexes as a news source.',
  },
  {
    slug: 'marketwatch',
    name: 'MarketWatch',
    blurb:
      'Markets, personal finance and the investor audience. Data and a defensible point of view do the work.',
  },
  {
    slug: 'yahoo-finance',
    name: 'Yahoo Finance',
    featured: true,
    blurb:
      'Huge finance readership fed by partner and wire content. One of the most reachable major-brand surfaces.',
  },
  {
    slug: 'benzinga',
    name: 'Benzinga',
    featured: true,
    blurb:
      'Fast-moving financial media with a clear route for company and founder announcements.',
  },
  {
    slug: 'ap-news',
    name: 'AP News',
    blurb:
      'Wire journalism with strict sourcing standards. Distribution reaches it through the wire, not through pitching a profile.',
  },
  {
    slug: 'fox-interviewer',
    name: 'Fox Interviewer',
    blurb:
      'Long-form interview format. Built for one subject, one point of view, at length.',
  },
  {
    slug: 'ceo-weekly',
    name: 'CEO Weekly',
    featured: true,
    blurb:
      'Founder and executive profiles. One of the most consistent homes for our client features.',
  },
  {
    slug: 'ny-weekly',
    name: 'NY Weekly',
    featured: true,
    blurb:
      'New York culture and business profiles, with strong reach into entrepreneurship coverage.',
  },
  {
    slug: 'international-business-times',
    name: "Int'l Business Times",
    blurb:
      'Global business and markets coverage with a wide international readership.',
  },
]

export const publicationBySlug = new Map(topPublications.map((p) => [p.slug, p]))
