import { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { CaseStudy } from '@/data/work'
import { Badge } from '@/components/ui/Badge'
import { WorkPreviewMock, WORK_PREVIEW_IMAGES } from '@/components/ui/WorkPreviewMock'
import { TypewriterCardTitle, TypewriterText } from '@/components/ui/TypewriterText'
import { cn } from '@/utils/cn'
import { scaleIn } from '@/utils/animations'
import { TW_CHAR_FAST } from '@/utils/typewriterConfig'

interface WorkCardProps {
  study: CaseStudy
  index?: number
  variant?: 'default' | 'compact'
  priority?: boolean
}

export const WorkCard = memo(function WorkCard({
  study,
  index = 0,
  variant = 'default',
  priority = false,
}: WorkCardProps) {
  const titleDelay = index * 0.12
  const descDelay = titleDelay + study.title.length * 0.042 + 0.2

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,opacity] duration-500 hover:border-border-hover',
        variant === 'compact' ? 'min-w-[320px] max-w-[380px] shrink-0' : 'w-full',
      )}
    >
      <div
        className={cn(
          'relative aspect-[16/10] overflow-hidden bg-gradient-to-br',
          study.gradient,
        )}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${study.accent}33, transparent 65%)`,
          }}
        />
        <WorkPreviewMock
          imageSrc={WORK_PREVIEW_IMAGES[study.preview].src}
          imageAlt={WORK_PREVIEW_IMAGES[study.preview].alt}
          imagePosition={WORK_PREVIEW_IMAGES[study.preview].position}
          priority={priority}
        />

        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-10 sm:w-10">
          <ArrowUpRight className="h-4 w-4 text-foreground" />
        </div>
      </div>

      <div className="min-w-0 p-6">
        <Badge variant="muted" className="mb-3">
          {study.category}
        </Badge>
        <TypewriterCardTitle
          className="text-lg font-medium md:text-xl"
          delay={titleDelay}
        >
          {study.title}
        </TypewriterCardTitle>
        <p className="mt-2 text-sm leading-relaxed line-clamp-2">
          <TypewriterText
            text={study.description}
            muted
            delay={descDelay}
            charDelay={TW_CHAR_FAST}
          />
        </p>

        {variant === 'default' && (
          <>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.services.map((s, i) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  <TypewriterText
                    text={s}
                    delay={descDelay + study.description.length * TW_CHAR_FAST + i * 0.1}
                    charDelay={TW_CHAR_FAST}
                    muted
                  />
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium">
              <TypewriterText
                text={study.outcome}
                delay={
                  descDelay +
                  study.description.length * TW_CHAR_FAST +
                  study.services.length * 0.1 +
                  0.2
                }
                charDelay={TW_CHAR_FAST}
              />
            </p>
          </>
        )}
      </div>
    </motion.article>
  )
})
