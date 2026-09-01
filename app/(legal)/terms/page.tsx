import type { Metadata } from 'next'
import { LegalPage } from '@/components/sections/legal-page'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'
import { termsAndConditions } from '@/lib/content/legal'

export const metadata: Metadata = {
  title: termsAndConditions.title,
  description: termsAndConditions.description,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <>
      <LegalPage document={termsAndConditions} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: termsAndConditions.title, href: '/terms' },
        ])}
      />
    </>
  )
}
