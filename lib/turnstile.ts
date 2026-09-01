/**
 * Cloudflare Turnstile. Verification is skipped when TURNSTILE_SECRET_KEY is
 * unset so the form still works on a preview deploy; set both the secret and
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY to turn it on.
 */
export const turnstileConfigured = () => Boolean(process.env.TURNSTILE_SECRET_KEY)

export async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  if (!token) return false

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret, response: token, remoteip: ip }),
        cache: 'no-store',
      }
    )
    const result = (await response.json()) as { success: boolean }
    return result.success === true
  } catch (error) {
    console.error('[turnstile] verification failed', error)
    return false
  }
}
