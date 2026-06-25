export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Our reporting used to live in five spreadsheets. Now the team opens one dashboard every morning and actually trusts the numbers.',
    author: 'Sarah Chen',
    role: 'Operations Director',
    company: 'Northline Logistics',
  },
  {
    id: '2',
    quote:
      'The site finally looks like the work we do. Fast, clean, and our clients find what they need without calling us.',
    author: 'Marcus Webb',
    role: 'Founding Partner',
    company: 'Atlas Advisory',
  },
  {
    id: '3',
    quote:
      'They automated a process that ate three hours every Friday. Small project, big difference, and they explained everything clearly.',
    author: 'Elena Rodriguez',
    role: 'Head of Finance',
    company: 'Pulse Health Group',
  },
  {
    id: '4',
    quote:
      'On time, on budget, no drama. Rare for this kind of work.',
    author: 'James Okonkwo',
    role: 'CEO',
    company: 'Clearpath Systems',
  },
]
