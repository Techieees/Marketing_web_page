import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { NETWORK_LINE_PALETTE, NETWORK_LINE_PALETTE_STRONG, NETWORK_NODE_PALETTE } from '@/utils/networkLinePalette'

const STEADY_MS = 2200
const WAVE_MS = 1400

export function useNetworkColorWave(viewW: number) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [wave, setWave] = useState(1)
  const phaseRef = useRef<'steady' | 'wave'>('steady')
  const startRef = useRef(0)

  useEffect(() => {
    if (reduced) return

    let frame = 0
    let visible = document.visibilityState === 'visible'

    function onVisibilityChange() {
      visible = document.visibilityState === 'visible'
    }

    document.addEventListener('visibilitychange', onVisibilityChange)

    function tick(now: number) {
      if (!visible) {
        frame = requestAnimationFrame(tick)
        return
      }

      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current

      if (phaseRef.current === 'steady') {
        setWave(1)
        if (elapsed >= STEADY_MS) {
          phaseRef.current = 'wave'
          startRef.current = now
        }
      } else {
        const progress = Math.min(elapsed / WAVE_MS, 1)
        setWave(progress)
        if (progress >= 1) {
          setIndex((i) => (i + 1) % NETWORK_LINE_PALETTE.length)
          phaseRef.current = 'steady'
          startRef.current = now
        }
      }

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [reduced])

  function pick<T>(midX: number, palette: T[]): T {
    if (reduced) return palette[0]
    const next = palette[(index + 1) % palette.length]
    const current = palette[index]
    if (wave >= 1) return current
    return midX / viewW <= wave ? next : current
  }

  return {
    lineStroke: (x1: number, x2: number) => pick((x1 + x2) / 2, NETWORK_LINE_PALETTE),
    lineStrokeStrong: (x1: number, x2: number) =>
      pick((x1 + x2) / 2, NETWORK_LINE_PALETTE_STRONG),
    nodeFill: (x: number) => pick(x, NETWORK_NODE_PALETTE),
    reduced: !!reduced,
  }
}
