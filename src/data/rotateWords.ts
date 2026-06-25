export interface RotatingWord {
  text: string
  color: string
}

const c = {
  green: '#6ee7a0',
  blue: '#7dd3fc',
  teal: '#5eead4',
  amber: '#fcd34d',
  violet: '#a5b4fc',
  cyan: '#67e8f9',
  pink: '#f472b6',
  orange: '#fb923c',
  lime: '#a3e635',
} as const

/** Her bölümün kendi kelime döngüsü — hero ile aynı liste tekrarlanmaz */
export const ROTATE_SETS = {
  hero: [
    { text: 'Websites', color: c.green },
    { text: 'Dashboards', color: c.blue },
    { text: 'Automations', color: c.teal },
    { text: 'Shopify integrations', color: c.amber },
    { text: 'API connections', color: c.violet },
    { text: 'Digital systems', color: c.cyan },
  ],
  services: [
    { text: 'Websites', color: c.green },
    { text: 'Dashboards', color: c.blue },
    { text: 'Automations', color: c.teal },
    { text: 'API layers', color: c.violet },
    { text: 'Shopify stores', color: c.amber },
    { text: 'Internal tools', color: c.cyan },
  ],
  work: [
    { text: 'Carbon reports', color: c.teal },
    { text: 'Agency sites', color: c.violet },
    { text: 'HSE dashboards', color: c.blue },
    { text: 'Shopify stores', color: c.pink },
    { text: 'API portals', color: c.amber },
    { text: 'Ops dashboards', color: c.green },
  ],
  process: [
    { text: 'Discover', color: c.cyan },
    { text: 'Design', color: c.violet },
    { text: 'Build', color: c.green },
    { text: 'Launch', color: c.amber },
    { text: 'Improve', color: c.teal },
  ],
  pricing: [
    { text: 'Launch site', color: c.green },
    { text: 'Growth site', color: c.blue },
    { text: 'Dashboard MVP', color: c.teal },
    { text: 'Automation sprint', color: c.amber },
    { text: 'Full system', color: c.violet },
    { text: 'Studio plan', color: c.cyan },
  ],
  testimonials: [
    { text: 'Faster reporting', color: c.teal },
    { text: 'More leads', color: c.green },
    { text: 'Less manual work', color: c.cyan },
    { text: 'On time delivery', color: c.amber },
    { text: 'Clear communication', color: c.violet },
  ],
  cta: [
    { text: 'Your website', color: c.green },
    { text: 'Your dashboard', color: c.blue },
    { text: 'Your workflow', color: c.teal },
    { text: 'Your store', color: c.amber },
    { text: 'Your next build', color: c.violet },
  ],
  contact: [
    { text: 'A website', color: c.green },
    { text: 'A dashboard', color: c.blue },
    { text: 'An automation', color: c.teal },
    { text: 'A Shopify store', color: c.amber },
    { text: 'A full system', color: c.cyan },
  ],
  networkInput: [
    { text: 'Messy spreadsheets', color: '#f87171' },
    { text: 'Manual copy-paste', color: '#fb923c' },
    { text: 'Broken workflows', color: '#fbbf24' },
    { text: 'Scattered tools', color: '#f472b6' },
    { text: 'Siloed data', color: '#fb7185' },
    { text: 'Duplicate entry', color: '#fdba74' },
  ],
  networkOutput: [
    { text: 'Websites', color: c.green },
    { text: 'Live dashboards', color: c.blue },
    { text: 'Automated ops', color: c.teal },
    { text: 'Synced systems', color: c.violet },
    { text: 'Credible brand', color: c.cyan },
    { text: 'One source of truth', color: c.lime },
  ],
} as const satisfies Record<string, RotatingWord[]>

export type RotateSetKey = keyof typeof ROTATE_SETS

/** @deprecated use ROTATE_SETS.hero */
export const SITE_ROTATE_WORDS = ROTATE_SETS.hero

export const ROTATE_SIZE = {
  hero: { charDelay: 0.07, pauseAfter: 1.35, deleteDelay: 0.038 },
  section: { charDelay: 0.058, pauseAfter: 1.15, deleteDelay: 0.034 },
  sm: { charDelay: 0.05, pauseAfter: 1, deleteDelay: 0.03 },
  network: { charDelay: 0.042, pauseAfter: 0.85, deleteDelay: 0.026 },
} as const

export type RotateSize = keyof typeof ROTATE_SIZE
