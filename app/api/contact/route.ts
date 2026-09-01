import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schemas/contact'
import { clientIp, rateLimit } from '@/lib/rate-limit'
import { emailConfigured, notifySlack, sendContactEmails } from '@/lib/email'
import { verifyTurnstile } from '@/lib/turnstile'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const ip = clientIp(request.headers)

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 })
  }

  // Re-validate server-side with the same schema the client used.
  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the form and try again.', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }
  const input = parsed.data

  // Throttle first, so honeypot traffic is limited too and a caught bot learns
  // only that it is rate limited.
  const limit = await rateLimit(ip)
  if (!limit.success) {
    return NextResponse.json(
      {
        error:
          'That is a few too many submissions from this connection. Try again shortly, or email us directly.',
      },
      { status: 429, headers: { 'Retry-After': String(limit.resetSeconds) } }
    )
  }

  // Honeypot: the field is hidden from people, so any value is a bot. Answer 200
  // so it cannot tell it was caught. Validation deliberately accepts the field —
  // a 422 naming it would give the trap away.
  if (input.website) {
    console.warn('[contact] honeypot triggered', { ip })
    return NextResponse.json({ ok: true })
  }

  if (!(await verifyTurnstile(input.turnstileToken, ip))) {
    return NextResponse.json(
      { error: 'We could not verify that you are human. Please reload and try again.' },
      { status: 403 }
    )
  }

  if (!emailConfigured()) {
    // Better to say so than to show a success screen for a message nobody receives.
    console.error('[contact] RESEND_API_KEY is not set — submission not delivered', {
      email: input.email,
    })
    return NextResponse.json({ error: 'EMAIL_NOT_CONFIGURED' }, { status: 503 })
  }

  try {
    await sendContactEmails(input)
    await notifySlack(input)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] delivery failed', error)
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please email us directly.' },
      { status: 502 }
    )
  }
}
