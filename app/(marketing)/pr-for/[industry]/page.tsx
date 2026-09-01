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
import { industries, industryBySlug } from '@/lib/content/industries'
import { faqs } from '@/lib/content/faq'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>
}): Promise<Metadata> {
  const { industry: slug } = await params
  const industry = industryBySlug.get(slug)
  if (!industry) return {}

  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/pr-for/${industry.slug}` },
  }
}

/** The questions people ask on an industry page, drawn from the locked FAQ. */
const sharedFaqs = faqs.filter((faq) =>
  [
    'Who is PR actually worth it for?',
    'Do I have to write the article myself?',
    'Do I get to approve the article before it publishes?',
    'How long does it take to get published?',
    'How much does PR cost with DNA?',
  ].includes(faq.question)
)

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>
}) {
  const { industry: slug } = await params
  const industry = industryBySlug.get(slug)
  if (!industry) notFound()

  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 6)

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Link
            href="/pr-for"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" />
            All industries
          </Link>

          <Eyebrow className="mt-10">Industries</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {industry.title}
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-muted text-pretty">
            {industry.audience}
          </p>
          <div className="mt-8 flex max-w-measure flex-col gap-5">
            {industry.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-body text-ink-secondary">
                {paragraph}
              </p>
            ))}
          </div>
          <Button asChild variant="accent" size="lg" className="mt-10">
            <Link href="/contact">
              Get featured
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
                Why coverage works here
              </h2>
            </Reveal>
            <ul className="mt-8 flex flex-col">
              {industry.whyItWorks.map((point, i) => (
                <Reveal
                  as="li"
                  key={point.slice(0, 40)}
                  delay={i * 0.05}
                  className="flex gap-6 border-t border-line py-6"
                >
                  <span
                    aria-hidden
                    className="font-display text-lg leading-none tracking-tight text-ink-muted"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-body text-ink-secondary">{point}</p>
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-md border border-line bg-bg-secondary p-8 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
                <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                  Where work like this lands
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {industry.outlets.map((outlet) => (
                    <li
                      key={outlet}
                      className="border-b border-line pb-3 font-display text-lg tracking-tight text-ink last:border-0 last:pb-0"
                    >
                      {outlet}
                    </li>
                  ))}
                </ul>
                {/* Some of these we place in; some we can only pitch toward. Saying
                    which is which, before anyone pays, is the whole promise. */}
                <p className="mt-6 border-t border-line pt-6 text-sm leading-body text-ink-muted">
                  Which of these we can place you in, and which we can only pitch toward, we tell
                  you before you pay. They are different things.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Story angles"
          heading="What we would write about you"
          lead="An editor runs a story because it says something, not because a company exists. These are the angles that tend to work for this audience."
        />
        <ul className="mt-12 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-2">
          {industry.angles.map((angle, i) => (
            <Reveal as="li" key={angle.title} delay={i * 0.05} className="flex flex-col gap-4 bg-bg p-8 md:p-10">
              <h3 className="font-display text-xl leading-heading tracking-tight text-ink">
                {angle.title}
              </h3>
              <p className="text-base leading-body text-ink-secondary">{angle.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal className="max-w-measure">
          <Eyebrow>The honest part</Eyebrow>
          <h2 className="mt-6 font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
            Why you might think this will not work
          </h2>
          <p className="mt-6 text-lg leading-body text-ink-secondary text-pretty">
            {industry.objection}
          </p>
        </Reveal>
      </Section>

      <FaqSection
        faqs={sharedFaqs}
        tone="cream"
        eyebrow="Common questions"
        heading="What working with us looks like"
        withSchema={false}
      />

      <Section>
        <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
          Other industries we work with
        </h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/pr-for/${other.slug}`}
                className="inline-flex rounded-full border border-line px-4 py-2 text-sm text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
              >
                {other.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/pr-for' },
          { name: industry.title, href: `/pr-for/${industry.slug}` },
        ])}
      />
    </>
  )
}
