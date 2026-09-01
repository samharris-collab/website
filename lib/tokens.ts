/**
 * Typed mirror of the CSS custom properties in app/globals.css.
 *
 * Use this ONLY where CSS variables can't reach: `opengraph-image.tsx` (Satori
 * renders outside the document), Framer Motion values, and canvas/SVG code.
 * Everywhere else, use the Tailwind scale — it reads the same variables and
 * follows the dark-mode switch, which these literals cannot.
 */

export const colors = {
  bgPrimary: '#FFFFFF',
  bgSecondary: '#FAF9F6',
  bgDark: '#0A0A0A',
  textPrimary: '#0A0A0A',
  textSecondary: '#4A4A4A',
  textMuted: '#8A8A8A',
  textInverse: '#FFFFFF',
  accentPrimary: '#B4FB44',
  accentHover: '#A3EA33',
  accentSoft: 'rgba(180, 251, 68, 0.12)',
  border: '#E8E8E8',
  borderStrong: '#1A1A1A',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
} as const

export const fontSize = {
  xs: '12px',
  sm: '14px',
  base: '18px',
  lg: '22px',
  xl: '30px',
  '2xl': '40px',
  '3xl': '54px',
  '4xl': '72px',
  '5xl': '96px',
} as const

export const lineHeight = {
  display: 0.95,
  heading: 1.1,
  body: 1.5,
  caption: 1.4,
} as const

export const tracking = {
  tight: '-0.03em',
  normal: '0',
  wide: '0.08em',
} as const

export const space = {
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '64px',
  7: '96px',
  8: '128px',
  9: '192px',
} as const

export const radius = {
  none: '0',
  sm: '4px',
  md: '12px',
  lg: '24px',
  full: '9999px',
} as const

export const shadow = {
  sm: '0 1px 2px rgba(0,0,0,0.04)',
  md: '0 4px 12px rgba(0,0,0,0.06)',
  lg: '0 12px 32px rgba(0,0,0,0.08)',
  editorial: '0 20px 60px rgba(0,0,0,0.12)',
} as const

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/** Shared motion vocabulary. Durations in seconds (Framer Motion units). */
export const motion = {
  duration: { fast: 0.2, base: 0.4, slow: 0.6 },
  ease: [0.16, 1, 0.3, 1] as const,
  riseDistance: 40,
} as const
