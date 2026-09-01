import type { Metadata } from 'next'
import { LegalPage } from '@/components/sections/legal-page'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'
import { refundPolicy } from '@/lib/content/legal'

export const metadata: Metadata = {
  title: refundPolicy.title,
  description: refundPolicy.description,
  alternates: { canonical: '/refunds' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <>
      <LegalPage document={refundPolicy} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: refundPolicy.title, href: '/refunds' },
        ])}
      />
    </>
  )
}
