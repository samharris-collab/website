'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Fade + rise on scroll, done in CSS.
 *
 * Framer Motion drove this originally, which put ~60kB of JS on every page for
 * what is a two-property transition — the brief's own 200kB budget wins that
 * argument. The animation now lives in globals.css and this component only
 * toggles a class.
 *
 * Content is visible by default and is hidden ONLY once the inline head script
 * has set `html.js`, so a reader whose JavaScript fails still sees the page.
 * prefers-reduced-motion is handled in CSS, where it also cancels the hidden
 * state rather than merely shortening the animation to it.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  id,
  as: Tag = 'div',
}: {
  children: ReactNode
  /** Seconds, to match the previous Framer Motion call sites. */
  delay?: number
  className?: string
  id?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'ol' | 'ul'
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Anything already on screen at mount reveals immediately.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      id={id}
      className={cn('reveal', className)}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}

/** Hero variant: reveals on mount rather than on scroll. */
export function RevealOnMount({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <div
      className={cn('reveal reveal-on-mount', className)}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
