/**
 * Enforces the mechanical half of the copy rules over the files that contain
 * copy written for the rebuild.
 *
 * Locked copy — testimonials, the homepage FAQ, homepage sections, placements,
 * guide titles — is exempt: it is reproduced verbatim from the current site and
 * is not ours to correct.
 *
 * This catches the failure modes that are detectable by pattern (invented
 * figures, prices, marketing filler). It cannot judge whether a claim about a
 * publication is true; that is what the review pass in the authoring workflow
 * is for.
 *
 *   node scripts/check-content.mjs
 */
import { readFileSync } from 'node:fs'

const AUTHORED = [
  'lib/content/industries.ts',
  'lib/content/outlets.ts',
  'lib/content/guide-bodies.ts',
  'lib/content/services.ts',
  'lib/content/case-studies.ts',
  'lib/content/compare.ts',
  'lib/content/legal.ts',
]

/** Figures the site already states, and so may repeat. */
const ALLOWED_FIGURES = [
  /\b45\+? (?:experienced )?(?:publicists|team)/i,
  /\b1,?100\+?\b/,
  /\b100\+? (?:top-tier|outlets|media)/i,
  /\b24 hours\b/i,
  /\bwithin 24\b/i,
  /\b30 days\b/i, // the privacy policy's statutory response window
  /\b14 days\b/i, // the refund policy's own stated turnaround
  /\b16\b/, // "children under 16" in the privacy policy
]

const RULES = [
  {
    id: 'price',
    // A specific price or rate. Pricing is always "quoted to your goals".
    pattern: /\$\s?\d/g,
    message: 'a specific price',
  },
  {
    id: 'percentage',
    pattern: /\b\d+(?:\.\d+)?\s?%/g,
    message: 'a percentage — no statistic is verifiable here',
  },
  {
    id: 'audience-figure',
    pattern:
      /\b[\d,.]+\s?(?:million|billion|thousand|k)\s+(?:readers|visitors|users|subscribers|views|impressions)\b/gi,
    message: 'an audience figure',
  },
  {
    id: 'authority-score',
    pattern: /\b(?:domain authority|domain rating|DA|DR)\s*(?:of\s*)?\d+/gi,
    message: 'an SEO authority score',
  },
  {
    id: 'research-claim',
    pattern: /\b(?:studies show|research shows|surveys show|according to a study|data shows that)\b/gi,
    message: 'an unsourced research claim',
    // Guides that tell the reader NOT to write this way must pass.
    exempt: /\b(?:no|nothing|never|avoid|without|borrowed|unless|do not|don't)\b[^.]{0,80}(?:studies|research|surveys|data) shows?/i,
  },
  {
    id: 'filler',
    pattern:
      /\b(?:unlock|supercharge|game[- ]changer|elevate your brand|in today's fast[- ]paced world|leverage (?:the|your|our|this|that|it)|at the end of the day|when it comes to|dive into|in this article,? we)\b/gi,
    message: 'marketing filler',
  },
  {
    id: 'exclamation',
    pattern: /!(?:\s|["'])/g,
    message: 'an exclamation mark',
  },
  {
    id: 'guarantee',
    // Only flags a positive guarantee. Saying placement cannot be guaranteed is
    // the site's most important claim and must pass.
    pattern: /\b(?:we|which) guarantee[sd]?\b|\bguaranteed placement\b/gi,
    message: 'a placement guarantee',
    exempt: /\b(?:cannot|can't|do not|don't|never|no one|nobody|refuse)\b[^.]{0,60}guarantee/i,
  },
]

let problems = 0

for (const file of AUTHORED) {
  let source
  try {
    source = readFileSync(file, 'utf8')
  } catch {
    console.log(`skip ${file} (not present)`)
    continue
  }

  const lines = source.split('\n')

  for (const rule of RULES) {
    for (const [index, line] of lines.entries()) {
      // Comments explain the rules; they are not site copy. Nor are URLs,
      // whose percent-encoding reads as a percentage.
      const trimmed = line.trim()
      if (trimmed.startsWith('*') || trimmed.startsWith('//') || trimmed.startsWith('/*')) continue
      if (/https?:\/\//.test(line)) continue

      const matches = line.match(rule.pattern)
      if (!matches) continue
      if (rule.exempt && rule.exempt.test(line)) continue
      if (ALLOWED_FIGURES.some((allowed) => allowed.test(line))) continue

      problems += 1
      console.log(`${file}:${index + 1}  ${rule.message} — ${matches.slice(0, 2).join(', ')}`)
      console.log(`   ${trimmed.slice(0, 150)}`)
    }
  }
}

// --- Guide bodies: substance and repetition -------------------------------
// Forty-odd guides on adjacent topics is exactly the shape that produces thin,
// interchangeable pages. These two checks catch that mechanically.
const MIN_WORDS = 600

try {
  const { guideBodies } = await import('../lib/content/guide-bodies.ts')
  const flatten = (guide) => {
    const parts = [...guide.intro, ...guide.keyPoints]
    for (const section of guide.sections) {
      parts.push(section.heading, ...section.paragraphs, ...(section.list ?? []))
    }
    if (guide.realityCheck) parts.push(guide.realityCheck)
    for (const faq of guide.faqs) parts.push(faq.question, faq.answer)
    return parts.join(' ')
  }

  const owners = new Map()
  for (const guide of guideBodies) {
    const body = flatten(guide)
    const words = body.split(/\s+/).filter(Boolean).length

    if (words < MIN_WORDS) {
      problems += 1
      console.log(`guide "${guide.slug}" is thin — ${words} words, minimum ${MIN_WORDS}`)
    }

    // A sentence of eight or more words appearing in two guides means one of
    // them was written by find-and-replace.
    for (const raw of body.split(/(?<=[.!?])\s+/)) {
      const sentence = raw.trim().toLowerCase()
      if (sentence.split(/\s+/).length < 8) continue
      const seen = owners.get(sentence)
      if (seen && seen !== guide.slug) {
        problems += 1
        console.log(`duplicate sentence in "${seen}" and "${guide.slug}"`)
        console.log(`   ${raw.trim().slice(0, 120)}`)
      } else {
        owners.set(sentence, guide.slug)
      }
    }
  }

  if (guideBodies.length) {
    console.log(`Checked ${guideBodies.length} guide bodies for length and repetition.`)
  }
} catch (error) {
  console.log(`Could not read guide bodies: ${error.message}`)
}

console.log(
  problems
    ? `\n${problems} problem(s) in authored copy.`
    : `\nAuthored copy passes all ${RULES.length} rules across ${AUTHORED.length} files.`
)
process.exitCode = problems ? 1 : 0
