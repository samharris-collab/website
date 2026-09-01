import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * The DNA wordmark: a neon tile carrying a lowercase serif "dna", with the
 * tagline set beside it. `compact` drops the tagline for tight spaces.
 */
export function Logo({
  className,
  compact = false,
  href = '/',
}: {
  className?: string
  compact?: boolean
  href?: string | null
}) {
  const mark = (
    <span className={cn('flex items-center gap-3', className)}>
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent font-display text-lg leading-none text-accent-ink"
      >
        dna
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg leading-none tracking-tight">
            Digital Networking Agency
          </span>
          <span className="mt-1 font-sans text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted">
            It&rsquo;s in our DNA
          </span>
        </span>
      )}
      <span className="sr-only">Digital Networking Agency — home</span>
    </span>
  )

  if (!href) return mark

  return (
    <Link href={href} className="inline-flex rounded-sm" aria-label="Digital Networking Agency — home">
      {mark}
    </Link>
  )
}
