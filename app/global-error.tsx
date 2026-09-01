'use client'

import { useEffect } from 'react'

/**
 * Last-resort boundary: a render error in the root layout lands here, outside
 * every provider, so this renders its own minimal document body.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return
    void import('@sentry/nextjs').then((Sentry) => Sentry.captureException(error))
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF9F6',
          color: '#0A0A0A',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif',
          padding: '24px',
        }}
      >
        <main style={{ maxWidth: '32rem' }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6E6E6E',
            }}
          >
            Something went wrong
          </p>
          <h1 style={{ margin: '16px 0 0', fontSize: 32, lineHeight: 1.1, fontWeight: 600 }}>
            This page failed to load.
          </h1>
          <p style={{ margin: '16px 0 0', fontSize: 18, lineHeight: 1.5, color: '#4A4A4A' }}>
            The error has been logged. Try again, or email{' '}
            <a href="mailto:sam@digitalnetworkingagency.com" style={{ color: '#0A0A0A' }}>
              sam@digitalnetworkingagency.com
            </a>{' '}
            and we will reply within 24 hours.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 32,
              border: 0,
              borderRadius: 9999,
              backgroundColor: '#B4FB44',
              color: '#0A0A0A',
              padding: '14px 28px',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
