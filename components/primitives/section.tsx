import * as React from 'react'
import { cn } from '@/lib/utils'

type Tone = 'paper' | 'cream' | 'dark'

const toneClass: Record<Tone, string> = {
  paper: 'bg-bg text-ink',
  cream: 'bg-bg-secondary text-ink',
  // The dark tone pins its own tokens so it stays dark in both colour schemes.
  dark: 'bg-bg-dark text-ink-inverse dark:bg-bg-secondary',
}

export function Section({
  tone = 'paper',
  className,
  children,
  bleed = false,
  ...props
}: React.HTMLAttributes<HTMLElement> & { tone?: Tone; bleed?: boolean }) {
  return (
    <section className={cn('py-16 md:py-24', toneClass[tone], className)} {...props}>
      {bleed ? children : <div className="container-editorial">{children}</div>}
    </section>
  )
}

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container-editorial', className)} {...props} />
}
