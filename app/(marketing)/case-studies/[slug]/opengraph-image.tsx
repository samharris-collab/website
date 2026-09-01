import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'
import { caseStudies, caseStudyBySlug } from '@/lib/content/case-studies'

export const alt = 'Client case study — Digital Networking Agency'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudyBySlug.get(slug)
  return ogImage({
    eyebrow: study ? `Featured in ${study.outlet}` : 'Case study',
    title: study?.name ?? 'Real clients. Real features.',
  })
}
