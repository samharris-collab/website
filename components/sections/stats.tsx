import { Reveal } from '@/components/primitives/reveal'
import { stats } from '@/lib/content/home'

/**
 * A full-bleed band rather than a container-width row: at six columns the cells
 * would otherwise inset their numbers off the page grid, and a rail that runs
 * edge to edge reads as deliberate instead of misaligned.
 */
export function Stats() {
  return (
    <section aria-label="Agency at a glance" className="border-y border-line bg-bg-secondary">
      <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.05}
            className="flex flex-col gap-2 bg-bg-secondary px-6 py-8 md:px-8 md:py-12"
          >
            <dd className="order-1 font-display text-xl leading-none tracking-tight text-ink tabular md:text-2xl">
              {stat.value}
            </dd>
            <dt className="order-2 font-sans text-xs uppercase tracking-wide text-ink-muted">
              {stat.label}
            </dt>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
