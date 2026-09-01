import * as React from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function Eyebrow({
  children,
  className,
  rule = true,
}: {
  children: React.ReactNode
  className?: string
  rule?: boolean
}) {
  return (
    <p
      className={cn(
        'font-sans text-xs font-medium uppercase tracking-wide text-ink-muted',
        rule && 'rule-accent',
        className
      )}
    >
      {children}
    </p>
  )
}

/**
 * The standard section header: eyebrow, display heading, optional lead, optional
 * trailing action. Left-aligned by default — `align="center"` is reserved for
 * genuinely symmetrical compositions.
 */
export function SectionHeading({
  eyebrow,
  heading,
  lead,
  action,
  as: Tag = 'h2',
  align = 'left',
  className,
  headingClassName,
}: {
  eyebrow?: React.ReactNode
  heading: React.ReactNode
  lead?: React.ReactNode
  action?: React.ReactNode
  as?: 'h1' | 'h2'
  align?: 'left' | 'center'
  className?: string
  headingClassName?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'md:flex-col md:items-center md:text-center',
        className
      )}
    >
      <div className={cn('max-w-measure', align === 'center' && 'mx-auto')}>
        {eyebrow && <Eyebrow rule={align === 'left'}>{eyebrow}</Eyebrow>}
        <Tag
          className={cn(
            'mt-4 font-display text-2xl leading-heading tracking-tight text-balance md:text-3xl',
            headingClassName
          )}
        >
          {heading}
        </Tag>
        {lead && (
          <p className="mt-5 max-w-measure text-base leading-body text-ink-secondary text-pretty">
            {lead}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  )
}
