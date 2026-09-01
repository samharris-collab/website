import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'

export const alt = 'Tell us who you want to reach.'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return ogImage({ eyebrow: 'Contact', title: 'Tell us who you want to reach.' })
}
