import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { PublicationMarquee } from '@/components/sections/publication-marquee'
import { FinalCta } from '@/components/sections/cta'
import { marqueePublications, publicationBySlug, topPublications } from '@/lib/content/publications'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'Publications — Where We Place Clients',
  description:
    'The publications our clients are featured in, from Forbes and USA Today to CEO Weekly and Benzinga — part of a network of more than 1,100 outlets.',
  alternates: { canonical: '/publications' },
}

export default function PublicationsPage() {
  // Merge the marquee list with the eighteen that have their own page, so every
  // name appears once and links out wherever a page exists.
  const seen = new Set<string>()
  const all = [...topPublications, ...marqueePublications]
    .filter((publication) => {
      if (seen.has(publication.slug)) return false
      seen.add(publication.slug)
      return true
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>Publications</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            Where our clients get published
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            Our network runs to more than 1,100 publications. Below are the ones clients name most
            often. Every placement is a real, permanent, searchable article on a genuine
            publication — not a directory listing or a paid link farm.
          </p>
        </Reveal>
      </Section>

      <Section>
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {all.map((publication) => {
            const hasPage = publicationBySlug.has(publication.slug)
            return (
              <li key={publication.slug}>
                {hasPage ? (
                  <Link
                    href={`/get-featured-in/${publication.slug}`}
                    className="group flex h-full flex-col justify-between gap-3 bg-bg p-6 transition-colors hover:bg-bg-secondary"
                  >
                    <span className="font-display text-lg leading-heading tracking-tight text-ink">
                      {publication.name}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                      How to get featured →
                    </span>
                  </Link>
                ) : (
                  <div className="flex h-full flex-col justify-between gap-3 bg-bg p-6">
                    <span className="font-display text-lg leading-heading tracking-tight text-ink">
                      {publication.name}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                      In our network
                    </span>
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <Reveal>
          <p className="mt-10 max-w-measure text-sm text-ink-muted">
            Not seeing the one you need? Tell us who your buyers are and we will recommend the
            outlets they already read —{' '}
            <Link href="/contact" className="text-ink underline underline-offset-4">
              start there
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <PublicationMarquee eyebrow="In their pages" heading="Our clients get media mentions that matter" />

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Publications', href: '/publications' },
        ])}
      />
    </>
  )
}
