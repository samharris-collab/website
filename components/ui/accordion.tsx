import * as React from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * A disclosure list built on native <details>/<summary>.
 *
 * This replaced a Radix accordion, which cost ~19kB of JavaScript and left the
 * FAQ inoperable if that JavaScript failed. The native element gives correct
 * disclosure semantics for free, opens without JS, and `name` on <details>
 * provides the single-open behavior that previously needed a controlled
 * component.
 *
 * Height animates via ::details-content where the browser supports
 * interpolate-size (see globals.css); elsewhere it opens instantly, which is a
 * fair trade for a control that works with scripting disabled.
 */
export function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border-t border-line', className)} {...props} />
}

export function AccordionItem({
  question,
  children,
  name,
  className,
}: {
  question: React.ReactNode
  children: React.ReactNode
  /** Shared across a group so opening one closes the others. */
  name?: string
  className?: string
}) {
  return (
    <details name={name} className={cn('group border-b border-line', className)}>
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-display text-lg leading-heading tracking-tight text-ink transition-colors hover:text-ink-secondary [&::-webkit-details-marker]:hidden md:text-xl">
        {question}
        <Plus
          aria-hidden
          className="mt-1 size-5 shrink-0 text-ink-muted transition-transform duration-300 ease-editorial group-open:rotate-45 group-open:text-ink"
        />
      </summary>
      <div className="max-w-measure pb-8 pr-10 text-base text-ink-secondary">{children}</div>
    </details>
  )
}
