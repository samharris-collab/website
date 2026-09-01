import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'
import { industries, industryBySlug } from '@/lib/content/industries'

export const alt = 'PR by industry — Digital Networking Agency'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }))
}

export default async function Image({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: slug } = await params
  const industry = industryBySlug.get(slug)
  return ogImage({
    eyebrow: 'Industries',
    title: industry?.title ?? 'PR by Industry',
    footnote: 'digitalnetworkingagency.com/pr-for',
  })
}
