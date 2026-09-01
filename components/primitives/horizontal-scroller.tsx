'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * A snap-scrolling rail. Native scrolling does the work — so touch, trackpad and
 * keyboard all behave correctly — and the arrows are a desktop affordance layered
 * on top. The rail itself is focusable and labelled, so keyboard users can scroll
 * it with the arrow keys.
 */
export function HorizontalScroller({
  children,
  label,
  className,
  controlsClassName,
}: {
  children: React.ReactNode
  label: string
  className?: string
  controlsClassName?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({ atStart: true, atEnd: false })

  const sync = useCallback(() => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({
      atStart: el.scrollLeft <= 4,
      // A rail with nothing to scroll is "at the end" — both arrows disable.
      atEnd: max <= 4 || el.scrollLeft >= max - 4,
    })
  }, [])

  useEffect(() => {
    sync()
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', sync, { passive: true })
    const observer = new ResizeObserver(sync)
    observer.observe(el)
    return () => {
      el.removeEventListener('scroll', sync)
      observer.disconnect()
    }
  }, [sync])

  const scrollBy = (direction: 1 | -1) => {
    const el = ref.current
    if (!el) return
    // One "page" is a little less than the visible width, so a card stays in view
    // as an anchor between steps.
    el.scrollBy({ left: direction * el.clientWidth * 0.82, behavior: 'smooth' })
  }

  return (
    <div className={cn('relative', className)}>
      <div
        ref={ref}
        tabIndex={0}
        role="group"
        aria-label={label}
        className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2 md:-mx-10 md:px-10 lg:-mx-20 lg:px-20"
      >
        {children}
      </div>

      <div className={cn('mt-8 hidden items-center gap-3 md:flex', controlsClassName)}>
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={state.atStart}
          aria-label={`Scroll ${label} backward`}
          className="flex size-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-line-strong disabled:opacity-30 disabled:hover:border-line"
        >
          <ArrowLeft aria-hidden className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={state.atEnd}
          aria-label={`Scroll ${label} forward`}
          className="flex size-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-line-strong disabled:opacity-30 disabled:hover:border-line"
        >
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </div>
    </div>
  )
}
