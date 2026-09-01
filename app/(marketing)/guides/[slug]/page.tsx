import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { FinalCta } from '@/components/sections/cta'
import { guideBodyBySlug } from '@/lib/content/guide-bodies'
import { guideBySlug, guides } from '@/lib/content/guides'
import { publicationBySlug, topPublications } from '@/lib/content/publications'
import { articleSchema, breadcrumbSchema, faqSchema, JsonLd } from '@/lib/seo/json-ld'

/** Only guides that actually have a body are routed. */
export function generateStaticParams() {
  return guides.filter((guide) => guideBodyBySlug.has(guide.slug)).map((guide) => ({ slug: guide.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = guideBySlug.get(slug)
  if (!guide) return {}

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { type: 'article', title: guide.title, description: guide.description },
  }
}

/** Publication slug for the outlet a guide is about, when it has a page. */
function outletSlugFor(name: string | undefined) {
  if (!name) return null
  return topPublications.find((p) => p.name === name)?.slug ?? null
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guideBySlug.get(slug)
  const body = guideBodyBySlug.get(slug)
  if (!guide || !body) notFound()

  const outletSlug = outletSlugFor(guide.outlet)
  const outlet = outletSlug ? publicationBySlug.get(outletSlug) : undefined
  const related = guides
    .filter((g) => g.slug !== guide.slug && g.category === guide.category)
    .filter((g) => guideBodyBySlug.has(g.slug))
    .slice(0, 4)

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" />
            All guides
          </Link>

          <Eyebrow className="mt-10">{guide.category}</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {guide.title}
          </h1>
          <div className="mt-8 flex max-w-measure flex-col gap-5">
            {body.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-body text-ink-secondary text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <Reveal>
              <aside className="rounded-md border border-line bg-bg-secondary p-8">
                <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                  The short version
                </h2>
                <ul className="mt-6 flex flex-col gap-4">
                  {body.keyPoints.map((point) => (
                    <li key={point.slice(0, 40)} className="flex gap-4 text-base leading-body text-ink">
                      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>

            {body.sections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i * 0.03, 0.15)} className="mt-12">
                <h2
                  id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-5 max-w-measure text-base leading-body text-ink-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-6 flex max-w-measure flex-col gap-4">
                    {section.list.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-4 text-base leading-body text-ink-secondary"
                      >
                        <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {body.realityCheck && (
              <Reveal className="mt-12">
                <aside className="rounded-md border-2 border-accent bg-bg-secondary p-8 md:p-10">
                  <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                    The honest answer
                  </h2>
                  <p className="mt-5 max-w-measure font-display text-xl leading-heading tracking-tight text-ink md:text-2xl">
                    {body.realityCheck}
                  </p>
                </aside>
              </Reveal>
            )}

            <Reveal className="mt-16">
              <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
                Questions
              </h2>
              <Accordion className="mt-8">
                {body.faqs.map((faq) => (
                  <AccordionItem key={faq.question} name={`guide-${guide.slug}`} question={faq.question}>
                    {faq.answer}
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </article>

          <aside className="lg:col-span-4">
            <Reveal delay={0.1} className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <div className="rounded-md border border-line p-8">
                <h2 className="font-display text-xl leading-heading tracking-tight text-ink">
                  Would you rather we did it?
                </h2>
                <p className="mt-4 text-base leading-body text-ink-secondary">
                  We develop the angle, write the piece, and place it. You write nothing beyond a
                  short questionnaire, and nothing publishes without your sign-off.
                </p>
                <Button asChild variant="accent" className="mt-6 w-full">
                  <Link href="/contact">
                    Get featured
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                {outlet && (
                  <Link
                    href={`/get-featured-in/${outlet.slug}`}
                    className="mt-4 inline-block text-sm text-ink underline underline-offset-4"
                  >
                    How we approach {outlet.name}
                  </Link>
                )}
              </div>

              {body.sections.length > 2 && (
                <nav aria-label="On this page" className="mt-6 rounded-md border border-line p-8">
                  <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                    On this page
                  </h2>
                  <ul className="mt-5 flex flex-col gap-3">
                    {body.sections.map((section) => (
                      <li key={section.heading}>
                        <a
                          href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="text-sm text-ink-secondary hover:text-ink"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </Reveal>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="cream">
          <h2 className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
            More in {guide.category.toLowerCase()}
          </h2>
          <ul className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/guides/${other.slug}`}
                  className="flex h-full flex-col gap-3 bg-bg p-6 transition-colors hover:bg-bg-secondary"
                >
                  <span className="font-display text-lg leading-heading tracking-tight text-ink">
                    {other.title}
                  </span>
                  <span className="text-sm leading-body text-ink-secondary">{other.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FinalCta />

      <JsonLd
        data={articleSchema({
          headline: guide.title,
          description: guide.description,
          slug: `/guides/${guide.slug}`,
          datePublished: '2026-09-01',
        })}
      />
      <JsonLd data={faqSchema(body.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: guide.title, href: `/guides/${guide.slug}` },
        ])}
      />
    </>
  )
}
