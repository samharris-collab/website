import Image from 'next/image'
import { publicationLogo } from '@/lib/assets'
import { cn } from '@/lib/utils'
import type { Publication } from '@/lib/content/types'

/**
 * A publication's mark. Renders the licensed wordmark when one has been supplied
 * at /public/logos/<slug>.svg; otherwise sets the name as a typographic lockup —
 * which is deliberately not an imitation of the publication's own logo.
 */
export function PublicationMark({
  publication,
  className,
}: {
  publication: Publication
  className?: string
}) {
  const logo = publicationLogo(publication.slug)

  if (logo) {
    return (
      <Image
        src={logo}
        alt={publication.name}
        width={160}
        height={40}
        className={cn('h-6 w-auto object-contain md:h-7', className)}
      />
    )
  }

  return (
    <span
      className={cn(
        'whitespace-nowrap font-display text-lg leading-none tracking-tight md:text-xl',
        className
      )}
    >
      {publication.name}
    </span>
  )
}
