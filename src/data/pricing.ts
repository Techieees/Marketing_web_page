export type PricingHighlight = 'most-popular' | 'best-value' | null

export interface PricingPackage {
  id: string
  name: string
  price: string
  timeline: string
  bestFor: string
  includes: string[]
  highlight?: PricingHighlight
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'launch-website',
    name: 'Launch Website',
    price: 'from €2.5k',
    timeline: '2 to 3 weeks',
    bestFor: 'small businesses, consultants and personal brands',
    includes: [
      '3 custom pages',
      'responsive design',
      'contact form UI',
      'basic SEO setup',
      'performance optimization',
      'launch support',
    ],
  },
  {
    id: 'growth-website',
    name: 'Growth Website',
    price: 'from €4.5k',
    timeline: '3 to 5 weeks',
    bestFor: 'companies that need a stronger online presence',
    highlight: 'most-popular',
    includes: [
      '5 custom pages',
      'premium UI direction',
      'conversion-focused structure',
      'service pages',
      'contact/booking flow',
      'animation system',
      'SEO foundations',
    ],
  },
  {
    id: 'premium-website',
    name: 'Premium Website',
    price: 'from €7.5k',
    timeline: '5 to 8 weeks',
    bestFor: 'serious businesses that need a high-end digital presence',
    includes: [
      '8 to 10 custom pages',
      'advanced animations',
      'case study system',
      'pricing/service architecture',
      'CMS-ready structure',
      'analytics-ready setup',
      'launch support',
    ],
  },
  {
    id: 'dashboard-mvp',
    name: 'Dashboard MVP',
    price: 'from €5k',
    timeline: '3 to 6 weeks',
    bestFor: 'businesses that need visibility over their data',
    includes: [
      'dashboard UI',
      'KPI cards',
      'charts and filters',
      'data table layouts',
      'admin interface',
      'export-ready structure',
      'API-ready architecture',
    ],
  },
  {
    id: 'automation-sprint',
    name: 'Automation Sprint',
    price: 'from €3k',
    timeline: '2 to 4 weeks',
    bestFor: 'teams wasting time on repetitive manual work',
    includes: [
      'workflow analysis',
      'form/data flow design',
      'automation prototype',
      'reporting output',
      'documentation',
      'handover session',
    ],
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    price: 'from €2k',
    timeline: '1 to 4 weeks',
    bestFor: 'connecting business tools and systems',
    includes: [
      'API connection planning',
      'integration UI',
      'data sync structure',
      'error-state design',
      'documentation',
      'handover',
    ],
  },
  {
    id: 'shopify-store',
    name: 'Shopify Store',
    price: 'from €6k',
    timeline: '4 to 7 weeks',
    bestFor: 'brands that need a premium ecommerce experience',
    includes: [
      'Shopify setup',
      'custom storefront direction',
      'product page design',
      'collection pages',
      'conversion-focused layout',
      'tracking-ready setup',
    ],
  },
  {
    id: 'full-digital-system',
    name: 'Full Digital System',
    price: 'from €12k',
    timeline: '6 to 12 weeks',
    bestFor: 'businesses needing website, dashboard and automation together',
    highlight: 'best-value',
    includes: [
      'premium website (5 to 8 pages)',
      'custom dashboard MVP',
      'core automation workflow',
      'API integrations',
      'unified design system',
      'launch support',
      '30-day post-launch refinements',
    ],
  },
  {
    id: 'studio-subscription',
    name: 'Studio Subscription',
    price: 'from €1.5k / month',
    timeline: 'monthly',
    bestFor: 'ongoing design, website and automation support',
    includes: [
      'monthly improvements',
      'landing pages',
      'dashboard iterations',
      'automation updates',
      'design/dev support',
      'priority support',
    ],
  },
]

export const customProjectCard = {
  title: 'Custom Project',
  description:
    'Need website + dashboard + automation together? We create a custom proposal after a short discovery call.',
  cta: { label: 'Book a Discovery Call', href: '/contact' },
}

export const pricingPageMeta = {
  eyebrow: 'Pricing',
  title: 'Premium packages with clear starting points.',
  description:
    'Every project is scoped individually. These packages give you a transparent starting point. Final pricing depends on complexity and integrations.',
}
