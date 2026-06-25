import { RotatingTypewriter } from '@/components/ui/RotatingTypewriter'
import type { RotatingWord } from '@/data/rotateWords'

interface NetworkLabelProps {
  words: RotatingWord[]
  startIndex?: number
  x: number
  y: number
  viewW: number
  viewH: number
}

/** Labels always sit below the node — never overlap the dot */
export function NetworkLabel({
  words,
  startIndex = 0,
  x,
  y,
  viewW,
  viewH,
}: NetworkLabelProps) {
  const leftPct = (x / viewW) * 100
  const topPct = (y / viewH) * 100

  return (
    <div
      className="pointer-events-none absolute z-10 w-max max-w-[min(11rem,28vw)] text-center"
      style={{
        left: `${leftPct}%`,
        top: `${topPct}%`,
        transform: 'translate(-50%, 1rem)',
      }}
    >
      <RotatingTypewriter
        words={words}
        size="network"
        startIndex={startIndex}
        showCursor={false}
        reserveWidth={false}
        align="center"
        className="block text-center text-[9px] font-medium leading-snug tracking-wide sm:text-[10px] md:text-[11px]"
      />
    </div>
  )
}
