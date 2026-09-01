import type { Config } from 'tailwindcss'

/**
 * Every value here resolves to a CSS custom property declared in app/globals.css.
 * That file is the single source of truth for the design system; this config only
 * exposes it to Tailwind's utility generator. Adding a raw hex or px value here
 * (or in a component) breaks the token contract.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    // Replaces Tailwind's default colour palette outright — no stray `slate-500`.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      bg: {
        DEFAULT: 'rgb(var(--bg-primary) / <alpha-value>)',
        secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
        dark: 'rgb(var(--bg-dark) / <alpha-value>)',
        elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
      },
      ink: {
        DEFAULT: 'rgb(var(--text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        inverse: 'rgb(var(--text-inverse) / <alpha-value>)',
        /** For surfaces that stay dark in both colour schemes. */
        'on-dark': 'rgb(var(--text-on-dark) / <alpha-value>)',
      },
      accent: {
        DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
        hover: 'rgb(var(--accent-hover) / <alpha-value>)',
        ink: 'rgb(var(--accent-ink) / <alpha-value>)',
      },
      line: {
        DEFAULT: 'rgb(var(--border-subtle) / <alpha-value>)',
        strong: 'rgb(var(--border-strong) / <alpha-value>)',
      },
      success: 'rgb(var(--success) / <alpha-value>)',
      warning: 'rgb(var(--warning) / <alpha-value>)',
      error: 'rgb(var(--error) / <alpha-value>)',
      ring: 'rgb(var(--ring) / <alpha-value>)',
    },
    fontSize: {
      xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-caption)' }],
      sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-caption)' }],
      base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-body)' }],
      lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-body)' }],
      xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-heading)' }],
      '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-heading)' }],
      '3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-heading)' }],
      '4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-display)' }],
      '5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-display)' }],
    },
    lineHeight: {
      display: 'var(--line-height-display)',
      heading: 'var(--line-height-heading)',
      body: 'var(--line-height-body)',
      caption: 'var(--line-height-caption)',
    },
    letterSpacing: {
      tight: 'var(--tracking-tight)',
      normal: 'var(--tracking-normal)',
      wide: 'var(--tracking-wide)',
    },
    borderRadius: {
      none: 'var(--radius-none)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      full: 'var(--radius-full)',
    },
    boxShadow: {
      none: 'none',
      sm: 'var(--shadow-sm)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      editorial: 'var(--shadow-editorial)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        sans: [
          'var(--font-sans)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        // Named steps from the 8px scale. Tailwind's numeric scale (p-4 = 16px,
        // py-24 = 96px) is already a multiple of 8 and stays available.
        s1: 'var(--space-1)',
        s2: 'var(--space-2)',
        s3: 'var(--space-3)',
        s4: 'var(--space-4)',
        s5: 'var(--space-5)',
        s6: 'var(--space-6)',
        s7: 'var(--space-7)',
        s8: 'var(--space-8)',
        s9: 'var(--space-9)',
        header: 'var(--header-height)',
      },
      maxWidth: {
        container: 'var(--container-max)',
        measure: '68ch',
        'measure-tight': '42ch',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 280ms cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-up': 'accordion-up 220ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
