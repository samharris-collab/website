import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { Stars } from '@/components/sections/testimonial-card'
import { caseStudies, caseStudyBySlug } from '@/lib/content/case-studies'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudyBySlug.get(slug)
  if (!study) return {}

  return {
    title: `${study.name} — Featured in ${study.outlet}`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.name} — Featured in ${study.outlet}`,
      description: study.summary,
      images: [{ url: study.image, width: 1600, height: 1200, alt: study.name }],
    },
  }
}

const sections = [
  { key: 'challenge', label: 'The challenge' },
  { key: 'approach', label: 'What we did' },
  { key: 'outcome', label: 'The outcome' },
] as const

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudyBySlug.get(slug)
  if (!study) notFound()

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2)

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" />
            All case studies
          </Link>

          <Eyebrow className="mt-10">Featured in {study.outlet}</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {study.name}
          </h1>
          <p className="mt-5 text-lg text-ink-muted">{study.role}</p>
          <p className="mt-8 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            {study.summary}
          </p>

          {study.articleHref && (
            <Button asChild variant="secondary" size="lg" className="mt-10">
              <a href={study.articleHref} target="_blank" rel="noopener noreferrer">
                Read the published article
                <ArrowUpRight aria-hidden />
                <span className="sr-only"> on {study.outlet} (opens in a new tab)</span>
              </a>
            </Button>
          )}
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <figure className="overflow-hidden rounded-md shadow-editorial">
            <Image
              src={study.image}
              alt={`The published feature for ${study.name} in ${study.outlet}`}
              width={1600}
              height={1200}
              priority
              sizes="(min-width: 1280px) 1120px, 100vw"
              className="w-full object-cover"
            />
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {sections.map(({ key, label }, i) => (
              <Reveal key={key} delay={i * 0.06} className="border-t border-line py-10 first:pt-0">
                <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {label}
                </h2>
                <p className="mt-5 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
                  {study.detail[key]}
                </p>
              </Reveal>
            ))}

            {study.detail.quote && (
              <Reveal delay={0.2}>
                <figure className="border-t border-line pt-10">
                  <Stars />
                  <blockquote className="mt-6">
                    <p className="max-w-measure font-display text-xl leading-heading tracking-tight text-ink md:text-2xl">
                      &ldquo;{study.detail.quote.text}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 font-sans text-sm uppercase tracking-wide text-ink-muted">
                    {study.detail.quote.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="rounded-md border border-line bg-bg-secondary p-8 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
                <h2 className="font-display text-xl leading-heading tracking-tight text-ink">
                  Want the same?
                </h2>
                <p className="mt-4 text-base leading-body text-ink-secondary">
                  Tell us who you want to reach. We will recommend the outlets that fit and handle
                  the writing and placement, start to finish.
                </p>
                <Button asChild variant="accent" size="lg" className="mt-8 w-full">
                  <Link href="/contact">
                    Get featured
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <dl className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Client</dt>
                    <dd className="text-right text-ink">{study.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Role</dt>
                    <dd className="text-right text-ink">{study.role}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Outlet</dt>
                    <dd className="text-right text-ink">{study.outlet}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
          More client features
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {others.map((other, i) => (
            <Reveal as="li" key={other.slug} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col gap-4 rounded-md border border-line bg-bg p-8 transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-line-strong hover:shadow-lg">
                <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                  Featured in {other.outlet}
                </span>
                <h3 className="font-display text-xl leading-heading tracking-tight text-ink">
                  <Link
                    href={`/case-studies/${other.slug}`}
                    className="after:absolute after:inset-0"
                  >
                    {other.name}
                  </Link>
                </h3>
                <p className="text-base leading-body text-ink-secondary">{other.summary}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Case studies', href: '/case-studies' },
          { name: study.name, href: `/case-studies/${study.slug}` },
        ])}
      />
    </>
  )
}
