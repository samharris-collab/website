import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'

export const alt = 'Four ways to work with DNA'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return ogImage({ eyebrow: 'Services', title: 'Four ways to work with DNA' })
}
