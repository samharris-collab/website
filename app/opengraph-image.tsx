import { ogContentType, ogImage, ogSize } from '@/lib/seo/og'

export const alt = 'DNA PR — Get featured in Forbes, MSN and 1,100+ outlets'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return ogImage({
    eyebrow: 'Public Relations · Done Differently',
    title: 'Get featured in the world’s most trusted publications.',
  })
}
