import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { colors } from '@/lib/tokens'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const fontDir = path.join(process.cwd(), 'lib', 'seo', 'fonts')

async function fonts() {
  const [display, sans] = await Promise.all([
    readFile(path.join(fontDir, 'InstrumentSerif-Regular.ttf')),
    readFile(path.join(fontDir, 'Inter-Regular.ttf')),
  ])
  return [
    { name: 'Instrument Serif', data: display, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: sans, weight: 400 as const, style: 'normal' as const },
  ]
}

/**
 * One OG template for the whole site: a dark editorial card with the accent rule,
 * an eyebrow, the page title, and the wordmark. Satori supports a subset of CSS,
 * so this is written with explicit flex layout and literal token values rather
 * than the Tailwind scale.
 */
export async function ogImage({
  eyebrow,
  title,
  footnote,
}: {
  eyebrow: string
  title: string
  footnote?: string
}) {
  // The display face is beautiful but wide; long titles need a smaller size to
  // stay inside the card.
  const size = title.length > 90 ? 54 : title.length > 55 ? 66 : 80

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: colors.bgDark,
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', position: 'absolute', top: 0, left: 0, right: 0, height: 12, backgroundColor: colors.accentPrimary }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Inter',
              fontSize: 22,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: colors.accentPrimary,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 32,
              fontFamily: 'Instrument Serif',
              fontSize: size,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: colors.textInverse,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid rgba(255,255,255,0.16)`,
            paddingTop: 32,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: 6,
                backgroundColor: colors.accentPrimary,
                color: colors.textPrimary,
                fontFamily: 'Instrument Serif',
                fontSize: 30,
              }}
            >
              dna
            </div>
            <div
              style={{
                display: 'flex',
                marginLeft: 20,
                fontFamily: 'Instrument Serif',
                fontSize: 30,
                color: colors.textInverse,
              }}
            >
              Digital Networking Agency
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Inter',
              fontSize: 20,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {footnote ?? 'digitalnetworkingagency.com'}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() }
  )
}
