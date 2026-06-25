export type WorkPreviewType =
  | 'carbon-dashboard'
  | 'hse-dashboard'
  | 'agency-site'
  | 'shopify-store'
  | 'api-portal'

export interface CaseStudy {
  id: string
  title: string
  category: string
  description: string
  services: string[]
  outcome: string
  gradient: string
  accent: string
  preview: WorkPreviewType
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'carbon-reporting',
    title: 'Carbon Reporting Platform',
    category: 'Dashboard · Sustainability',
    description:
      'A reporting portal that consolidates emissions data across multiple sites into a single, audit-ready dashboard with export workflows.',
    services: ['Dashboard UI', 'Data tables', 'Export system', 'API integration'],
    outcome: 'Reduced monthly reporting time by 60%',
    gradient: 'from-emerald-900/40 via-teal-900/20 to-background',
    accent: '#34d399',
    preview: 'carbon-dashboard',
  },
  {
    id: 'hse-dashboard',
    title: 'HSE Dashboard System',
    category: 'Dashboard · Operations',
    description:
      'An operational dashboard for health, safety and environment teams. KPI cards, incident tracking and filterable compliance views.',
    services: ['KPI dashboard', 'Admin panel', 'Role-based views', 'Reporting'],
    outcome: 'Real-time visibility across 12 operational sites',
    gradient: 'from-blue-900/40 via-indigo-900/20 to-background',
    accent: '#60a5fa',
    preview: 'hse-dashboard',
  },
  {
    id: 'agency-website',
    title: 'Modern Agency Website',
    category: 'Website · Brand',
    description:
      'A premium 7-page agency website with case study architecture, service pages and a conversion-focused contact flow.',
    services: ['Premium website', 'Animations', 'Case studies', 'SEO setup'],
    outcome: '40% increase in qualified inbound leads',
    gradient: 'from-violet-900/40 via-purple-900/20 to-background',
    accent: '#a78bfa',
    preview: 'agency-site',
  },
  {
    id: 'shopify-storefront',
    title: 'Shopify Storefront Concept',
    category: 'Ecommerce · Shopify',
    description:
      'A refined Shopify storefront with custom product pages, collection layouts and checkout optimization for a premium lifestyle brand.',
    services: ['Shopify setup', 'Theme customization', 'Product pages', 'Tracking'],
    outcome: '22% improvement in add-to-cart rate',
    gradient: 'from-rose-900/40 via-pink-900/20 to-background',
    accent: '#fb7185',
    preview: 'shopify-store',
  },
  {
    id: 'api-reporting',
    title: 'API Reporting Portal',
    category: 'Integration · Reporting',
    description:
      'A client-facing portal that pulls data from multiple third-party APIs into unified reports with automated sync and error handling.',
    services: ['API integration', 'Reporting portal', 'Data sync', 'Automation'],
    outcome: 'Eliminated 3 manual data export processes',
    gradient: 'from-amber-900/40 via-orange-900/20 to-background',
    accent: '#fbbf24',
    preview: 'api-portal',
  },
]

export const workPageMeta = {
  eyebrow: 'Work',
  title: 'Projects across sites, dashboards and integrations.',
  description:
    'Placeholder case studies. Names and numbers are illustrative, not real clients.',
}
