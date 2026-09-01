'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FieldError, Input, Label, Select, Textarea } from '@/components/ui/input'
import { TurnstileWidget } from './turnstile-widget'
import { budgetRanges, contactDefaults, contactSchema, type ContactInput } from '@/lib/schemas/contact'
import { track } from '@/components/observability'
import { site } from '@/lib/site'

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'sent' }
  /** Delivery is not configured yet — offer the direct route instead. */
  | { kind: 'unconfigured'; mailto: string }
  | { kind: 'error'; message: string }

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [turnstileToken, setTurnstileToken] = useState<string>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaults,
    mode: 'onBlur',
  })

  const onToken = useCallback((token: string) => setTurnstileToken(token), [])

  const onSubmit = handleSubmit(async (values) => {
    setStatus({ kind: 'submitting' })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, turnstileToken }),
      })
      const body = (await response.json().catch(() => ({}))) as { error?: string }

      if (response.ok) {
        reset(contactDefaults)
        setStatus({ kind: 'sent' })
        // The one conversion that matters. No message body is sent — only the
        // shape of the enquiry.
        void track('contact_form_submitted', {
          budget: values.budget || 'unspecified',
          has_outlets: Boolean(values.outlets),
          has_company: Boolean(values.company),
        })
        return
      }

      if (body.error === 'EMAIL_NOT_CONFIGURED') {
        const subject = encodeURIComponent(`Enquiry from ${values.name}`)
        const lines = [
          values.company ? `Company / role: ${values.company}` : null,
          values.outlets ? `Outlets: ${values.outlets}` : null,
          values.budget ? `Budget: ${values.budget}` : null,
          '',
          values.message,
        ].filter(Boolean)
        setStatus({
          kind: 'unconfigured',
          mailto: `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`,
        })
        return
      }

      setStatus({
        kind: 'error',
        message: body.error ?? 'Something went wrong. Please try again, or email us directly.',
      })
      void track('contact_form_failed', { status: response.status })
    } catch {
      setStatus({
        kind: 'error',
        message: 'We could not reach the server. Check your connection, or email us directly.',
      })
    }
  })

  if (status.kind === 'sent') {
    return (
      <div className="rounded-md border border-line bg-bg p-8 md:p-10" role="status">
        <CheckCircle2 aria-hidden className="size-8 text-accent-ink dark:text-accent" />
        <h2 className="mt-6 font-display text-xl leading-heading tracking-tight text-ink md:text-2xl">
          Message received.
        </h2>
        <p className="mt-4 max-w-measure text-base leading-body text-ink-secondary">
          We reply within 24 hours. Check your inbox — a copy of what you sent is on its way to you
          now.
        </p>
        <Button className="mt-8" variant="secondary" onClick={() => setStatus({ kind: 'idle' })}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-md border border-line bg-bg p-6 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" required>
            Name
          </Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          <span id="name-error">
            <FieldError>{errors.name?.message}</FieldError>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          <span id="email-error">
            <FieldError>{errors.email?.message}</FieldError>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company / role</Label>
          <Input id="company" autoComplete="organization" {...register('company')} />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="budget">Budget range</Label>
          <Select id="budget" defaultValue="" {...register('budget')}>
            <option value="">Not sure yet</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="outlets">Which outlets are you interested in?</Label>
          <Input
            id="outlets"
            placeholder="Forbes, USA Today, MSN — or tell us who you want to reach"
            aria-describedby="outlets-hint"
            {...register('outlets')}
          />
          <p id="outlets-hint" className="text-sm text-ink-muted">
            Not sure? Say who your buyers are and we will recommend the outlets that fit.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="message" required>
            Message
          </Label>
          <Textarea
            id="message"
            rows={6}
            placeholder="What do you do, and what do you want the coverage to achieve?"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
          <span id="message-error">
            <FieldError>{errors.message?.message}</FieldError>
          </span>
        </div>
      </div>

      {/* Honeypot. Hidden from people and from assistive tech; bots fill it in. */}
      <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="mt-6">
        <TurnstileWidget onToken={onToken} />
      </div>

      {status.kind === 'error' && (
        <p className="mt-6 rounded-sm border border-error px-4 py-3 text-sm text-error" role="alert">
          {status.message}{' '}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      )}

      {status.kind === 'unconfigured' && (
        <div
          className="mt-6 rounded-sm border border-line bg-bg-secondary px-4 py-4 text-sm text-ink-secondary"
          role="alert"
        >
          <p className="text-ink">This form is not connected to our inbox yet.</p>
          <p className="mt-2">
            Rather than lose your message, send it directly —{' '}
            <a href={status.mailto} className="text-ink underline underline-offset-4">
              open it in your email app
            </a>{' '}
            with everything you typed already filled in.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="accent" size="lg" disabled={status.kind === 'submitting'}>
          {status.kind === 'submitting' ? 'Sending…' : 'Send message'}
          {status.kind !== 'submitting' && <ArrowRight aria-hidden />}
        </Button>
        <p className="text-sm text-ink-muted">{site.replyPromise}</p>
      </div>
    </form>
  )
}
