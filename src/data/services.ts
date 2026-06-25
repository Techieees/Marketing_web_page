import type { LucideIcon } from 'lucide-react'
import {
  Globe,
  LayoutDashboard,
  Workflow,
  Plug,
  ShoppingBag,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  items: string[]
  icon: LucideIcon
  gradient: string
}

export const services: Service[] = [
  {
    id: 'websites',
    title: 'Premium Websites',
    description:
      'Modern, responsive websites for businesses that need to look credible, sharp and ready for growth.',
    items: [
      '3-page websites',
      '5-page websites',
      'landing pages',
      'company websites',
      'portfolio websites',
      'SEO foundations',
    ],
    icon: Globe,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    description:
      'Custom dashboards and reporting interfaces that turn business data into clear decisions.',
    items: [
      'KPI dashboards',
      'admin panels',
      'Power BI-style interfaces',
      'reporting portals',
      'client dashboards',
      'operational dashboards',
    ],
    icon: LayoutDashboard,
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'automation',
    title: 'Automation',
    description:
      'Workflow automation for teams stuck in spreadsheets, emails and repetitive manual processes.',
    items: [
      'Excel replacement tools',
      'form workflows',
      'email automation',
      'data entry systems',
      'report generation',
      'AI-assisted workflows',
    ],
    icon: Workflow,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'api',
    title: 'API Integrations',
    description:
      'Connect tools, platforms and databases so your business systems actually talk to each other.',
    items: [
      'CRM integrations',
      'payment integrations',
      'booking integrations',
      'third-party APIs',
      'data sync',
      'internal tools',
    ],
    icon: Plug,
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'shopify',
    title: 'Shopify & Ecommerce',
    description:
      'Premium Shopify stores and ecommerce experiences built to look professional and convert.',
    items: [
      'Shopify setup',
      'theme customization',
      'product pages',
      'checkout optimization',
      'tracking setup',
      'store redesign',
    ],
    icon: ShoppingBag,
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
  },
]
