import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { ROTATE_SETS } from '@/data/rotateWords'
import { caseStudies } from '@/data/work'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { WorkCard } from '@/components/ui/WorkCard'
import { Marquee } from '@/components/ui/Marquee'

export function FeaturedWork() {
  const { featuredWork } = siteConfig

  return (
    <section className="section-padding section-scrim overflow-hidden">
      <div className="container-wide">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={featuredWork.eyebrow}
            title=""
            rotateWords={[...ROTATE_SETS.work]}
            titleAfterRotate="we have shipped."
            description={featuredWork.description}
          />
          <Link
            to={featuredWork.cta.href}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            <TypewriterText text={featuredWork.cta.label} delay={0.5} />
            <ArrowRight className="h-4 w-4 text-foreground/70" />
          </Link>
        </div>
      </div>

      <Marquee speed={50} className="py-2">
        <div className="flex gap-6 px-3">
          {caseStudies.map((study, i) => (
            <WorkCard key={study.id} study={study} index={i} variant="compact" priority={i === 0} />
          ))}
        </div>
      </Marquee>
    </section>
  )
}
