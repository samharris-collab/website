import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { FinalCta } from '@/components/sections/cta'
import { caseStudies, caseStudyIndex } from '@/lib/content/case-studies'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'Client Case Studies',
  description:
    'Real client features placed by DNA — founders and experts published in MSN, USA Today, Wall Street Times and more.',
  alternates: { canonical: '/case-studies' },
}

export default function CaseStudiesPage() {
  const [hero, ...rest] = caseStudies

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>{caseStudyIndex.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {caseStudyIndex.heading}
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            {caseStudyIndex.sub}
          </p>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-muted">
            <span className="font-sans text-xs uppercase tracking-wide">
              {caseStudyIndex.chipLabel}
            </span>
            {caseStudyIndex.chips.map((chip, i) => (
              <span key={chip} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-line">
                    ·
                  </span>
                )}
                <span className="font-display text-lg tracking-tight text-ink">{chip}</span>
              </span>
            ))}
          </p>
        </Reveal>
      </Section>

      <Section>
        {/* Lead case study gets the full editorial spread. */}
        {hero && (
          <Reveal>
            <article className="group relative grid gap-8 overflow-hidden rounded-md border border-line transition-all duration-200 ease-editorial hover:border-line-strong hover:shadow-lg lg:grid-cols-2 lg:gap-0">
              <div className="order-2 flex flex-col justify-center gap-6 p-8 lg:order-1 lg:p-12">
                <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                  Featured in {hero.outlet}
                </span>
                <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
                  <Link href={`/case-studies/${hero.slug}`} className="after:absolute after:inset-0">
                    {hero.name}
                  </Link>
                </h2>
                <p className="text-base text-ink-muted">{hero.role}</p>
                <p className="max-w-measure text-base leading-body text-ink-secondary">
                  {hero.summary}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink">
                  Read the case study
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-200 ease-editorial group-hover:translate-x-1"
                  />
                </span>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src={hero.image}
                  alt={`${hero.name}, featured in ${hero.outlet}`}
                  width={1600}
                  height={1200}
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="aspect-[4/3] w-full object-cover lg:h-full"
                />
              </div>
            </article>
          </Reveal>
        )}

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((study, i) => (
            <Reveal as="li" key={study.slug} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-line transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-line-strong hover:shadow-lg">
                <Image
                  src={study.image}
                  alt={`${study.name}, featured in ${study.outlet}`}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                    Featured in {study.outlet}
                  </span>
                  <h2 className="font-display text-xl leading-heading tracking-tight text-ink">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="after:absolute after:inset-0"
                    >
                      {study.name}
                    </Link>
                  </h2>
                  <p className="text-sm text-ink-muted">{study.role}</p>
                  <p className="text-base leading-body text-ink-secondary">{study.summary}</p>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-auto size-5 text-ink-muted transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-measure">
            <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
              {caseStudyIndex.bottomCta.heading}
            </h2>
            <p className="mt-5 text-base leading-body text-ink-secondary">
              {caseStudyIndex.bottomCta.body}
            </p>
          </div>
          <Button asChild variant="accent" size="lg" className="shrink-0">
            <Link href={caseStudyIndex.bottomCta.cta.href}>
              {caseStudyIndex.bottomCta.cta.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Case studies', href: '/case-studies' },
        ])}
      />
    </>
  )
}
