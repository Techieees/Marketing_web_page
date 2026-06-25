import { motion } from 'framer-motion'

export function AnimatedGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(100, 100, 255, 0.25) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 160, 100, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(120, 200, 180, 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
