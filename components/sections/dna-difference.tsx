import { Section } from '@/components/primitives/section'
import { Reveal } from '@/components/primitives/reveal'
import { difference } from '@/lib/content/home'

export function DnaDifference() {
  return (
    <Section tone="dark" id="difference">
      <Reveal>
        <p className="font-sans text-xs font-medium uppercase tracking-wide text-accent">
          {difference.eyebrow}
        </p>
        <h2 className="mt-4 max-w-measure font-display text-2xl leading-heading tracking-tight md:text-3xl">
          {difference.heading}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-px bg-ink-inverse/15 md:mt-16 md:grid-cols-3">
        {difference.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.number}
            delay={i * 0.08}
            className="flex flex-col gap-5 bg-bg-dark p-8 dark:bg-bg-secondary md:p-10"
          >
            <span
              aria-hidden
              className="font-display text-2xl leading-none tracking-tight text-accent"
            >
              {item.number}
            </span>
            <h3 className="font-display text-xl leading-heading tracking-tight">{item.title}</h3>
            <p className="text-base leading-body text-ink-inverse/70 dark:text-ink-secondary">
              {item.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
