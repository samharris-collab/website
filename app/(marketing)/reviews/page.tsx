import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Stars } from '@/components/sections/testimonial-card'
import { ReviewsGrid } from '@/components/sections/reviews-grid'
import { FinalCta } from '@/components/sections/cta'
import { testimonials } from '@/lib/content/testimonials'
import { JsonLd, breadcrumbSchema, reviewsSchema } from '@/lib/seo/json-ld'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Digital Networking Agency Reviews',
  description: `Every review of Digital Networking Agency in one place — ${testimonials.length} five-star reviews from founders, physicians, attorneys and consultants we have published.`,
  alternates: { canonical: '/reviews' },
}

export default function ReviewsPage() {
  const verified = testimonials.filter((t) => t.verified).length

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>Client voices</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            Digital Networking Agency Reviews
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            Every review we have, in full and unedited — {testimonials.length} of them, {verified} of
            those verified on Trustpilot. Filter by where the review came from.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-3 rounded-full border border-line px-4 py-2">
              <Stars />
              <span className="text-sm text-ink">Rated 5.0 by clients</span>
            </span>
            <a
              href={site.trustpilot}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink"
            >
              Read them on Trustpilot
              <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </Section>

      <Section>
        <ReviewsGrid testimonials={testimonials} />

        <p className="mt-12 max-w-measure text-sm leading-body text-ink-muted">
          Reviews are reproduced exactly as their authors wrote them. Where a review names the
          publication a client was featured in, we have linked that outlet in the filter above.{' '}
          <Link href="/case-studies" className="text-ink underline underline-offset-4">
            See the published articles
          </Link>
          .
        </p>
      </Section>

      <FinalCta />

      <JsonLd data={reviewsSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Reviews', href: '/reviews' },
        ])}
      />
    </>
  )
}
