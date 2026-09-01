'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { motion as tokens } from '@/lib/tokens'

/**
 * Fade + rise on scroll. Honours prefers-reduced-motion by rendering the final
 * state immediately rather than animating to it, so nothing is ever hidden from
 * a reader who has asked for less movement.
 */
export function Reveal({
  children,
  delay = 0,
  distance = tokens.riseDistance,
  duration = tokens.duration.base,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  distance?: number
  duration?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'header'
}) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]

  const variants: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: tokens.ease },
    },
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

/** Hero-only variant: animates on mount rather than on scroll. */
export function RevealOnMount({
  children,
  delay = 0,
  distance = tokens.riseDistance,
  duration = tokens.duration.slow,
  className,
}: {
  children: ReactNode
  delay?: number
  distance?: number
  duration?: number
  className?: string
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: tokens.ease }}
    >
      {children}
    </motion.div>
  )
}
