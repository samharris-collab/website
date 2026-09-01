import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/primitives/section'
import { Reveal } from '@/components/primitives/reveal'
import { finalCta, midCta } from '@/lib/content/home'

/** The interstitial banner that breaks up the long middle of the homepage. */
export function MidCta() {
  return (
    <section className="bg-accent py-16 text-accent-ink md:py-20">
      <Container>
        <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-measure font-display text-2xl leading-heading tracking-tight text-balance md:text-3xl">
            {midCta.text}
          </p>
          <Button asChild size="lg" className="shrink-0 bg-bg-dark text-ink-on-dark">
            <Link href={midCta.cta.href}>
              {midCta.cta.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

/** Closing banner. Centre-aligned: the composition is genuinely symmetrical. */
export function FinalCta() {
  return (
    <Section tone="dark">
      <Reveal className="mx-auto flex max-w-measure flex-col items-center text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-wide text-accent">
          {finalCta.eyebrow}
        </p>
        <h2 className="mt-6 font-display text-3xl leading-display tracking-tight md:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mt-6 text-lg leading-body text-ink-inverse/70 dark:text-ink-secondary">
          {finalCta.body}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent" size="lg">
            <Link href={finalCta.primaryCta.href}>
              {finalCta.primaryCta.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="inverse" size="lg" className="dark:border dark:border-line">
            <Link href={finalCta.secondaryCta.href}>{finalCta.secondaryCta.label}</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
