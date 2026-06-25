import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'
import { TypewriterEyebrow, TypewriterText } from '@/components/ui/TypewriterText'
import { fadeUp, defaultViewport } from '@/utils/animations'

export function LogoStrip() {
  const { logoStrip } = siteConfig

  return (
    <section className="border-y border-border section-scrim py-10 md:py-12">
      <div className="container-wide px-5 md:px-8 lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <TypewriterEyebrow className="mb-8 text-center">
            {logoStrip.label}
          </TypewriterEyebrow>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16"
        >
          {logoStrip.logos.map((logo, i) => (
            <span
              key={logo}
              className="text-sm font-medium tracking-wide text-foreground/40 md:text-base"
            >
              <TypewriterText
                text={logo}
                delay={logoStrip.label.length * 0.042 + i * 0.2}
                charDelay={0.035}
              />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
