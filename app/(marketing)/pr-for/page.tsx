import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { FinalCta } from '@/components/sections/cta'
import { industries, industriesPage } from '@/lib/content/industries'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'PR by Industry',
  description:
    "Press coverage works differently depending on who you sell to. Pick the one that fits and we'll show you what it looks like for your business.",
  alternates: { canonical: '/pr-for' },
}

export default function IndustriesPage() {
  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>{industriesPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {industriesPage.heading}
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            {industriesPage.sub}
          </p>
        </Reveal>
      </Section>

      <Section>
        <ul className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <article className="group relative flex h-full flex-col gap-4 bg-bg p-8 transition-colors hover:bg-bg-secondary">
                <h2 className="font-display text-xl leading-heading tracking-tight text-ink">
                  <Link href={`/pr-for/${industry.slug}`} className="after:absolute after:inset-0">
                    {industry.title}
                  </Link>
                </h2>
                <p className="text-sm leading-body text-ink-secondary">{industry.description}</p>
                <ArrowUpRight
                  aria-hidden
                  className="mt-auto size-5 text-ink-muted transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </article>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-10 max-w-measure text-sm text-ink-muted">
            Not on the list? The test is simple: if your buyers research you before they commit,
            coverage is doing work for you.{' '}
            <Link href="/contact" className="text-ink underline underline-offset-4">
              Tell us who you sell to
            </Link>{' '}
            and we will say honestly whether it is worth your budget.
          </p>
        </Reveal>
      </Section>

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/pr-for' },
        ])}
      />
    </>
  )
}
