import type { Metadata } from 'next'
import { LegalPage } from '@/components/sections/legal-page'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'
import { privacyPolicy } from '@/lib/content/legal'

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <>
      <LegalPage document={privacyPolicy} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: privacyPolicy.title, href: '/privacy' },
        ])}
      />
    </>
  )
}
