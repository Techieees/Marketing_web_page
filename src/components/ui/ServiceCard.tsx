import { motion } from 'framer-motion'
import type { Service } from '@/data/services'
import { TypewriterCardTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { cn } from '@/utils/cn'
import { fadeUp } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'

interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon
  const titleDelay = index * 0.15
  const descDelay = titleDelay + service.title.length * 0.042 + 0.15

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-border-hover"
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
          service.gradient,
        )}
      />
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-foreground/[0.03] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative min-w-0 p-6 md:p-8">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border surface-highlight">
          <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
        </div>

        <TypewriterCardTitle className="text-xl font-medium" delay={titleDelay}>
          {service.title}
        </TypewriterCardTitle>
        <p className="mt-3 text-sm leading-relaxed">
          <TypewriterText
            text={service.description}
            muted
            delay={descDelay}
            charDelay={TW_CHAR_FAST}
          />
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {service.items.map((item, i) => (
            <li
              key={item}
              className="flex min-w-0 items-start gap-2 text-sm text-foreground/80 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-muted"
            >
              <span className="min-w-0 flex-1">
              <TypewriterText
                text={item}
                delay={descDelay + service.description.length * TW_CHAR_FAST + i * 0.12}
                charDelay={TW_CHAR_FAST}
              />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
