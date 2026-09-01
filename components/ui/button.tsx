import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-all duration-200 ease-editorial disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        /** Default action. Ink on paper, lifts on hover. */
        primary:
          'bg-ink text-ink-inverse shadow-sm hover:-translate-y-0.5 hover:shadow-lg',
        /** Quieter sibling to primary. */
        secondary:
          'border border-line-strong bg-transparent text-ink hover:-translate-y-0.5 hover:bg-ink hover:text-ink-inverse',
        /** The one loud button. Reserved for the single most important action on a page. */
        accent:
          'bg-accent text-accent-ink shadow-sm hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg',
        ghost: 'bg-transparent text-ink hover:bg-bg-secondary',
        /** For use on dark sections. */
        inverse:
          'bg-bg text-ink shadow-sm hover:-translate-y-0.5 hover:shadow-lg',
        link: 'text-ink underline decoration-line-strong decoration-1 underline-offset-4 hover:decoration-2',
      },
      size: {
        sm: 'h-10 rounded-full px-4 text-sm [&_svg]:size-4',
        md: 'h-12 rounded-full px-6 text-sm [&_svg]:size-4',
        lg: 'h-14 rounded-full px-8 text-base [&_svg]:size-5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
