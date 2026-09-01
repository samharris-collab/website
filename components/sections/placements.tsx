import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/section'
import { SectionHeading } from '@/components/primitives/section-heading'
import { HorizontalScroller } from '@/components/primitives/horizontal-scroller'
import { placements } from '@/lib/content/placements'
import { placementsSection } from '@/lib/content/home'

export function Placements() {
  return (
    <Section id="placements">
      <SectionHeading eyebrow={placementsSection.eyebrow} heading={placementsSection.heading} />

      <HorizontalScroller label="client placements" className="mt-12 md:mt-16">
        {placements.map((placement) => (
          <article
            key={placement.href}
            className="group relative flex w-[19rem] shrink-0 snap-start flex-col justify-between gap-8 rounded-md border border-line bg-bg p-6 transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-line-strong hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg sm:w-[22rem]"
          >
            <div>
              <p className="font-display text-lg leading-none tracking-tight text-ink">
                {placement.outlet}
              </p>
              {placement.client && (
                <p className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-muted">
                  {placement.client}
                </p>
              )}
              <h3 className="mt-6 text-base leading-body text-ink-secondary transition-colors group-hover:text-ink">
                <a
                  href={placement.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0"
                >
                  {placement.title}
                  <span className="sr-only"> — read on {placement.outlet} (opens in a new tab)</span>
                </a>
              </h3>
            </div>

            <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
              <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                {placement.date}
              </span>
              <ArrowUpRight
                aria-hidden
                className="size-5 shrink-0 text-ink-muted transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </div>
          </article>
        ))}
      </HorizontalScroller>
    </Section>
  )
}
