import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { NetworkLabel } from '@/components/visual/NetworkLabel'
import { useNetworkColorWave } from '@/hooks/useNetworkColorWave'
import { ROTATE_SETS } from '@/data/rotateWords'

interface Node {
  id: string
  x: number
  y: number
  layer: number
  labelSide?: 'left' | 'right'
  slotIndex?: number
  accentColor?: string
}

interface Connection {
  id: string
  x1: number
  y1: number
  x2: number
  y2: number
  animated: boolean
}

const INPUT_SLOT_COLORS = ['#f87171', '#fb923c', '#fbbf24', '#f472b6'] as const
const OUTPUT_SLOT_COLORS = ['#6ee7a0', '#7dd3fc', '#5eead4', '#a5b4fc'] as const
const SLOT_COUNT = 4

export const VIEW_W = 1800
export const VIEW_H = 1000

function yPositions(count: number, top: number, bottom: number): number[] {
  if (count <= 1) return [(top + bottom) / 2]
  const step = (bottom - top) / (count - 1)
  return Array.from({ length: count }, (_, i) => top + step * i)
}

function buildNetwork() {
  const top = VIEW_H * 0.14
  const bottom = VIEW_H * 0.86
  const inputYs = yPositions(SLOT_COUNT, top, bottom)

  const nodes: Node[] = Array.from({ length: SLOT_COUNT }, (_, i) => ({
    id: `in-${i}`,
    x: 140,
    y: inputYs[i],
    layer: 0,
    labelSide: 'left',
    slotIndex: i,
    accentColor: INPUT_SLOT_COLORS[i],
  }))

  const hidden1Xs = [480, 620, 760]
  hidden1Xs.forEach((x, col) => {
    const ys = yPositions(6, top + col * 18, bottom - col * 18)
    ys.forEach((y, row) => {
      nodes.push({ id: `h1-${col}-${row}`, x, y, layer: 1 })
    })
  })

  const hidden2Xs = [980, 1120, 1260]
  hidden2Xs.forEach((x, col) => {
    const ys = yPositions(6, top + 12 + col * 18, bottom - 12 - col * 18)
    ys.forEach((y, row) => {
      nodes.push({ id: `h2-${col}-${row}`, x, y, layer: 2 })
    })
  })

  Array.from({ length: SLOT_COUNT }, (_, i) => {
    nodes.push({
      id: `out-${i}`,
      x: 1660,
      y: inputYs[i],
      layer: 3,
      labelSide: 'right',
      slotIndex: i,
      accentColor: OUTPUT_SLOT_COLORS[i],
    })
  })

  const connections: Connection[] = []
  let connIndex = 0

  for (let l = 0; l < 3; l++) {
    const fromNodes = nodes.filter((n) => n.layer === l)
    const toNodes = nodes.filter((n) => n.layer === l + 1)

    fromNodes.forEach((from) => {
      toNodes.forEach((to) => {
        connections.push({
          id: `c-${connIndex++}`,
          x1: from.x,
          y1: from.y,
          x2: to.x,
          y2: to.y,
          animated: connIndex % 8 === 0,
        })
      })
    })
  }

  return { nodes, connections }
}

interface NeuralNetworkVisualProps {
  className?: string
  variant?: 'inline' | 'background'
}

export function NeuralNetworkVisual({
  className,
  variant = 'inline',
}: NeuralNetworkVisualProps) {
  const reduced = useReducedMotion()
  const { nodes, connections } = useMemo(() => buildNetwork(), [])
  const colors = useNetworkColorWave(VIEW_W)
  const [introDone, setIntroDone] = useState(false)

  const labeledNodes = nodes.filter((n) => n.labelSide !== undefined)
  const isBg = variant === 'background'

  const visibleConnections = useMemo(
    () => (isBg ? connections.filter((_, i) => i % 2 === 0) : connections),
    [connections, isBg],
  )

  const animatedConnections = useMemo(
    () => visibleConnections.filter((c) => c.animated),
    [visibleConnections],
  )

  useEffect(() => {
    if (reduced) {
      setIntroDone(true)
      return
    }
    const t = window.setTimeout(() => setIntroDone(true), 1200)
    return () => clearTimeout(t)
  }, [reduced])

  return (
    <div
      className={
        isBg
          ? `gpu-layer pointer-events-none fixed inset-0 z-0 ${className ?? ''}`
          : `relative ${className ?? ''}`
      }
      aria-hidden="true"
    >
      {isBg && <div className="absolute inset-0 network-scrim" />}

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className={isBg ? 'h-full w-full opacity-[0.88]' : 'h-full w-full'}
        preserveAspectRatio={isBg ? 'xMidYMid slice' : 'xMidYMid meet'}
      >
        <g strokeLinecap="round">
          {visibleConnections.map((conn) => (
            <line
              key={conn.id}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke={
                reduced
                  ? 'rgba(74, 222, 128, 0.09)'
                  : colors.lineStroke(conn.x1, conn.x2)
              }
              strokeWidth="0.65"
            />
          ))}

          {!reduced &&
            animatedConnections.map((conn) => (
              <line
                key={`a-${conn.id}`}
                x1={conn.x1}
                y1={conn.y1}
                x2={conn.x2}
                y2={conn.y2}
                className="network-line-active"
                stroke={colors.lineStrokeStrong(conn.x1, conn.x2)}
                strokeWidth="0.75"
                strokeDasharray="3 12"
              />
            ))}
        </g>

        {nodes.map((node, i) => {
          const isLabeled = node.labelSide !== undefined
          const fill = reduced
            ? isLabeled
              ? node.accentColor!
              : 'rgba(110, 230, 160, 0.45)'
            : isLabeled
              ? node.accentColor!
              : colors.nodeFill(node.x)

          if (introDone || reduced) {
            return (
              <circle
                key={node.id}
                cx={node.x}
                cy={node.y}
                r={isLabeled ? 4.5 : 2.5}
                fill={fill}
                opacity={isLabeled ? 0.9 : 0.5}
              />
            )
          }

          return (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={isLabeled ? 4.5 : 2.5}
              fill={fill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isLabeled ? 0.9 : 0.5, scale: 1 }}
              transition={{
                delay: isLabeled ? 0.5 + i * 0.04 : 0.1 + i * 0.002,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          )
        })}
      </svg>

      <div className="absolute inset-0">
        {labeledNodes.map((node) => {
          const isInput = node.labelSide === 'left'
          const words = isInput
            ? [...ROTATE_SETS.networkInput]
            : [...ROTATE_SETS.networkOutput]

          return (
            <NetworkLabel
              key={node.id}
              words={words}
              startIndex={node.slotIndex ?? 0}
              x={node.x}
              y={node.y}
              viewW={VIEW_W}
              viewH={VIEW_H}
            />
          )
        })}
      </div>

      {!isBg && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      )}
    </div>
  )
}
