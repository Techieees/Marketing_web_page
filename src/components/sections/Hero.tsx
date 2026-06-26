import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { HeroHeadline } from '@/components/ui/RotatingTypewriter'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'
import { heroStagger, heroItem } from '@/utils/animations'

export function Hero() {
  const { hero } = siteConfig

  return (
    <section className="relative flex min-h-[88svh] flex-col items-center justify-center overflow-x-hidden px-5 pb-14 pt-24 text-center md:min-h-[100svh] md:px-8 md:pb-20 md:pt-28 lg:px-12 lg:pt-32">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="hero-section-content relative z-10 mx-auto max-w-3xl"
      >
        <motion.div variants={heroItem}>
          <HeroHeadline />
        </motion.div>

        <motion.p
          variants={heroItem}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:mt-7 md:text-lg"
        >
          <TypewriterText
            text={hero.subheadline}
            muted
            startOnView={false}
            delay={3.8}
            charDelay={TW_CHAR_FAST}
          />
        </motion.p>

        <motion.div
          variants={heroItem}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button href={hero.primaryCta.href} variant="primary" size="lg" magnetic>
            {hero.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
