import { useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
  reverse?: boolean
}

export function Marquee({
  children,
  speed = 40,
  className,
  reverse = false,
}: MarqueeProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24"
        aria-hidden="true"
      />

      <div
        className={cn(
          'flex w-max gap-6',
          !reducedMotion && 'animate-marquee',
        )}
        style={
          !reducedMotion
            ? ({
                '--marquee-duration': `${speed}s`,
                animationDirection: reverse ? 'reverse' : 'normal',
              } as React.CSSProperties)
            : undefined
        }
      >
        {children}
        {!reducedMotion && children}
      </div>
    </div>
  )
}
