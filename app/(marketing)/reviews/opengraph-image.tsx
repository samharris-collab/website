import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'

export const alt = 'Digital Networking Agency Reviews'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return ogImage({ eyebrow: 'Client voices', title: 'Digital Networking Agency Reviews' })
}
