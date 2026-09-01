import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { display, sans } from '@/lib/fonts'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeScript } from '@/components/theme-script'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingCta } from '@/components/layout/floating-cta'
import { Observability } from '@/components/observability'
import { JsonLd, organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/seo/json-ld'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'DNA PR — Get Featured in Forbes, MSN & 1,100+ Outlets',
    template: `%s | ${site.name}`,
  },
  description:
    "We pitch founders' and brands' stories to editors at MSN, USA Today, Forbes and 1,100+ trusted publications. You approve every word before it publishes.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
    url: site.url,
    title: 'DNA PR — Get Featured in Forbes, MSN & 1,100+ Outlets',
    description:
      "We pitch founders' and brands' stories to editors at MSN, USA Today, Forbes and 1,100+ trusted publications. You approve every word before it publishes.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DNA PR — Get Featured in Forbes, MSN & 1,100+ Outlets',
    description:
      "We pitch founders' and brands' stories to editors at MSN, USA Today, Forbes and 1,100+ trusted publications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'business',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(display.variable, sans.variable)}>
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-ink-inverse"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Header />
          {/* Bottom padding clears the fixed mobile action bar. */}
          <main id="main" className="pb-[3.75rem] md:pb-0">
            {children}
          </main>
          <Footer />
          <FloatingCta />
        </ThemeProvider>
        <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />
        <Analytics />
        <SpeedInsights />
        {/* useSearchParams needs a boundary so it cannot opt pages out of
            static rendering. */}
        <Suspense fallback={null}>
          <Observability />
        </Suspense>
      </body>
    </html>
  )
}
