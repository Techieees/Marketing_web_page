import { siteConfig } from '@/data/siteConfig'
import { ROTATE_SETS } from '@/data/rotateWords'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProcessGrid } from '@/components/ui/ProcessStep'

export function Process() {
  const { process } = siteConfig

  return (
    <section className="section-padding section-scrim border-y border-border">
      <div className="container-wide">
        <SectionHeader
          eyebrow={process.eyebrow}
          title=""
          rotateWords={[...ROTATE_SETS.process]}
          titleAfterRotate="without the mystery."
          rotateStartIndex={1}
          className="mb-12 md:mb-16"
        />

        <ProcessGrid steps={[...process.steps]} />
      </div>
    </section>
  )
}
