import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { FaqSection } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/cta'
import { compareOptions, comparePage, compareRows } from '@/lib/content/compare'
import { faqs } from '@/lib/content/faq'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'Compare Your Options for Getting Press',
  description:
    'Pitching it yourself, source-request platforms, cheap guaranteed placements, a retainer agency, or working with DNA — what each actually costs you, and where each falls down.',
  alternates: { canonical: '/compare' },
}

const relevantFaqs = faqs.filter((faq) =>
  [
    "Can you guarantee I'll be featured in Forbes?",
    'Are these real publications?',
    'Who is PR actually worth it for?',
    'How much does PR cost with DNA?',
  ].includes(faq.question)
)

export default function ComparePage() {
  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>{comparePage.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {comparePage.heading}
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            {comparePage.intro}
          </p>
        </Reveal>
      </Section>

      {/* The table is the scannable summary; the cards below carry the argument. */}
      <Section>
        <Reveal>
          <div
            className="overflow-x-auto"
            tabIndex={0}
            role="group"
            aria-label="Comparison of five routes to press coverage"
          >
            <table className="w-full min-w-[52rem] border-collapse text-left">
              <caption className="sr-only">
                How five routes to press coverage compare on cost, effort, timeline, editorial
                control and risk
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-40 border-b border-line pb-4 pr-6 align-bottom">
                    <span className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                      Option
                    </span>
                  </th>
                  {compareOptions.map((option) => (
                    <th
                      key={option.id}
                      scope="col"
                      className={
                        option.id === 'dna'
                          ? 'border-b-2 border-accent px-4 pb-4 align-bottom'
                          : 'border-b border-line px-4 pb-4 align-bottom'
                      }
                    >
                      <span className="font-display text-lg leading-heading tracking-tight text-ink">
                        {option.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.key}>
                    <th
                      scope="row"
                      className="border-b border-line py-5 pr-6 align-top font-sans text-xs font-medium uppercase tracking-wide text-ink-muted"
                    >
                      {row.label}
                    </th>
                    {compareOptions.map((option) => (
                      <td
                        key={option.id}
                        className={
                          option.id === 'dna'
                            ? 'border-b border-line bg-bg-secondary px-4 py-5 align-top text-sm leading-body text-ink'
                            : 'border-b border-line px-4 py-5 align-top text-sm leading-body text-ink-secondary'
                        }
                      >
                        {option[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <ul className="mt-16 flex flex-col gap-6">
          {compareOptions.map((option, i) => (
            <Reveal as="li" key={option.id} delay={i * 0.04}>
              <article
                className={
                  option.id === 'dna'
                    ? 'grid gap-8 rounded-md border-2 border-accent bg-bg-secondary p-8 md:p-10 lg:grid-cols-12'
                    : 'grid gap-8 rounded-md border border-line p-8 md:p-10 lg:grid-cols-12'
                }
              >
                <div className="lg:col-span-4">
                  <h2 className="font-display text-xl leading-heading tracking-tight text-ink md:text-2xl">
                    {option.name}
                  </h2>
                  <p className="mt-4 text-base leading-body text-ink-secondary">{option.summary}</p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                    Who it suits
                  </h3>
                  <p className="mt-4 text-base leading-body text-ink-secondary">
                    {option.whoItSuits}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                    Our honest take
                  </h3>
                  <p className="mt-4 text-base leading-body text-ink-secondary">
                    {option.honestTake}
                  </p>
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
              {comparePage.closing.heading}
            </h2>
            <p className="mt-5 text-base leading-body text-ink-secondary">
              {comparePage.closing.body}
            </p>
          </div>
          <Button asChild variant="accent" size="lg" className="shrink-0">
            <Link href="/contact">
              Ask us straight
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <FaqSection faqs={relevantFaqs} eyebrow="Common questions" heading="The questions worth asking any agency" />

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Compare options', href: '/compare' },
        ])}
      />
    </>
  )
}
