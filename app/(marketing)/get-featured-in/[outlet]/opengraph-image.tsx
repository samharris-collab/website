import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'
import { publicationBySlug, topPublications } from '@/lib/content/publications'

export const alt = 'How to get featured — Digital Networking Agency'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return topPublications.map((publication) => ({ outlet: publication.slug }))
}

export default async function Image({ params }: { params: Promise<{ outlet: string }> }) {
  const { outlet } = await params
  const publication = publicationBySlug.get(outlet)
  return ogImage({
    eyebrow: 'Get featured',
    title: `How to get featured in ${publication?.name ?? 'the press'}`,
  })
}
