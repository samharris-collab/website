import { Container } from '@/components/primitives/section'
import { Reveal } from '@/components/primitives/reveal'
import { PublicationMark } from './publication-mark'
import { marqueePublications } from '@/lib/content/publications'
import { publicationsSection } from '@/lib/content/home'

/**
 * One continuous strip, rendered once (the current site repeats it twice).
 * The list is duplicated inside the track purely so the CSS translate to -50%
 * loops seamlessly; the duplicate is hidden from assistive tech.
 */
export function PublicationMarquee({
  heading = publicationsSection.heading,
  eyebrow,
}: {
  heading?: string
  eyebrow?: string
}) {
  return (
    <section className="border-b border-line py-12 md:py-16" aria-labelledby="publications-heading">
      <Container>
        <Reveal>
          {eyebrow && (
            <p className="rule-accent font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
              {eyebrow}
            </p>
          )}
          <h2
            id="publications-heading"
            className="mt-4 max-w-measure font-display text-xl leading-heading tracking-tight text-ink text-balance md:text-2xl"
          >
            {heading}
          </h2>
        </Reveal>
      </Container>

      <div className="marquee-track mask-fade-x mt-10 overflow-hidden md:mt-12">
        <div
          className="animate-marquee flex w-max items-center"
          style={{ ['--marquee-duration' as string]: '40s' }}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex items-center"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {marqueePublications.map((publication) => (
                <li
                  key={`${copy}-${publication.slug}`}
                  className="flex items-center px-6 text-ink-secondary md:px-9"
                >
                  <PublicationMark publication={publication} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
