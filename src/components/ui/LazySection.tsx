import { useEffect, useState, useRef, type ReactNode } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/utils/cn'

interface LazySectionProps {
  children: ReactNode
  className?: string
  minHeight?: string
}

export function LazySection({
  children,
  className,
  minHeight = '1px',
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '240px 0px 240px 0px' })

  return (
    <div
      ref={ref}
      className={cn('section-lazy', className)}
      style={!inView ? { minHeight } : undefined}
    >
      {inView ? children : null}
    </div>
  )
}

interface DeferredMountProps {
  children: ReactNode
  fallback?: ReactNode
}

export function DeferredMount({ children, fallback = null }: DeferredMountProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const run = () => setReady(true)

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(run, { timeout: 1200 })
      return () => window.cancelIdleCallback(id)
    }

    const t = setTimeout(run, 300)
    return () => clearTimeout(t)
  }, [])

  return ready ? children : fallback
}
