import { BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/lib/content/types'

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} aria-hidden className="text-sm leading-none text-accent-ink dark:text-accent">
          ★
        </span>
      ))}
    </span>
  )
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial
  className?: string
}) {
  return (
    <figure
      className={cn(
        'flex h-full flex-col justify-between gap-8 rounded-md border border-line bg-bg p-8 md:p-10',
        className
      )}
    >
      <div>
        <Stars count={testimonial.rating} />
        <blockquote className="mt-6">
          <p className="font-display text-lg leading-heading tracking-tight text-ink text-pretty md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
      </div>

      <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6">
        <span className="font-sans text-sm font-medium text-ink">{testimonial.name}</span>
        <span aria-hidden className="text-ink-muted">
          ·
        </span>
        <span className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-wide text-ink-muted">
          {testimonial.verified && <BadgeCheck aria-hidden className="size-3.5" />}
          {testimonial.attribution}
        </span>
      </figcaption>
    </figure>
  )
}
