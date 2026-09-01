'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void; theme?: string }
      ) => string
      remove: (id: string) => void
    }
  }
}

/**
 * Renders nothing unless NEXT_PUBLIC_TURNSTILE_SITE_KEY is set, so the form
 * works on a preview deploy before Turnstile is provisioned.
 */
export function TurnstileWidget({ onToken }: { onToken: (token: string) => void }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    if (!siteKey || !ref.current) return
    const el = ref.current

    const tryRender = () => {
      if (!window.turnstile || widgetId.current) return true
      widgetId.current = window.turnstile.render(el, { sitekey: siteKey, callback: onToken })
      return true
    }

    if (tryRender() && widgetId.current) return
    const id = window.setInterval(() => {
      if (widgetId.current) window.clearInterval(id)
      else tryRender()
    }, 200)

    return () => {
      window.clearInterval(id)
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current)
        widgetId.current = null
      }
    }
  }, [siteKey, onToken])

  if (!siteKey) return null

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
      />
      <div ref={ref} />
    </>
  )
}
