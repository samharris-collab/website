/** Shared content types. Every piece of site copy is authored as typed data. */

export type Testimonial = {
  name: string
  /** e.g. "Featured in MSN" or "Verified Trustpilot review" */
  attribution: string
  quote: string
  /** Trustpilot-sourced reviews carry a verified badge. */
  verified: boolean
  /** Outlet slug when the review names a publication, for filtering. */
  outlet?: string
  rating: 5
}

export type Placement = {
  client?: string
  outlet: string
  title: string
  /** Human-readable date exactly as published, or a descriptor. */
  date: string
  href: string
}

export type CaseStudy = {
  slug: string
  name: string
  role: string
  outlet: string
  summary: string
  image: string
  /** Live article the placement produced, when public. */
  articleHref?: string
  /** Long-form sections rendered on the detail page. */
  detail: {
    challenge: string
    approach: string
    outcome: string
    quote?: { text: string; attribution: string }
  }
}

export type Industry = {
  slug: string
  title: string
  navLabel: string
  description: string
  /** Who this page is for, in one line. */
  audience: string
  /** Opening paragraphs, one entry per paragraph. */
  intro: string[]
  whyItWorks: string[]
  /** Publications where work for this audience tends to land. */
  outlets: string[]
  angles: { title: string; body: string }[]
  /** The strongest reason this audience thinks PR will not work for them. */
  objection: string
}

export type Guide = {
  slug: string
  title: string
  /** Meta description + card blurb. */
  description: string
  category: GuideCategory
  /** Reading time in minutes, computed from the body at build time. */
  outlet?: string
}

export type GuideCategory =
  | 'Outlet guides'
  | 'Industry guides'
  | 'Pricing & process'
  | 'Strategy & AI'

export type Faq = {
  question: string
  answer: string
}

export type Publication = {
  slug: string
  name: string
  /** Optional wordmark asset; falls back to a typographic lockup. */
  logo?: string
  /** Shown on /publications and /get-featured-in cards. */
  blurb?: string
  featured?: boolean
}

export type ServiceTier = {
  id: string
  eyebrow: string
  name: string
  description: string
  href: string
  /** Bullet list rendered on /services. */
  includes: string[]
  bestFor: string
}

export type Stat = {
  value: string
  label: string
}
