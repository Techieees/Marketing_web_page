import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import type { PricingPackage } from '@/data/pricing'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { TypewriterCardTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { cn } from '@/utils/cn'
import { scaleIn } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'

interface PricingCardProps {
  pkg: PricingPackage
  index?: number
}

export function PricingCard({ pkg, index = 0 }: PricingCardProps) {
  const isHighlighted = pkg.highlight === 'most-popular' || pkg.highlight === 'best-value'
  const titleDelay = index * 0.1
  const priceDelay = titleDelay + pkg.name.length * 0.042 + 0.15
  const bestForText = `Best for: ${pkg.bestFor}`

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative flex min-w-0 flex-col rounded-2xl p-6 md:p-8 transition-shadow duration-500',
        isHighlighted
          ? 'glass-strong ring-1 ring-foreground/15 shadow-[0_0_60px_-12px_var(--card-glow-shadow)]'
          : 'glass hover:border-border-hover',
      )}
    >
      {pkg.highlight === 'most-popular' && (
        <Badge variant="accent" className="mb-4 shrink-0">
          Most popular
        </Badge>
      )}
      {pkg.highlight === 'best-value' && (
        <Badge variant="accent" className="mb-4 shrink-0">
          Best value
        </Badge>
      )}

      <div className="mb-6 min-w-0">
        <TypewriterCardTitle className="text-xl font-medium" delay={titleDelay}>
          {pkg.name}
        </TypewriterCardTitle>
        <p className="mt-3 break-words text-3xl font-medium tracking-tight md:text-4xl">
          <TypewriterText text={pkg.price} delay={priceDelay} block />
        </p>
        <p className="mt-2 break-words text-sm text-muted">
          <TypewriterText
            text={pkg.timeline}
            muted
            block
            delay={priceDelay + pkg.price.length * 0.042 + 0.1}
            charDelay={TW_CHAR_FAST}
          />
        </p>
      </div>

      <p className="mb-6 min-w-0 break-words text-sm leading-relaxed text-muted">
        <TypewriterText
          text={bestForText}
          block
          delay={
            priceDelay + pkg.price.length * 0.042 + pkg.timeline.length * TW_CHAR_FAST + 0.15
          }
          charDelay={TW_CHAR_FAST}
        />
      </p>

      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {pkg.includes.map((item, i) => (
          <li key={item} className="flex min-w-0 items-start gap-3 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted" strokeWidth={1.5} />
            <span className="min-w-0 flex-1 break-words">
              <TypewriterText
                text={item}
                block
                delay={
                  priceDelay +
                  pkg.price.length * 0.042 +
                  bestForText.length * TW_CHAR_FAST +
                  i * 0.08
                }
                charDelay={TW_CHAR_FAST}
              />
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={isHighlighted ? 'primary' : 'secondary'}
        size="md"
        className="mt-auto w-full shrink-0"
        magnetic
      >
        Get Started
        <ArrowRight className="h-4 w-4" />
      </Button>
    </motion.article>
  )
}

interface CustomProjectCardProps {
  title: string
  description: string
  cta: { label: string; href: string }
}

export function CustomProjectCard({ title, description, cta }: CustomProjectCardProps) {
  const descDelay = title.length * 0.042 + 0.2

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="glass-strong col-span-full flex min-w-0 flex-col items-start justify-between gap-6 rounded-2xl p-8 md:flex-row md:items-center md:p-10"
    >
      <div className="min-w-0 max-w-2xl flex-1">
        <TypewriterCardTitle className="text-2xl font-medium">{title}</TypewriterCardTitle>
        <p className="mt-3 break-words text-base leading-relaxed text-muted">
          <TypewriterText text={description} block delay={descDelay} charDelay={TW_CHAR_FAST} />
        </p>
      </div>
      <Button href={cta.href} variant="primary" size="lg" className="shrink-0" magnetic>
        {cta.label}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </motion.article>
  )
}
