/** 30-stop palette for neural network line / node color cycling */

function rgba(r: number, g: number, b: number, a: number) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const HUES = [
  [74, 222, 128],
  [52, 211, 153],
  [45, 212, 191],
  [34, 211, 238],
  [56, 189, 248],
  [96, 165, 250],
  [129, 140, 248],
  [167, 139, 250],
  [192, 132, 252],
  [232, 121, 249],
  [244, 114, 182],
  [251, 113, 133],
  [248, 113, 113],
  [251, 146, 60],
  [252, 211, 77],
  [250, 204, 21],
  [163, 230, 53],
  [132, 204, 22],
  [74, 222, 128],
  [16, 185, 129],
  [20, 184, 166],
  [6, 182, 212],
  [14, 165, 233],
  [59, 130, 246],
  [99, 102, 241],
  [139, 92, 246],
  [168, 85, 247],
  [217, 70, 239],
  [236, 72, 153],
  [34, 197, 94],
] as const

export const NETWORK_LINE_PALETTE = HUES.map(([r, g, b]) => rgba(r, g, b, 0.1))
export const NETWORK_LINE_PALETTE_STRONG = HUES.map(([r, g, b]) => rgba(r, g, b, 0.3))
export const NETWORK_NODE_PALETTE = HUES.map(([r, g, b]) => rgba(r, g, b, 0.48))
