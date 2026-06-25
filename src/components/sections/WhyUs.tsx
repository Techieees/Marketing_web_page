import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'
import { TypewriterCardTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeUp, staggerContainer, defaultViewport } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'

export function WhyUs() {
  const { whyUs } = siteConfig

  return (
    <section className="section-padding section-scrim border-t border-border">
      <div className="container-wide">
        <SectionHeader
          eyebrow={whyUs.eyebrow}
          title={whyUs.title}
          description={whyUs.description}
          className="mb-12 md:mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {whyUs.points.map((point, i) => (
            <motion.article
              key={point.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <TypewriterCardTitle className="text-lg font-medium" delay={i * 0.15}>
                {point.title}
              </TypewriterCardTitle>
              <p className="mt-3 text-sm leading-relaxed md:text-base">
                <TypewriterText
                  text={point.description}
                  muted
                  delay={i * 0.15 + point.title.length * 0.042 + 0.15}
                  charDelay={TW_CHAR_FAST}
                />
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
