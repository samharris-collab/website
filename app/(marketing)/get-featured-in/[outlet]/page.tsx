import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow, SectionHeading } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { FaqSection } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/cta'
import { publicationBySlug, topPublications } from '@/lib/content/publications'
import { outletPageBySlug } from '@/lib/content/outlets'
import { guides } from '@/lib/content/guides'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return topPublications.map((publication) => ({ outlet: publication.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ outlet: string }>
}): Promise<Metadata> {
  const { outlet: slug } = await params
  const publication = publicationBySlug.get(slug)
  if (!publication) return {}

  return {
    title: `How to Get Featured in ${publication.name}`,
    description:
      publication.blurb ??
      `What ${publication.name} publishes, who it suits, and an honest answer about what can be promised.`,
    alternates: { canonical: `/get-featured-in/${publication.slug}` },
  }
}

export default async function OutletPage({ params }: { params: Promise<{ outlet: string }> }) {
  const { outlet: slug } = await params
  const publication = publicationBySlug.get(slug)
  const page = outletPageBySlug.get(slug)
  if (!publication || !page) notFound()

  const relatedGuide = guides.find((guide) => guide.outlet === publication.name)
  const others = topPublications.filter((p) => p.slug !== publication.slug)

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Link
            href="/get-featured-in"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" />
            All publications
          </Link>

          <Eyebrow className="mt-10">Get featured</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            How to get featured in {publication.name}
          </h1>
          <div className="mt-8 flex max-w-measure flex-col gap-5">
            {page.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-body text-ink-secondary text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <Button asChild variant="accent" size="lg" className="mt-10">
            <Link href="/contact">
              Talk to us about {publication.name}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
              What {publication.name} actually is
            </h2>
            <p className="mt-6 text-base leading-body text-ink-secondary">{page.whatItIs}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
              Who it suits
            </h2>
            <p className="mt-6 text-base leading-body text-ink-secondary">{page.whoItsFor}</p>
          </Reveal>
        </div>

        {/* The reality check is the point of the page, so it gets the loudest surface. */}
        <Reveal delay={0.12}>
          <aside className="mt-12 rounded-md border-2 border-accent bg-bg-secondary p-8 md:p-12">
            <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
              The honest answer
            </h2>
            <p className="mt-6 max-w-measure font-display text-xl leading-heading tracking-tight text-ink md:text-2xl">
              {page.realityCheck}
            </p>
          </aside>
        </Reveal>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="How we approach it"
          heading={`Our route to ${publication.name}`}
          lead="You write nothing beyond a short questionnaire. Nothing is submitted or published without your sign-off."
        />
        <ol className="mt-12 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {page.howItWorks.map((step, i) => (
            <Reveal
              as="li"
              key={step.slice(0, 40)}
              delay={i * 0.05}
              className="flex flex-col gap-4 bg-bg p-8"
            >
              <span
                aria-hidden
                className="font-display text-lg leading-none tracking-tight text-accent-ink dark:text-accent"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-base leading-body text-ink-secondary">{step}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <FaqSection
        faqs={page.faqs}
        eyebrow="Questions"
        heading={`${publication.name}, answered straight`}
      />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
              Keep reading
            </h2>
            {relatedGuide && (
              <p className="mt-6 max-w-measure text-base leading-body text-ink-secondary">
                Our longer guide goes deeper on what {publication.name} runs and how to build a story
                that fits it.
              </p>
            )}
            {relatedGuide && (
              <Button asChild variant="secondary" className="mt-8">
                <Link href={`/guides/${relatedGuide.slug}`}>
                  {relatedGuide.title}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            )}
          </div>
          <nav aria-label="Other publications" className="lg:col-span-7">
            <h3 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
              Other publications
            </h3>
            <ul className="mt-6 flex flex-wrap gap-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/get-featured-in/${other.slug}`}
                    className="inline-flex rounded-full border border-line px-4 py-2 text-sm text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
                  >
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Get featured', href: '/get-featured-in' },
          { name: publication.name, href: `/get-featured-in/${publication.slug}` },
        ])}
      />
    </>
  )
}
