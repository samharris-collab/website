'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Sentry (browser) and PostHog, both optional and both imported lazily.
 *
 * Neither package is in the first-load bundle: the dynamic imports below only
 * execute when the corresponding key is present, so an unconfigured deploy pays
 * nothing. That is also what keeps the site inside its JS budget.
 */
export function Observability() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN
    if (!dsn) return
    let cancelled = false

    void import('@sentry/nextjs').then((Sentry) => {
      if (cancelled) return
      Sentry.init({
        dsn,
        environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'development',
        tracesSampleRate: 0.1,
        replaysOnErrorSampleRate: 0.1,
        replaysSessionSampleRate: 0,
        sendDefaultPii: false,
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) return
    let cancelled = false

    void import('posthog-js').then(({ default: posthog }) => {
      if (cancelled) return
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
        // Pageviews are captured below so that client-side navigations count too.
        capture_pageview: false,
        capture_pageleave: true,
        persistence: 'localStorage+cookie',
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  // One pageview per route change, including client-side navigation.
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
    void import('posthog-js').then(({ default: posthog }) => {
      if (!posthog.__loaded) return
      const query = searchParams.toString()
      posthog.capture('$pageview', {
        $current_url: `${window.location.origin}${pathname}${query ? `?${query}` : ''}`,
      })
    })
  }, [pathname, searchParams])

  return null
}

/**
 * Records a conversion event when one is configured. Safe to call
 * unconditionally — it resolves to nothing when PostHog is not set up.
 */
export async function track(event: string, properties?: Record<string, unknown>) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
  const { default: posthog } = await import('posthog-js')
  if (posthog.__loaded) posthog.capture(event, properties)
}
