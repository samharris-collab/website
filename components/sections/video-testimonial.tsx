import Image from 'next/image'
import { Section } from '@/components/primitives/section'
import { Reveal } from '@/components/primitives/reveal'
import { Eyebrow } from '@/components/primitives/section-heading'
import { hasTestimonialVideo } from '@/lib/assets'
import { videoTestimonial } from '@/lib/content/home'
import { VideoPlayer } from './video-player'

export function VideoTestimonial() {
  const hasVideo = hasTestimonialVideo()

  return (
    <Section id="video-testimonial">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal>
            <Eyebrow>{videoTestimonial.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-2xl leading-heading tracking-tight text-ink md:text-3xl">
              {videoTestimonial.heading}
            </h2>
            <p className="mt-6 max-w-measure text-base leading-body text-ink-secondary">
              {videoTestimonial.body}
            </p>
            <p className="mt-8 font-sans text-sm uppercase tracking-wide text-ink-muted">
              {videoTestimonial.attribution}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          {hasVideo ? (
            <VideoPlayer
              src={videoTestimonial.src}
              poster={videoTestimonial.poster}
              label={`Client testimonial from ${videoTestimonial.attribution.replace('— ', '')}`}
            />
          ) : (
            /* The testimonial video file is not present in this build. Rather
               than render a player with no source, the poster art carries the
               attribution; dropping client-testimonial.mp4 into /public restores
               the player automatically. */
            <figure className="relative overflow-hidden rounded-md shadow-editorial">
              <Image
                src={videoTestimonial.poster}
                alt=""
                width={1920}
                height={1080}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="aspect-video w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-bg-dark/80 p-6 backdrop-blur-sm md:p-8">
                <p className="font-display text-lg leading-heading tracking-tight text-ink-inverse md:text-xl">
                  {videoTestimonial.attribution}
                </p>
              </figcaption>
            </figure>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
