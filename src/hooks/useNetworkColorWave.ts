import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { NETWORK_LINE_PALETTE, NETWORK_LINE_PALETTE_STRONG, NETWORK_NODE_PALETTE } from '@/utils/networkLinePalette'

const STEADY_MS = 2200
const WAVE_MS = 1400

function pickColor<T>(midX: number, viewW: number, wave: number, index: number, palette: T[]): T {
  const next = palette[(index + 1) % palette.length]
  const current = palette[index]
  if (wave >= 1) return current
  return midX / viewW <= wave ? next : current
}

/** Color wave — RAF only during transition, idle between waves; pauses when tab hidden */
export function useNetworkColorWave(viewW: number) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [wave, setWave] = useState(1)
  const indexRef = useRef(0)
  const waveRef = useRef(1)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    waveRef.current = wave
  }, [wave])

  useEffect(() => {
    if (reduced) return

    let cancelled = false
    let steadyTimer: ReturnType<typeof setTimeout> | undefined
    let waveRaf = 0
    let waveStart = 0

    function runWave() {
      waveStart = performance.now()

      function tick(now: number) {
        if (cancelled || document.visibilityState !== 'visible') return

        const progress = Math.min((now - waveStart) / WAVE_MS, 1)
        waveRef.current = progress
        setWave(progress)

        if (progress < 1) {
          waveRaf = requestAnimationFrame(tick)
        } else {
          const next = (indexRef.current + 1) % NETWORK_LINE_PALETTE.length
          indexRef.current = next
          waveRef.current = 1
          setIndex(next)
          setWave(1)
          scheduleSteady()
        }
      }

      waveRaf = requestAnimationFrame(tick)
    }

    function scheduleSteady() {
      if (cancelled || document.visibilityState !== 'visible') return
      steadyTimer = setTimeout(runWave, STEADY_MS)
    }

    function onVisibilityChange() {
      cancelAnimationFrame(waveRaf)
      waveRaf = 0
      if (steadyTimer) clearTimeout(steadyTimer)

      if (document.visibilityState === 'visible' && !cancelled) {
        scheduleSteady()
      }
    }

    scheduleSteady()
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      cancelled = true
      if (steadyTimer) clearTimeout(steadyTimer)
      cancelAnimationFrame(waveRaf)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [reduced])

  function pick<T>(midX: number, palette: T[]): T {
    if (reduced) return palette[0]
    return pickColor(midX, viewW, waveRef.current, indexRef.current, palette)
  }

  return {
    lineStroke: (x1: number, x2: number) => pick((x1 + x2) / 2, NETWORK_LINE_PALETTE),
    lineStrokeStrong: (x1: number, x2: number) =>
      pick((x1 + x2) / 2, NETWORK_LINE_PALETTE_STRONG),
    nodeFill: (x: number) => pick(x, NETWORK_NODE_PALETTE),
    reduced: !!reduced,
    wave,
    index,
  }
}
