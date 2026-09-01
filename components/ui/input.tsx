import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'h-12 w-full rounded-sm border border-line bg-bg px-4 text-base text-ink transition-colors placeholder:text-ink-muted hover:border-line-strong disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-error',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'min-h-32 w-full resize-y rounded-sm border border-line bg-bg px-4 py-3 text-base leading-body text-ink transition-colors placeholder:text-ink-muted hover:border-line-strong disabled:cursor-not-allowed disabled:opacity-50',
      'aria-[invalid=true]:border-error',
      className
    )}
    {...props}
  />
))
Textarea.displayName = 'Textarea'

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      'h-12 w-full appearance-none rounded-sm border border-line bg-bg px-4 text-base text-ink transition-colors hover:border-line-strong disabled:cursor-not-allowed disabled:opacity-50',
      'aria-[invalid=true]:border-error',
      // Chevron drawn with a background image so the control keeps a native
      // popup on mobile (better than a JS listbox for a single form field).
      "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236E6E6E%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_8px] bg-[right_1rem_center] bg-no-repeat pr-10",
      className
    )}
    {...props}
  >
    {children}
  </select>
))
Select.displayName = 'Select'

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }
>(({ className, children, required, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'block font-sans text-xs font-medium uppercase tracking-wide text-ink-secondary',
      className
    )}
    {...props}
  >
    {children}
    {required && (
      <>
        <span aria-hidden className="ml-1 text-accent-ink dark:text-accent">
          *
        </span>
        <span className="sr-only"> (required)</span>
      </>
    )}
  </label>
))
Label.displayName = 'Label'

export const FieldError = ({ children }: { children?: React.ReactNode }) =>
  children ? (
    <p className="text-sm text-error" role="alert">
      {children}
    </p>
  ) : null
