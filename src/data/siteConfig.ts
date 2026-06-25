export const siteConfig = {
  brand: {
    name: 'Techies Studio',
    tagline: 'Websites, dashboards and automation for modern businesses.',
    description:
      'A small studio that builds websites, dashboards and the tools behind them.',
  },

  contact: {
    email: 'hello@techiesstudio.com',
    bookingUrl: '#contact',
    responseTime: 'Usually within one business day.',
  },

  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],

  hero: {
    headline: 'Websites, dashboards and automation for modern businesses.',
    subheadline:
      'We build the site your clients see and the systems your team uses every day, without the agency fluff.',
    primaryCta: { label: 'Book a Call', href: '/contact' },
    secondaryCta: { label: 'View Pricing', href: '/pricing' },
  },

  logoStrip: {
    label: 'Teams we have worked with',
    logos: ['Northline', 'Verde Co', 'Atlas Group', 'Pulse Health', 'Meridian', 'Clearpath'],
  },

  whyUs: {
    eyebrow: 'Why work with us',
    title: 'Good design is only half the job.',
    description:
      'Most projects fail when the front-end looks fine but nothing talks to anything else. We build both sides, what people see and what runs behind it.',
    points: [
      {
        title: 'No template dumps',
        description:
          'We start from your offer and your workflow, not a theme with your logo swapped in.',
      },
      {
        title: 'Built around how you work',
        description:
          'Dashboards and automations shaped around the spreadsheets, emails and tools you already use.',
      },
      {
        title: 'Fast, maintainable code',
        description:
          'React, TypeScript, clean structure, so the product is easy to extend when you grow.',
      },
      {
        title: 'Straight talk on scope',
        description:
          'Fixed timelines, clear pricing, regular updates. You always know where things stand.',
      },
    ],
  },

  process: {
    eyebrow: 'How it works',
    title: 'Four steps. No mystery.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description:
          'We map what you need, who uses it, and what is slowing you down today.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'Structure, layout and flow, agreed before a line of code is written.',
      },
      {
        number: '03',
        title: 'Build',
        description:
          'We ship in React, test on real devices, and keep you in the loop as we go.',
      },
      {
        number: '04',
        title: 'Launch & Improve',
        description:
          'Go live, fix what matters, and keep improving based on real usage.',
      },
    ],
  },

  pricingPreview: {
    eyebrow: 'Pricing',
    title: 'Starting prices, clear scope.',
    description:
      'These are entry points. After a short call we confirm exactly what you need and quote it properly.',
    cta: { label: 'All packages', href: '/pricing' },
  },

  featuredWork: {
    eyebrow: 'Work',
    title: 'A few things we have shipped.',
    description:
      'Reporting tools, agency sites, store fronts. Placeholder names, real types of projects.',
    cta: { label: 'See all work', href: '/work' },
  },

  services: {
    eyebrow: 'What we build',
    title: 'Websites, data tools, and the glue between them.',
    description:
      'One studio for the public-facing site, the internal dashboard, and the automations that save your team time.',
  },

  testimonials: {
    eyebrow: 'Clients',
    title: 'After launch.',
  },

  finalCta: {
    title: 'Got a project in mind?',
    description:
      'Send us a note. We will reply with an honest take on scope, timeline and cost.',
    primaryCta: { label: 'Book a Call', href: '/contact' },
    secondaryCta: { label: 'View Pricing', href: '/pricing' },
  },

  footer: {
    tagline: 'Websites, dashboards, automation.',
    copyright: `© ${new Date().getFullYear()} Techies Studio. All rights reserved.`,
  },
} as const
