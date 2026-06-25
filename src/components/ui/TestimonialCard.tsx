import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { fadeUp } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const quoteDelay = index * 0.2
  const authorDelay = quoteDelay + testimonial.quote.length * TW_CHAR_FAST + 0.3

  return (
    <motion.blockquote
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08 }}
      className="glass flex h-full min-w-0 flex-col overflow-hidden rounded-2xl p-6 md:p-8"
    >
      <Quote className="mb-4 h-5 w-5 text-muted" strokeWidth={1.5} />
      <p className="flex-1 text-base leading-relaxed text-foreground/90">
        &ldquo;
        <TypewriterText
          text={testimonial.quote}
          delay={quoteDelay}
          charDelay={TW_CHAR_FAST}
        />
        &rdquo;
      </p>
      <footer className="mt-6 border-t border-border pt-6">
        <cite className="not-italic">
          <p className="font-medium">
            <TypewriterText text={testimonial.author} delay={authorDelay} />
          </p>
          <p className="mt-1 text-sm text-muted">
            <TypewriterText
              text={`${testimonial.role}, ${testimonial.company}`}
              muted
              delay={authorDelay + testimonial.author.length * 0.042 + 0.1}
              charDelay={TW_CHAR_FAST}
            />
          </p>
        </cite>
      </footer>
    </motion.blockquote>
  )
}
