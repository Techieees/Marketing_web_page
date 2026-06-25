import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { prefersReducedMotion } from '@/utils/cn'

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const reduced = prefersReducedMotion()
    const coarse = window.matchMedia('(pointer: coarse)').matches
    setEnabled(!reduced && !coarse)

    if (reduced || coarse) return

    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[2] hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(180, 180, 255, 0.4) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
