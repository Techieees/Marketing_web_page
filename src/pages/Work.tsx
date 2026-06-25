import { caseStudies, workPageMeta } from '@/data/work'
import { ROTATE_SETS } from '@/data/rotateWords'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { WorkCard } from '@/components/ui/WorkCard'
import { CTASection } from '@/components/ui/CTASection'

export function Work() {
  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-wide">
          <SectionHeader
            eyebrow={workPageMeta.eyebrow}
            title=""
            rotateWords={[...ROTATE_SETS.work]}
            titleAfterRotate="across real projects."
            description={workPageMeta.description}
            rotateStartIndex={2}
            className="mb-12 md:mb-16"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <WorkCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-wide">
          <CTASection
            title="Have a project in mind?"
            description="Tell us what you are building. We will respond with a clear plan and timeline."
            primaryCta={{ label: 'Book a Call', href: '/contact' }}
            secondaryCta={{ label: 'View Pricing', href: '/pricing' }}
          />
        </div>
      </section>
    </>
  )
}
