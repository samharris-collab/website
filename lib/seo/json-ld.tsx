import { site } from '@/lib/site'
import { absoluteUrl } from '@/lib/utils'
import { testimonials } from '@/lib/content/testimonials'
import type { Faq } from '@/lib/content/types'

/** Renders a JSON-LD block. Content is serialised safely for embedding in HTML. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // `</script>` inside a string value would otherwise close the tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: site.name,
  legalName: site.legalName,
  alternateName: site.shortName,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/icon-512.png'),
  email: site.email,
  telephone: site.phoneE164,
  slogan: site.tagline,
  description:
    "Digital Networking Agency helps founders and brands get featured in the world's most trusted publications — MSN, USA Today, Forbes and 100+ outlets.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram, site.trustpilot],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': absoluteUrl('/#localbusiness'),
  name: site.name,
  image: absoluteUrl('/icon-512.png'),
  url: absoluteUrl('/'),
  email: site.email,
  telephone: site.phoneE164,
  priceRange: '$$-$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: 'Worldwide',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: absoluteUrl('/'),
  name: site.name,
  publisher: { '@id': absoluteUrl('/#organization') },
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  }
}

export function articleSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(slug) },
    author: { '@type': 'Organization', name: site.name, url: absoluteUrl('/') },
    publisher: { '@id': absoluteUrl('/#organization') },
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: absoluteUrl('/media/hero-media.jpg'),
  }
}

/**
 * Review + AggregateRating for /reviews. Every review on the site is 5 stars, so
 * the aggregate is the review count at the top of the scale — no averaging games.
 */
export function reviewsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#localbusiness'),
    name: site.name,
    url: absoluteUrl('/'),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5, worstRating: 1 },
      reviewBody: t.quote,
    })),
  }
}
