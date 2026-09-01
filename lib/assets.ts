import { existsSync } from 'node:fs'
import path from 'node:path'

/**
 * Build-time asset presence checks.
 *
 * Two assets could not be recovered during the rebuild (the live site is not
 * reachable from the build environment): the client testimonial video and the
 * licensed publication wordmarks. Rather than ship a broken <video> element or a
 * grid of missing images, the components that need them ask here first and fall
 * back to a designed alternative. Drop the real file into /public at the path
 * below and the richer treatment turns itself on at the next build.
 */
const publicDir = path.join(process.cwd(), 'public')

export const hasAsset = (relativePath: string) =>
  existsSync(path.join(publicDir, relativePath.replace(/^\//, '')))

export const hasTestimonialVideo = () => hasAsset('client-testimonial.mp4')

/** Licensed wordmark for a publication, when one has been supplied. */
export const publicationLogo = (slug: string) => {
  for (const ext of ['svg', 'png', 'webp'] as const) {
    const rel = `logos/${slug}.${ext}`
    if (hasAsset(rel)) return `/${rel}`
  }
  return null
}
