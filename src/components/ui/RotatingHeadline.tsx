import { cn } from '@/utils/cn'
import { RotatingTypewriter } from '@/components/ui/RotatingTypewriter'
import { TypewriterText } from '@/components/ui/TypewriterText'
import type { RotateSize, RotatingWord } from '@/data/rotateWords'

interface RotatingHeadlineProps {
  words: RotatingWord[]
  suffix: string
  align?: 'left' | 'center'
  size?: RotateSize
  startIndex?: number
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function RotatingHeadline({
  words,
  suffix,
  align = 'left',
  size = 'section',
  startIndex = 0,
  as: Tag = 'h2',
  className,
}: RotatingHeadlineProps) {
  return (
    <Tag
      className={cn(
        'text-balance text-3xl font-medium leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl',
        align === 'center'
          ? 'flex flex-col items-center gap-1'
          : 'flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2',
        className,
      )}
    >
      <RotatingTypewriter
        words={words}
        size={size}
        align={align}
        startIndex={startIndex}
      />
      <TypewriterText text={suffix} startOnView charDelay={0.042} block={false} />
    </Tag>
  )
}
