import { useEffect, useRef, useState, type ElementType } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { TW_CHAR } from '@/utils/typewriterConfig'
import { BRAND_PALETTE, BRAND_PARTS } from '@/data/brandColors'

const LITE_CHAR_THRESHOLD = 72

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
  const lite = text.length > LITE_CHAR_THRESHOLD

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

  if (lite) {
    return (
      <LiteReveal
        Tag={Tag}
        text={text}
        className={rootClass}
        ref={ref}
        active={active}
        delay={delay}
      />
    )
  }

  return (
    <TypedReveal
      Tag={Tag}
      text={text}
      className={rootClass}
      ref={ref}
      active={active}
      delay={delay}
      charDelay={charDelay}
    />
  )
}

function LiteReveal({
  Tag,
  text,
  className,
  ref,
  active,
  delay,
}: {
  Tag: ElementType
  text: string
  className: string
  ref: React.RefObject<HTMLElement | null>
  active: boolean
  delay: number
}) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (!active) return
    const t = window.setTimeout(() => setOpacity(1), delay * 1000)
    return () => clearTimeout(t)
  }, [active, delay])

  return (
    <Tag
      ref={ref as never}
      className={cn(className, 'transition-opacity duration-500 ease-out')}
      style={{ opacity: active ? opacity : 0, willChange: opacity < 1 ? 'opacity' : undefined }}
      aria-label={text}
    >
      {text}
    </Tag>
  )
}

function TypedReveal({
  Tag,
  text,
  className,
  ref,
  active,
  delay,
  charDelay,
}: {
  Tag: ElementType
  text: string
  className: string
  ref: React.RefObject<HTMLElement | null>
  active: boolean
  delay: number
  charDelay: number
}) {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (!active) {
      setVisible(0)
      return
    }

    let charIndex = 0
    let timeout: ReturnType<typeof setTimeout>

    function typeNext() {
      charIndex += 1
      setVisible(charIndex)
      if (charIndex < text.length) {
        timeout = setTimeout(typeNext, charDelay * 1000)
      }
    }

    timeout = setTimeout(typeNext, delay * 1000)
    return () => clearTimeout(timeout)
  }, [active, text, delay, charDelay])

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {text.slice(0, visible)}
      {visible < text.length && (
        <span className="inline-block w-[2px] animate-pulse opacity-50" aria-hidden="true">
          |
        </span>
      )}
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
  className?: string
}

function useBrandColorCycle(startIndex: number, intervalMs: number) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    if (reduced) return

    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % BRAND_PALETTE.length),
      intervalMs,
    )

    return () => clearInterval(id)
  }, [reduced, intervalMs])

  return BRAND_PALETTE[reduced ? startIndex % BRAND_PALETTE.length : index % BRAND_PALETTE.length]
}

export function TypewriterBrand({ className }: TypewriterBrandProps) {
  const ironColor = useBrandColorCycle(0, 2600)
  const flowColor = useBrandColorCycle(4, 2900)
  const studiosColor = useBrandColorCycle(8, 3200)

  return (
    <span
      className={cn('inline-flex items-baseline font-medium tracking-tight', className)}
      aria-label={`${BRAND_PARTS.iron}${BRAND_PARTS.flow} ${BRAND_PARTS.studios}`}
    >
      <span
        className="transition-[color] duration-700 ease-in-out"
        style={{ color: ironColor }}
      >
        {BRAND_PARTS.iron}
      </span>
      <span
        className="transition-[color] duration-700 ease-in-out"
        style={{ color: flowColor }}
      >
        {BRAND_PARTS.flow}
      </span>
      <span
        className="transition-[color] duration-700 ease-in-out"
        style={{ color: studiosColor }}
      >
        {' '}
        {BRAND_PARTS.studios}
      </span>
    </span>
  )
}
