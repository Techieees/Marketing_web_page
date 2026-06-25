import { siteConfig } from '@/data/siteConfig'
import { ROTATE_SETS } from '@/data/rotateWords'
import { CTASection } from '@/components/ui/CTASection'

export function FinalCTA() {
  const { finalCta } = siteConfig

  return (
    <section className="section-padding section-scrim">
      <div className="container-wide">
        <CTASection
          title={finalCta.title}
          description={finalCta.description}
          primaryCta={finalCta.primaryCta}
          secondaryCta={finalCta.secondaryCta}
          rotateWords={[...ROTATE_SETS.cta]}
          titleSuffix="starts here."
        />
      </div>
    </section>
  )
}
