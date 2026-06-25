import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { TW_CHAR } from '@/utils/typewriterConfig'

interface TypewriterTextProps {
  text: string
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'cite'
  delay?: number
  charDelay?: number
  startOnView?: boolean
  muted?: boolean
  block?: boolean
}

export function TypewriterText({
  text,
  className,
  as: Tag = 'span',
  delay = 0,
  charDelay = TW_CHAR,
  startOnView = true,
  muted = false,
  block = false,
}: TypewriterTextProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()
  const active = !startOnView || inView

  const rootClass = cn(
    'typewriter-text min-w-0 max-w-full break-words',
    block ? 'block whitespace-normal' : 'inline',
    muted && 'text-muted',
    className,
  )

  if (reduced) {
    return (
      <Tag className={rootClass} ref={ref as never}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag ref={ref as never} className={rootClass} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline"
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{
            duration: 0.03,
            delay: active ? delay + i * charDelay : 0,
            ease: 'easeOut',
          }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  )
}

interface TypewriterTitleProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  delay?: number
  charDelay?: number
  startOnView?: boolean
}

export function TypewriterTitle({
  children,
  className,
  as = 'h2',
  delay = 0,
  charDelay = TW_CHAR,
  startOnView = true,
}: TypewriterTitleProps) {
  return (
    <TypewriterText
      as={as}
      text={children}
      block
      className={cn('text-foreground', className)}
      delay={delay}
      charDelay={charDelay}
      startOnView={startOnView}
    />
  )
}

interface TypewriterEyebrowProps {
  children: string
  className?: string
  delay?: number
}

export function TypewriterEyebrow({ children, className, delay = 0 }: TypewriterEyebrowProps) {
  return (
    <TypewriterText
      as="p"
      text={children}
      block
      className={cn(
        'mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted',
        className,
      )}
      delay={delay}
      charDelay={TW_CHAR * 1.1}
      startOnView
    />
  )
}

interface TypewriterCardTitleProps {
  children: string
  className?: string
  as?: 'h3' | 'h4'
  delay?: number
}

export function TypewriterCardTitle({
  children,
  className,
  as = 'h3',
  delay = 0,
}: TypewriterCardTitleProps) {
  return (
    <TypewriterText
      as={as}
      text={children}
      block
      className={cn('text-foreground', className)}
      delay={delay}
      startOnView
    />
  )
}

interface TypewriterBrandProps {
  name: string
  className?: string
}

export function TypewriterBrand({ name, className }: TypewriterBrandProps) {
  return (
    <TypewriterText
      text={name}
      className={cn('text-foreground', className)}
      startOnView={false}
      charDelay={TW_CHAR * 1.2}
    />
  )
}
