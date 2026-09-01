'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { guideCategories } from '@/lib/content/guides'
import type { Guide, GuideCategory } from '@/lib/content/types'

export function GuidesIndex({ guides }: { guides: Guide[] }) {
  const [category, setCategory] = useState<GuideCategory | 'all'>('all')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const map = new Map<string, number>()
    for (const guide of guides) map.set(guide.category, (map.get(guide.category) ?? 0) + 1)
    return map
  }, [guides])

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return guides.filter((guide) => {
      if (category !== 'all' && guide.category !== category) return false
      if (!needle) return true
      return (
        guide.title.toLowerCase().includes(needle) ||
        guide.description.toLowerCase().includes(needle) ||
        (guide.outlet?.toLowerCase().includes(needle) ?? false)
      )
    })
  }, [guides, category, query])

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter guides by category">
          <button
            type="button"
            onClick={() => setCategory('all')}
            aria-pressed={category === 'all'}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              category === 'all'
                ? 'border-line-strong bg-ink text-ink-inverse'
                : 'border-line text-ink-secondary hover:border-line-strong hover:text-ink'
            )}
          >
            All guides
            <span className="ml-2 text-xs opacity-60">{guides.length}</span>
          </button>
          {guideCategories.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCategory(name)}
              aria-pressed={category === name}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                category === name
                  ? 'border-line-strong bg-ink text-ink-inverse'
                  : 'border-line text-ink-secondary hover:border-line-strong hover:text-ink'
              )}
            >
              {name}
              <span className="ml-2 text-xs opacity-60">{counts.get(name) ?? 0}</span>
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-muted"
          />
          <label htmlFor="guide-search" className="sr-only">
            Search guides
          </label>
          <Input
            id="guide-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides"
            className="pl-11"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-muted" role="status">
        {visible.length === guides.length
          ? `${guides.length} guides.`
          : `${visible.length} of ${guides.length} guides.`}
      </p>

      {visible.length === 0 ? (
        <p className="mt-12 max-w-measure text-lg text-ink-secondary">
          Nothing matches that. Try a publication name, an industry, or{' '}
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setCategory('all')
            }}
            className="text-ink underline underline-offset-4"
          >
            clear the filters
          </button>
          .
        </p>
      ) : (
        <ul className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {visible.map((guide) => (
            <li key={guide.slug}>
              <article className="group relative flex h-full flex-col gap-4 bg-bg p-8 transition-colors hover:bg-bg-secondary">
                <span className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                  {guide.category}
                </span>
                <h2 className="font-display text-lg leading-heading tracking-tight text-ink md:text-xl">
                  <Link href={`/guides/${guide.slug}`} className="after:absolute after:inset-0">
                    {guide.title}
                  </Link>
                </h2>
                <p className="text-sm leading-body text-ink-secondary">{guide.description}</p>
                <ArrowUpRight
                  aria-hidden
                  className="mt-auto size-5 text-ink-muted transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
