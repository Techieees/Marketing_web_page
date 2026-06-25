import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { ROTATE_SETS } from '@/data/rotateWords'
import { pricingPackages } from '@/data/pricing'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { PricingCard } from '@/components/ui/PricingCard'

export function PricingPreview() {
  const { pricingPreview } = siteConfig
  const previewPackages = pricingPackages.filter((p) =>
    ['growth-website', 'dashboard-mvp', 'automation-sprint', 'full-digital-system'].includes(p.id),
  )

  return (
    <section className="section-padding section-scrim">
      <div className="container-wide">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={pricingPreview.eyebrow}
            title=""
            rotateWords={[...ROTATE_SETS.pricing]}
            titleAfterRotate="with clear scope."
            description={pricingPreview.description}
            rotateStartIndex={2}
          />
          <Link
            to={pricingPreview.cta.href}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            <TypewriterText text={pricingPreview.cta.label} delay={0.5} />
            <ArrowRight className="h-4 w-4 text-foreground/70" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 xl:grid-cols-4">
          {previewPackages.map((pkg, i) => (
            <PricingCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
