import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'

export const alt = 'About DNA PR'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return ogImage({ eyebrow: 'Who we are', title: 'About DNA PR' })
}
