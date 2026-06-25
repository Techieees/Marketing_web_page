import { siteConfig } from '@/data/siteConfig'
import { ROTATE_SETS } from '@/data/rotateWords'
import { testimonials } from '@/data/testimonials'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

export function Testimonials() {
  const { testimonials: meta } = siteConfig

  return (
    <section className="section-padding section-scrim">
      <div className="container-wide">
        <SectionHeader
          eyebrow={meta.eyebrow}
          title=""
          rotateWords={[...ROTATE_SETS.testimonials]}
          titleAfterRotate="after launch."
          rotateStartIndex={3}
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
