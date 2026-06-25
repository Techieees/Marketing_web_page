import { motion } from 'framer-motion'
import { TypewriterCardTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { fadeUp } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  index?: number
  isLast?: boolean
}

export function ProcessStep({
  number,
  title,
  description,
  index = 0,
  isLast = false,
}: ProcessStepProps) {
  const titleDelay = index * 0.18
  const descDelay = titleDelay + title.length * 0.042 + 0.15

  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col"
    >
      {!isLast && (
        <div
          className="absolute left-5 top-12 hidden h-[calc(100%-2rem)] w-px bg-border md:block"
          aria-hidden="true"
        />
      )}

      <div className="flex gap-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-xs font-medium text-muted">
          {number}
        </div>
        <div className="pb-10 md:pb-0">
          <TypewriterCardTitle
            className="text-lg font-medium md:text-xl"
            delay={titleDelay}
          >
            {title}
          </TypewriterCardTitle>
          <p className="mt-2 max-w-md text-sm leading-relaxed md:text-base">
            <TypewriterText
              text={description}
              muted
              delay={descDelay}
              charDelay={TW_CHAR_FAST}
            />
          </p>
        </div>
      </div>
    </motion.li>
  )
}

interface ProcessGridProps {
  steps: Array<{ number: string; title: string; description: string }>
}

export function ProcessGrid({ steps }: ProcessGridProps) {
  return (
    <ol className="grid gap-0 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4 lg:gap-x-8">
      {steps.map((step, i) => (
        <ProcessStep
          key={step.number}
          {...step}
          index={i}
          isLast={i === steps.length - 1}
        />
      ))}
    </ol>
  )
}
