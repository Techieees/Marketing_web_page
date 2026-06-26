import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  ROTATE_SETS,
  ROTATE_SIZE,
  type RotateSize,
  type RotatingWord,
} from '@/data/rotateWords'

interface RotatingTypewriterProps {
  words?: RotatingWord[]
  className?: string
  size?: RotateSize
  startIndex?: number
  showCursor?: boolean
  align?: 'left' | 'center'
  reserveWidth?: boolean
}

export function RotatingTypewriter({
  words = ROTATE_SETS.hero,
  className,
  size = 'section',
  startIndex = 0,
  showCursor = true,
  align = 'center',
  reserveWidth = true,
}: RotatingTypewriterProps) {
  const reduced = useReducedMotion()
  const timing = ROTATE_SIZE[size]

  const orderedWords = useMemo(() => {
    if (startIndex <= 0) return words
    const offset = startIndex % words.length
    return [...words.slice(offset), ...words.slice(0, offset)]
  }, [words, startIndex])

  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  const maxLen = Math.max(...orderedWords.map((w) => w.text.length))
  const current = orderedWords[wordIndex]

  useEffect(() => {
    if (reduced) {
      setDisplayed(orderedWords[0].text)
      return
    }

    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.text.length) {
      timeout = setTimeout(
        () => setDisplayed(current.text.slice(0, displayed.length + 1)),
        timing.charDelay * 1000,
      )
    } else if (!deleting && displayed.length === current.text.length) {
      timeout = setTimeout(() => setDeleting(true), timing.pauseAfter * 1000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed((d) => d.slice(0, -1)),
        timing.deleteDelay * 1000,
      )
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % orderedWords.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, current.text, wordIndex, orderedWords, timing, reduced])

  if (reduced) {
    return (
      <span className={className} style={{ color: orderedWords[0].color }}>
        {orderedWords[0].text}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-block max-w-full',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
      style={{
        color: current.color,
        ...(reserveWidth ? { minWidth: `${maxLen}ch` } : {}),
      }}
      aria-live="polite"
    >
      {displayed}
      {showCursor && (
        <motion.span
          className="ml-px inline-block w-[2px] opacity-60"
          style={{ color: current.color }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
          aria-hidden="true"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

interface RotatingLineProps {
  words?: RotatingWord[]
  size?: RotateSize
  startIndex?: number
  align?: 'left' | 'center'
  className?: string
  reserveWidth?: boolean
}

export function RotatingLine({
  words = ROTATE_SETS.hero,
  size = 'section',
  startIndex = 0,
  align = 'center',
  className,
  reserveWidth = true,
}: RotatingLineProps) {
  return (
    <span
      className={cn(
        'flex w-full min-h-[1.25em] items-center',
        align === 'center' ? 'justify-center' : 'justify-start',
        className,
      )}
    >
      <RotatingTypewriter
        words={words}
        size={size}
        startIndex={startIndex}
        align={align}
        reserveWidth={reserveWidth}
      />
    </span>
  )
}

interface HeroHeadlineProps {
  className?: string
}

export function HeroHeadline({ className }: HeroHeadlineProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <h1
      className={cn(
        'mx-auto flex w-full max-w-3xl flex-col items-center gap-2 text-balance text-4xl font-medium leading-[1.12] tracking-tight max-md:gap-1 max-md:!text-[1.65rem] max-md:!leading-[1.22] sm:text-5xl md:text-6xl',
        className,
      )}
    >
      <RotatingLine
        size="hero"
        words={ROTATE_SETS.hero}
        className="w-full max-w-full px-1 md:px-2"
        reserveWidth={!isMobile}
      />
      <TypewriterSuffix text="for modern businesses." />
    </h1>
  )
}

function TypewriterSuffix({ text }: { text: string }) {
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const t = setTimeout(() => setVisible(true), 3200)
    return () => clearTimeout(t)
  }, [reduced])

  if (!visible) {
    return <span className="min-h-[1.15em]" aria-hidden="true" />
  }

  return (
    <span
      className="text-foreground/90 transition-opacity duration-500 ease-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {text}
    </span>
  )
}
