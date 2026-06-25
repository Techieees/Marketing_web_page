import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { fadeUp, defaultViewport } from '@/utils/animations'
import { RotatingHeadline } from '@/components/ui/RotatingHeadline'
import { TypewriterEyebrow, TypewriterTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'
import type { RotatingWord } from '@/data/rotateWords'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  /** Renkli kelime döngüsü kelimeleri */
  rotateWords?: RotatingWord[]
  /** Döngüden sonra typewriter ile yazılan sabit metin */
  titleAfterRotate?: string
  rotateStartIndex?: number
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  rotateWords,
  titleAfterRotate,
  rotateStartIndex = 0,
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'center' : 'left'
  const useRotate = rotateWords && titleAfterRotate
  const headlineText = titleAfterRotate ?? title
  const descDelay = eyebrow
    ? (eyebrow.length + headlineText.length) * 0.042 + 0.3
    : headlineText.length * 0.042 + 0.2

  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && <TypewriterEyebrow>{eyebrow}</TypewriterEyebrow>}

      {useRotate ? (
        <RotatingHeadline
          words={rotateWords}
          suffix={titleAfterRotate}
          align={textAlign}
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

      {description && (
        <div className="mt-4 min-w-0 text-base leading-relaxed md:text-lg">
          <TypewriterText
            text={description}
            muted
            block
            delay={descDelay}
            charDelay={TW_CHAR_FAST}
          />
        </div>
      )}
    </motion.header>
  )
}
