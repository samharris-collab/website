import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { caseStudies } from '@/lib/content/case-studies'
import { guides } from '@/lib/content/guides'
import { guideBodyBySlug } from '@/lib/content/guide-bodies'
import { industries } from '@/lib/content/industries'
import { topPublications } from '@/lib/content/publications'
import { legalDocuments } from '@/lib/content/legal'

/**
 * Priorities describe relative importance within this site only — they are a
 * hint, not a ranking factor. Conversion routes rank above reference pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`

  const core: MetadataRoute.Sitemap = [
    { url: url('/'), changeFrequency: 'weekly', priority: 1 },
    { url: url('/contact'), changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/services'), changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/case-studies'), changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/pr-for'), changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/get-featured-in'), changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/publications'), changeFrequency: 'monthly', priority: 0.7 },
    { url: url('/guides'), changeFrequency: 'weekly', priority: 0.7 },
    { url: url('/reviews'), changeFrequency: 'monthly', priority: 0.7 },
    { url: url('/compare'), changeFrequency: 'monthly', priority: 0.6 },
    { url: url('/about'), changeFrequency: 'monthly', priority: 0.6 },
  ]

  return [
    ...core,
    ...caseStudies.map((study) => ({
      url: url(`/case-studies/${study.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...industries.map((industry) => ({
      url: url(`/pr-for/${industry.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...topPublications.map((publication) => ({
      url: url(`/get-featured-in/${publication.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Only guides that have a body are routed, so only those belong here.
    ...guides
      .filter((guide) => guideBodyBySlug.has(guide.slug))
      .map((guide) => ({
        url: url(`/guides/${guide.slug}`),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ...legalDocuments.map((doc) => ({
      url: url(`/${doc.slug}`),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    })),
  ]
}
