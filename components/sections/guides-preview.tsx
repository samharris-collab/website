import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { SectionHeading } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'
import { featuredGuideSlugs, guideBySlug, guides } from '@/lib/content/guides'
import { guideBodyBySlug } from '@/lib/content/guide-bodies'
import { guidesSection } from '@/lib/content/home'

export function GuidesPreview() {
  const featured = featuredGuideSlugs
    .map((slug) => guideBySlug.get(slug))
    .filter((guide) => guide !== undefined && guideBodyBySlug.has(guide.slug))

  return (
    <Section id="guides">
      <SectionHeading
        eyebrow={guidesSection.eyebrow}
        heading={guidesSection.heading}
        action={
          <Button asChild variant="secondary">
            <Link href={guidesSection.cta.href}>
              {guidesSection.cta.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        }
      />

      <ul className="mt-12 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((guide, i) => (
          <Reveal as="li" key={guide!.slug} delay={i * 0.05}>
            <article className="group relative flex h-full flex-col gap-4 bg-bg p-8 transition-colors hover:bg-bg-secondary">
              <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                {guide!.category}
              </span>
              <h3 className="font-display text-lg leading-heading tracking-tight text-ink md:text-xl">
                <Link href={`/guides/${guide!.slug}`} className="after:absolute after:inset-0">
                  {guide!.title}
                </Link>
              </h3>
              <p className="text-sm leading-body text-ink-secondary">{guide!.description}</p>
              <ArrowUpRight
                aria-hidden
                className="mt-auto size-5 text-ink-muted transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="mt-10 text-sm text-ink-muted">
          {guides.filter((g) => guideBodyBySlug.has(g.slug)).length} guides on getting featured, what it costs, and how to tell a real agency
          from a bad one.{' '}
          <Link href="/guides" className="text-ink underline underline-offset-4">
            Browse them all
          </Link>
          .
        </p>
      </Reveal>
    </Section>
  )
}
