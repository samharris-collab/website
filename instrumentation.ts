import * as Sentry from '@sentry/nextjs'

/**
 * Server and edge error tracking. Initialising here rather than in a client
 * bundle means Sentry costs the browser nothing unless NEXT_PUBLIC_SENTRY_DSN is
 * also set, in which case the browser SDK is imported lazily (see
 * components/observability.tsx).
 *
 * With no DSN this is a no-op, so the site builds and runs unconfigured.
 */
export async function register() {
  const dsn = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN
  if (!dsn) return

  Sentry.init({
    dsn,
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    // Sampled rather than exhaustive: this is a marketing site, and full tracing
    // on every request buys nothing worth the quota.
    tracesSampleRate: 0.1,
    sendDefaultPii: false,
  })
}

export const onRequestError = Sentry.captureRequestError
