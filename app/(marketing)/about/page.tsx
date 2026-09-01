import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { Eyebrow, SectionHeading } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { DnaDifference } from '@/components/sections/dna-difference'
import { PublicationMarquee } from '@/components/sections/publication-marquee'
import { FinalCta } from '@/components/sections/cta'
import { about, stats } from '@/lib/content/home'
import { publicationSteps } from '@/lib/content/services'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About DNA PR',
  description:
    'DNA is a public relations agency specializing in results-driven PR and media relations, with a team of 45+ publicists, journalists, broadcasters and marketers.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            {about.heading}
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            {about.paragraphs[0]}
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <figure className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-md shadow-editorial">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={1600}
                height={1200}
                priority
                sizes="(min-width: 1280px) 1120px, 100vw"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <figcaption className="font-sans text-xs uppercase tracking-wide text-ink-muted">
              {about.caption}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-6">
              <p className="max-w-measure text-lg leading-body text-ink-secondary">
                {about.paragraphs[1]}
              </p>
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
                  {about.pullQuote}
                </p>
              </blockquote>
              <p className="max-w-measure text-lg leading-body text-ink-secondary">
                {about.closing}
              </p>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 gap-px border border-line bg-line">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-2 bg-bg p-6">
                    <dd className="order-1 font-display text-xl leading-none tracking-tight text-ink tabular">
                      {stat.value}
                    </dd>
                    <dt className="order-2 font-sans text-xs uppercase tracking-wide text-ink-muted">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
              <div className="mt-6 rounded-md border border-line bg-bg-secondary p-6">
                <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                  Where to find us
                </h2>
                <address className="mt-4 not-italic text-base leading-body text-ink-secondary">
                  {site.address.full}
                  <br />
                  {site.hours}
                </address>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 inline-block text-base text-ink underline underline-offset-4"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <DnaDifference />

      <Section tone="cream">
        <SectionHeading
          eyebrow="How we work"
          heading="Seven steps, every time"
          lead="You write nothing beyond a short questionnaire. Our editorial team does the rest, and nothing publishes without your sign-off."
          action={
            <Button asChild variant="secondary">
              <Link href="/services">
                See services
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          }
        />
        <ol className="mt-12 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {publicationSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.04} className="flex flex-col gap-4 bg-bg p-8">
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
        eyebrow="Our network"
        heading="Coverage placed across 1,100+ publications."
      />

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ])}
      />
    </>
  )
}
