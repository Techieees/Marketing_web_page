export type ShimmerVariant = 'green' | 'cyan' | 'violet' | 'teal' | 'amber'

export const SHIMMER_VARIANTS: Record<
  ShimmerVariant,
  { a: string; b: string }
> = {
  green: { a: '#4ade80', b: '#22d3ee' },
  cyan: { a: '#22d3ee', b: '#818cf8' },
  violet: { a: '#a78bfa', b: '#4ade80' },
  teal: { a: '#2dd4bf', b: '#38bdf8' },
  amber: { a: '#fbbf24', b: '#22d3ee' },
}

export const SHIMMER_SEQUENCE: ShimmerVariant[] = [
  'green',
  'cyan',
  'violet',
  'teal',
  'amber',
]

export function shimmerVariantAt(index: number): ShimmerVariant {
  return SHIMMER_SEQUENCE[index % SHIMMER_SEQUENCE.length]
}

export function parseTitleHighlight(title: string): {
  lead: string
  highlights: string[]
  trailing: string
} {
  const trimmed = title.trim()
  const trailing = trimmed.match(/[.!?]$/)?.[0] ?? ''
  const core = trimmed.replace(/[.!?]$/, '')
  const words = core.split(/\s+/).filter(Boolean)

  if (words.length <= 1) {
    return { lead: '', highlights: words, trailing }
  }

  const count = words.length <= 3 ? 1 : words.length <= 7 ? 2 : 3
  const highlights = words.slice(-count)
  const lead = words.slice(0, -count).join(' ')

  return { lead, highlights, trailing }
}
