import * as React from 'react'
import { cn } from '@/lib/utils'

type Tone = 'paper' | 'cream' | 'dark'

const toneClass: Record<Tone, string> = {
  paper: 'bg-bg text-ink',
  cream: 'bg-bg-secondary text-ink',
  // The dark tone pins its own tokens so it stays dark in both color schemes.
  dark: 'bg-bg-dark text-ink-inverse dark:bg-bg-secondary dark:text-ink',
}

export function Section({
  tone = 'paper',
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { tone?: Tone }) {
  return (
    <section className={cn('py-16 md:py-24', toneClass[tone], className)} {...props}>
      <div className="container-editorial">{children}</div>
    </section>
  )
}

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container-editorial', className)} {...props} />
}
