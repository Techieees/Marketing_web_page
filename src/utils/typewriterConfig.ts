export const TW_CHAR = 0.042
export const TW_CHAR_FAST = 0.026
export const TW_CHAR_HERO = 0.07
export const TW_LABEL_PAUSE = 0.4
export const TW_INITIAL = 0.5

export function twDuration(text: string, charDelay = TW_CHAR, baseDelay = 0): number {
  return baseDelay + text.length * charDelay
}

export function twSequentialDelay(
  texts: string[],
  index: number,
  charDelay = TW_CHAR,
  pause = TW_LABEL_PAUSE,
  base = TW_INITIAL,
): number {
  let delay = base
  for (let j = 0; j < index; j++) {
    delay += texts[j].length * charDelay + pause
  }
  return delay
}
