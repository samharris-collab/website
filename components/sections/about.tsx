import Image from 'next/image'
import { Section } from '@/components/primitives/section'
import { Reveal } from '@/components/primitives/reveal'
import { Eyebrow } from '@/components/primitives/section-heading'
import { about } from '@/lib/content/home'

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <figure className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-md shadow-lg">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 540px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="font-sans text-xs uppercase tracking-wide text-ink-muted">
              {about.caption}
            </figcaption>
          </figure>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal delay={0.08}>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.14} className="mt-6 flex flex-col gap-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-measure text-base leading-body text-ink-secondary">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="my-8 border-l-2 border-accent pl-6">
              <p className="font-display text-xl leading-heading tracking-tight text-ink md:text-2xl">
                {about.pullQuote}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="max-w-measure text-base leading-body text-ink-secondary">
              {about.closing}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
