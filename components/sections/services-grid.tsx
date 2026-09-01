import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { SectionHeading } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { serviceTiers } from '@/lib/content/services'
import { waysToWork } from '@/lib/content/home'

export function ServicesGrid() {
  return (
    <Section tone="cream" id="services">
      <SectionHeading
        eyebrow={waysToWork.eyebrow}
        heading={waysToWork.heading}
        action={
          <Button asChild variant="secondary">
            <Link href={waysToWork.cta.href}>
              {waysToWork.cta.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        }
      />

      <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
        {serviceTiers.map((tier, i) => (
          <Reveal as="li" key={tier.id} delay={i * 0.06}>
            <article className="group relative flex h-full flex-col gap-6 rounded-md border border-line bg-bg p-8 transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-line-strong hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg md:p-10">
              <span
                aria-hidden
                className="font-display text-lg leading-none tracking-tight text-ink-muted"
              >
                {tier.eyebrow}
              </span>

              <h3 className="font-display text-xl leading-heading tracking-tight text-ink md:text-2xl">
                <Link href={tier.href} className="after:absolute after:inset-0">
                  {tier.name}
                </Link>
              </h3>

              <p className="text-base leading-body text-ink-secondary">{tier.description}</p>

              <span className="mt-auto inline-flex items-center gap-2 font-sans text-sm font-medium text-ink">
                Explore
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-200 ease-editorial group-hover:translate-x-1"
                />
              </span>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
