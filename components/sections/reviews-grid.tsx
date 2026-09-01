'use client'

import { useMemo, useState } from 'react'
import { TestimonialCard } from './testimonial-card'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/lib/content/types'

type Filter = 'all' | 'trustpilot' | string

export function ReviewsGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const [filter, setFilter] = useState<Filter>('all')

  const outlets = useMemo(() => {
    const seen = new Map<string, string>()
    for (const t of testimonials) {
      if (t.outlet && !seen.has(t.outlet)) {
        // "Featured in MSN" → "MSN"
        seen.set(t.outlet, t.attribution.replace(/^Featured in /, ''))
      }
    }
    return [...seen.entries()]
  }, [testimonials])

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'All reviews', count: testimonials.length },
    {
      id: 'trustpilot',
      label: 'Verified on Trustpilot',
      count: testimonials.filter((t) => t.verified).length,
    },
    ...outlets.map(([slug, label]) => ({
      id: slug,
      label,
      count: testimonials.filter((t) => t.outlet === slug).length,
    })),
  ]

  const visible = testimonials.filter((t) => {
    if (filter === 'all') return true
    if (filter === 'trustpilot') return t.verified
    return t.outlet === filter
  })

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter reviews">
        {filters.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setFilter(option.id)}
            aria-pressed={filter === option.id}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              filter === option.id
                ? 'border-line-strong bg-ink text-ink-inverse'
                : 'border-line text-ink-secondary hover:border-line-strong hover:text-ink'
            )}
          >
            {option.label}
            <span className="ml-2 text-xs text-current opacity-60">{option.count}</span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-muted" role="status">
        Showing {visible.length} of {testimonials.length} reviews.
      </p>

      {/* A masonry column layout keeps short and long quotes from stretching each
          other; reading order still follows the DOM. */}
      <div className="mt-8 gap-6 md:columns-2 lg:columns-3">
        {visible.map((testimonial) => (
          <div
            key={`${testimonial.name}-${testimonial.quote.slice(0, 24)}`}
            className="mb-6 break-inside-avoid"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  )
}
