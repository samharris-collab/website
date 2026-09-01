import { Resend } from 'resend'
import { site } from './site'
import type { ContactInput } from './schemas/contact'

/**
 * Email delivery is only enabled when RESEND_API_KEY is set. Without it the
 * contact route returns a 503 and the form shows a direct-email fallback rather
 * than telling someone their enquiry was sent when it was not.
 */
export const emailConfigured = () => Boolean(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM ?? 'DNA PR <onboarding@resend.dev>'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

function row(label: string, value?: string) {
  if (!value) return ''
  return `<tr>
    <td style="padding:8px 16px 8px 0;color:#8A8A8A;font-size:13px;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#0A0A0A;font-size:15px">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
  </tr>`
}

function notificationHtml(input: ContactInput) {
  return `<!doctype html><html><body style="margin:0;background:#FAF9F6;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
  <div style="max-width:640px;margin:0 auto;padding:32px 24px">
    <div style="background:#B4FB44;color:#0A0A0A;padding:16px 24px;font-size:13px;letter-spacing:.08em;text-transform:uppercase">New inquiry</div>
    <div style="background:#fff;border:1px solid #E8E8E8;border-top:0;padding:24px">
      <table style="width:100%;border-collapse:collapse">
        ${row('Name', input.name)}
        ${row('Email', input.email)}
        ${row('Company / role', input.company || undefined)}
        ${row('Outlets', input.outlets || undefined)}
        ${row('Budget', input.budget || undefined)}
        ${row('Message', input.message)}
      </table>
    </div>
  </div></body></html>`
}

function confirmationHtml(input: ContactInput) {
  return `<!doctype html><html><body style="margin:0;background:#FAF9F6;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
  <div style="max-width:640px;margin:0 auto;padding:40px 24px">
    <div style="background:#fff;border:1px solid #E8E8E8;padding:32px">
      <p style="margin:0 0 24px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#8A8A8A">Digital Networking Agency</p>
      <h1 style="margin:0 0 20px;font-size:26px;line-height:1.2;color:#0A0A0A;font-weight:600">Thanks, ${escapeHtml(input.name.split(' ')[0] ?? input.name)} — we have your message.</h1>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4A4A4A">We reply within 24 hours. When we do, we will recommend the outlets that fit your audience and map out the fastest realistic path to your feature.</p>
      <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#4A4A4A">Here is what you sent us:</p>
      <blockquote style="margin:0 0 28px;padding:16px 20px;border-left:2px solid #B4FB44;background:#FAF9F6;font-size:15px;line-height:1.6;color:#0A0A0A">${escapeHtml(input.message).replace(/\n/g, '<br>')}</blockquote>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#8A8A8A">If it is urgent, reply to this email or call ${escapeHtml(site.phone)}.</p>
    </div>
  </div></body></html>`
}

const plain = (input: ContactInput) =>
  [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    input.company ? `Company / role: ${input.company}` : null,
    input.outlets ? `Outlets: ${input.outlets}` : null,
    input.budget ? `Budget: ${input.budget}` : null,
    '',
    input.message,
  ]
    .filter(Boolean)
    .join('\n')

export async function sendContactEmails(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is not set')
  const resend = new Resend(apiKey)

  // The notification is the one that must not fail; the confirmation to the
  // sender is best-effort and never blocks a successful submission.
  const notification = await resend.emails.send({
    from: FROM,
    to: site.email,
    replyTo: input.email,
    subject: `New inquiry — ${input.name}${input.budget ? ` (${input.budget})` : ''}`,
    html: notificationHtml(input),
    text: plain(input),
  })

  if (notification.error) {
    throw new Error(`Resend rejected the notification: ${notification.error.message}`)
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: input.email,
      replyTo: site.email,
      subject: 'We have your message — Digital Networking Agency',
      html: confirmationHtml(input),
      text: `Thanks ${input.name} — we have your message and reply within 24 hours.\n\nWhat you sent:\n${input.message}\n\n— Digital Networking Agency`,
    })
  } catch (error) {
    console.error('[contact] confirmation email failed', error)
  }
}

/** Optional Slack relay. No-ops unless SLACK_WEBHOOK_URL is set. */
export async function notifySlack(input: ContactInput) {
  const webhook = process.env.SLACK_WEBHOOK_URL
  if (!webhook) return

  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `*New inquiry* — ${input.name} <${input.email}>${
          input.budget ? ` · ${input.budget}` : ''
        }\n${input.outlets ? `Outlets: ${input.outlets}\n` : ''}${input.message}`,
      }),
    })
  } catch (error) {
    console.error('[contact] Slack notification failed', error)
  }
}
