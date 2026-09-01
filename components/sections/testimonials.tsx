'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { Section } from '@/components/primitives/section'
import { SectionHeading } from '@/components/primitives/section-heading'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from './testimonial-card'
import { testimonials } from '@/lib/content/testimonials'
import { reviewsSection } from '@/lib/content/home'

const AUTOPLAY_MS = 6000

export function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()

  const step = useCallback((direction: 1 | -1) => {
    const el = railRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8
    const max = el.scrollWidth - el.clientWidth

    if (direction === 1 && el.scrollLeft >= max - 4) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    if (direction === -1 && el.scrollLeft <= 4) {
      el.scrollTo({ left: max, behavior: 'smooth' })
      return
    }
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }, [])

  // Autoplay stops for reduced-motion users and whenever the rail is hovered,
  // focused, or off-screen — it should never fight someone who is reading.
  useEffect(() => {
    if (reduced || paused) return
    const el = railRef.current
    if (!el) return

    let visible = true
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false
    })
    observer.observe(el)

    const id = window.setInterval(() => {
      if (visible && !document.hidden) step(1)
    }, AUTOPLAY_MS)

    return () => {
      window.clearInterval(id)
      observer.disconnect()
    }
  }, [paused, reduced, step])

  return (
    <Section tone="cream" id="reviews">
      <SectionHeading
        eyebrow={reviewsSection.eyebrow}
        heading={reviewsSection.heading}
        action={
          <Button asChild variant="secondary">
            <Link href="/reviews">
              Read all {testimonials.length} reviews
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        }
      />

      <div
        className="mt-12 md:mt-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div
          ref={railRef}
          tabIndex={0}
          role="group"
          aria-label="Client reviews"
          aria-roledescription="carousel"
          className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2 md:-mx-10 md:px-10 lg:-mx-20 lg:px-20"
        >
          {testimonials.map((testimonial) => (
            <div
              key={`${testimonial.name}-${testimonial.quote.slice(0, 24)}`}
              data-card
              className="w-[85vw] shrink-0 snap-start sm:w-[26rem]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous review"
            className="flex size-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-line-strong"
          >
            <ArrowLeft aria-hidden className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next review"
            className="flex size-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-line-strong"
          >
            <ArrowRight aria-hidden className="size-4" />
          </button>
        </div>
      </div>
    </Section>
  )
}
