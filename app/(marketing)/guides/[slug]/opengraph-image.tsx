import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'
import { guideBodyBySlug } from '@/lib/content/guide-bodies'
import { guideBySlug, guides } from '@/lib/content/guides'

export const alt = 'Guide — Digital Networking Agency'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return guides.filter((g) => guideBodyBySlug.has(g.slug)).map((g) => ({ slug: g.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guideBySlug.get(slug)
  return ogImage({
    eyebrow: guide?.category ?? 'Guides',
    title: guide?.title ?? 'Guides on getting featured',
  })
}
