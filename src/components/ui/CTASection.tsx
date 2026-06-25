import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { RotatingHeadline } from '@/components/ui/RotatingHeadline'
import { TypewriterTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { cn } from '@/utils/cn'
import { fadeUp, defaultViewport } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'
import type { RotatingWord } from '@/data/rotateWords'

interface CTASectionProps {
  title: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  className?: string
  rotateWords?: RotatingWord[]
  titleSuffix?: string
  rotateStartIndex?: number
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  rotateWords,
  titleSuffix,
  rotateStartIndex = 0,
}: CTASectionProps) {
  const useRotate = rotateWords && titleSuffix

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-border glass-strong p-8 md:p-12 lg:p-16',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(74,222,128,0.06), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        {useRotate ? (
          <RotatingHeadline
            words={rotateWords}
            suffix={titleSuffix}
            align="center"
            startIndex={rotateStartIndex}
          />
        ) : (
          <TypewriterTitle
            as="h2"
            className="text-balance text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
          >
            {title}
          </TypewriterTitle>
        )}

        <p className="mt-4 text-base leading-relaxed md:text-lg">
          <TypewriterText
            text={description}
            muted
            block
            delay={useRotate ? 0.4 : title.length * 0.042 + 0.25}
            charDelay={TW_CHAR_FAST}
          />
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryCta.href} variant="primary" size="lg" magnetic>
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  )
}
