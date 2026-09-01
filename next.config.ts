import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

/**
 * CSP notes
 * - `'unsafe-inline'` in script-src is required because the site is statically
 *   rendered: a per-request nonce would force every page to be dynamic and cost
 *   us the CDN cache (and the LCP budget). Everything else is allowlisted.
 * - `'unsafe-eval'` is dev-only (React Refresh).
 * - Analytics/Turnstile hosts are listed even when the corresponding env var is
 *   unset — the scripts simply never load, and the policy stays stable.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com https://*.vercel-scripts.com https://us-assets.i.posthog.com https://eu-assets.i.posthog.com https://challenges.cloudflare.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.vercel-insights.com",
  "font-src 'self' data:",
  "media-src 'self'",
  `connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://us.i.posthog.com https://eu.i.posthog.com https://*.ingest.sentry.io${isDev ? ' ws: http://localhost:*' : ''}`,
  'frame-src https://challenges.cloudflare.com',
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        // Immutable, content-addressed assets.
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Canonical host: non-www → www (301).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'digitalnetworkingagency.com' }],
        destination: 'https://www.digitalnetworkingagency.com/:path*',
        permanent: true,
      },
      // Legal pages live at clean top-level URLs.
      { source: '/legal/privacy', destination: '/privacy', permanent: true },
      { source: '/legal/terms', destination: '/terms', permanent: true },
      { source: '/legal/refunds', destination: '/refunds', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-and-conditions', destination: '/terms', permanent: true },
      { source: '/refund-policy', destination: '/refunds', permanent: true },
      // Legacy/alternate industry + blog paths.
      { source: '/industries', destination: '/pr-for', permanent: true },
      { source: '/industries/:slug', destination: '/pr-for/:slug', permanent: true },
      { source: '/blog', destination: '/guides', permanent: true },
      { source: '/blog/:slug', destination: '/guides/:slug', permanent: true },
      { source: '/get-featured', destination: '/get-featured-in', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
    ]
  },
}

export default nextConfig
