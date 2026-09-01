import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'

export const alt = 'Five ways to get press. Only one of them is us.'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return ogImage({ eyebrow: 'Compare options', title: 'Five ways to get press. Only one of them is us.' })
}
