import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow, SectionHeading } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { PublicationMarquee } from '@/components/sections/publication-marquee'
import { FaqSection } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/cta'
import { publicationSteps, serviceTiers, servicesPage } from '@/lib/content/services'
import { faqs } from '@/lib/content/faq'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'Services & Packages — PR That Gets You Published',
  description:
    'Monthly packages, single A La Carte features, DNA Prime strategy and Elite Branding. Every engagement is quoted to your goals — tell us what you are after and we will price it.',
  alternates: { canonical: '/services' },
}

/** The pricing questions from the homepage FAQ, surfaced where they are asked. */
const pricingFaqs = faqs.filter((faq) =>
  [
    'How much does PR cost with DNA?',
    "Can you guarantee I'll be featured in Forbes?",
    'How long does it take to get published?',
    'Do I have to write the article myself?',
  ].includes(faq.question)
)

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>{servicesPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {servicesPage.heading}
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            {servicesPage.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">
                Get a quote
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/case-studies">See client results</Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <ul className="flex flex-col gap-6">
          {serviceTiers.map((tier, i) => (
            <Reveal as="li" key={tier.id} id={tier.id} delay={i * 0.04} className="scroll-mt-32">
              <article className="grid gap-8 rounded-md border border-line p-8 md:p-12 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <span
                    aria-hidden
                    className="font-display text-lg leading-none tracking-tight text-ink-muted"
                  >
                    {tier.eyebrow}
                  </span>
                  <h2 className="mt-5 font-display text-2xl leading-heading tracking-tight text-ink">
                    {tier.name}
                  </h2>
                  <p className="mt-5 text-base leading-body text-ink-secondary">
                    {tier.description}
                  </p>
                  <p className="mt-6 border-l-2 border-accent pl-5 text-base leading-body text-ink">
                    <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                      Best for
                    </span>
                    <br />
                    {tier.bestFor}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                    What it includes
                  </h3>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-body text-ink-secondary">
                        <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent-ink dark:text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="primary" className="mt-8">
                    <Link href="/contact">
                      Talk to us about this
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="How it works"
          heading="Seven steps to publication"
          lead="The same process every time, whichever way you work with us. You write nothing beyond a short questionnaire, and nothing publishes without your sign-off."
        />

        <ol className="mt-12 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {publicationSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 0.04}
              className="flex flex-col gap-4 bg-bg p-8"
            >
              <span aria-hidden className="font-display text-lg leading-none tracking-tight text-accent-ink dark:text-accent">
                {step.number}
              </span>
              <h3 className="font-display text-lg leading-heading tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="text-sm leading-body text-ink-secondary">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <PublicationMarquee
        eyebrow="Where we place clients"
        heading="1,100+ publications, and an honest answer about which ones fit you."
      />

      <FaqSection
        faqs={pricingFaqs}
        eyebrow="Before you ask"
        heading="Pricing, timelines and what we will not promise"
      />

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ])}
      />
    </>
  )
}
