import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'

export const alt = 'Real clients. Real features.'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return ogImage({ eyebrow: 'Case studies', title: 'Real clients. Real features.' })
}
