import type { Faq } from './types'

export type GuideSection = {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export type GuideBody = {
  slug: string
  /** Opening paragraphs, one entry per paragraph. */
  intro: string[]
  /** The takeaways, surfaced above the body as a summary card. */
  keyPoints: string[]
  sections: GuideSection[]
  /** Plain talk about what is and is not realistic. Required on outlet guides. */
  realityCheck?: string
  faqs: Faq[]
}

/**
 * Long-form guide bodies. Titles, slugs and descriptions are locked in
 * guides.ts; everything here is supporting copy written for the rebuild against
 * a fixed rule set — no invented statistics, no named editors, no placement
 * guarantees, no claimed affiliation with any publication, no specific prices.
 * See CONTENT-NOTES.md.
 */
export const guideBodies: GuideBody[] = []

export const guideBodyBySlug = new Map(guideBodies.map((g) => [g.slug, g]))
