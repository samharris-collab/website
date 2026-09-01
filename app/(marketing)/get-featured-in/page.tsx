import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { FaqSection } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/cta'
import { topPublications } from '@/lib/content/publications'
import { faqs } from '@/lib/content/faq'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'Get Featured In — Choose Your Publication',
  description:
    'Forbes, USA Today, MSN, Entrepreneur, Yahoo Finance and more. What each publication actually runs, who it suits, and an honest answer on what can be promised.',
  alternates: { canonical: '/get-featured-in' },
}

const relevantFaqs = faqs.filter((faq) =>
  [
    "Can you guarantee I'll be featured in Forbes?",
    'Are these real publications?',
    'Will the article stay online permanently?',
    'How long does it take to get published?',
  ].includes(faq.question)
)

export default function GetFeaturedInPage() {
  const featured = topPublications.filter((p) => p.featured)
  const rest = topPublications.filter((p) => !p.featured)

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>Get featured</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            Pick the publication. We will tell you what is realistic.
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            Each page below explains what that publication actually is, the kind of client it suits,
            and — plainly — whether it is somewhere we can place you or somewhere we can only pitch
            toward. Those are different things, and most agencies will not tell you which is which.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
            Where our clients are published most often
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((publication, i) => (
            <Reveal as="li" key={publication.slug} delay={i * 0.04}>
              <article className="group relative flex h-full flex-col gap-4 rounded-md border border-line p-8 transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-line-strong hover:shadow-lg">
                <h3 className="font-display text-xl leading-heading tracking-tight text-ink">
                  <Link
                    href={`/get-featured-in/${publication.slug}`}
                    className="after:absolute after:inset-0"
                  >
                    {publication.name}
                  </Link>
                </h3>
                <p className="text-base leading-body text-ink-secondary">{publication.blurb}</p>
                <ArrowUpRight
                  aria-hidden
                  className="mt-auto size-5 text-ink-muted transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
            Also covered — including the ones we will not promise
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {rest.map((publication) => (
            <li key={publication.slug}>
              <article className="group relative flex h-full flex-col gap-3 bg-bg p-8 transition-colors hover:bg-bg-secondary">
                <h3 className="font-display text-lg leading-heading tracking-tight text-ink">
                  <Link
                    href={`/get-featured-in/${publication.slug}`}
                    className="after:absolute after:inset-0"
                  >
                    {publication.name}
                  </Link>
                </h3>
                <p className="text-sm leading-body text-ink-secondary">{publication.blurb}</p>
              </article>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-10 max-w-measure text-sm text-ink-muted">
            These eighteen are the ones people ask for by name. Our network runs to more than 1,100
            publications —{' '}
            <Link href="/publications" className="text-ink underline underline-offset-4">
              see the wider list
            </Link>
            , or tell us who you need to reach and we will recommend the fit.
          </p>
        </Reveal>
      </Section>

      <FaqSection faqs={relevantFaqs} eyebrow="Before you choose" heading="What we can and cannot promise" />

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Get featured', href: '/get-featured-in' },
        ])}
      />
    </>
  )
}
