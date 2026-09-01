'use client'

import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

/**
 * Muted autoplay is not used here: an unmuted testimonial that starts itself is
 * hostile, and a muted one nobody hears is pointless. The poster frame carries
 * the still and the viewer chooses to play, with native controls once running.
 */
export function VideoPlayer({
  src,
  poster,
  label,
}: {
  src: string
  poster: string
  label: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      void el.play()
    } else {
      el.pause()
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-md shadow-editorial">
      <video
        ref={ref}
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={playing}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="aspect-video w-full bg-bg-dark object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`Play video: ${label}`}
          className="absolute inset-0 flex items-center justify-center bg-bg-dark/20 transition-colors hover:bg-bg-dark/30"
        >
          <span className="flex size-20 items-center justify-center rounded-full bg-accent text-accent-ink shadow-lg transition-transform duration-200 ease-editorial group-hover:scale-105">
            {playing ? <Pause aria-hidden className="size-7" /> : <Play aria-hidden className="ml-1 size-7" />}
          </span>
        </button>
      )}
    </div>
  )
}
