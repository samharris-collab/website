import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-sans text-xs font-medium tracking-wide uppercase',
  {
    variants: {
      variant: {
        outline: 'border border-line px-3 py-1.5 text-ink-secondary',
        solid: 'bg-ink px-3 py-1.5 text-ink-inverse',
        accent: 'bg-accent px-3 py-1.5 text-accent-ink',
        soft: 'bg-bg-secondary px-3 py-1.5 text-ink-secondary',
        bare: 'text-ink-muted',
      },
    },
    defaultVariants: { variant: 'outline' },
  }
)

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
