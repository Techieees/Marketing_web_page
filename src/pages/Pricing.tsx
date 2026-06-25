import {
  pricingPackages,
  customProjectCard,
  pricingPageMeta,
} from '@/data/pricing'
import { ROTATE_SETS } from '@/data/rotateWords'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PricingCard, CustomProjectCard } from '@/components/ui/PricingCard'
import { CTASection } from '@/components/ui/CTASection'

export function Pricing() {
  return (
    <>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-wide">
          <SectionHeader
            eyebrow={pricingPageMeta.eyebrow}
            title=""
            rotateWords={[...ROTATE_SETS.pricing]}
            titleAfterRotate="with transparent pricing."
            description={pricingPageMeta.description}
            className="mb-12 md:mb-16"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} pkg={pkg} index={i} />
            ))}
            <CustomProjectCard
              title={customProjectCard.title}
              description={customProjectCard.description}
              cta={customProjectCard.cta}
            />
          </div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-wide">
          <CTASection
            title="Not sure which package fits?"
            description="Book a short discovery call. We will recommend the right starting point for your project."
            primaryCta={{ label: 'Book a Discovery Call', href: '/contact' }}
          />
        </div>
      </section>
    </>
  )
}
