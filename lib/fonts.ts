import { Instrument_Serif, Inter } from 'next/font/google'

/**
 * Two typefaces, site-wide. next/font self-hosts both at build time, subsets
 * them, and emits size-adjusted fallback metrics — no layout shift, no request
 * to a third-party font host at runtime.
 */

export const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

export const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  fallback: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
})
