import type { ReactNode } from 'react'
import type { WorkPreviewType } from '@/data/work'
import { cn } from '@/utils/cn'

interface WorkPreviewMockProps {
  imageSrc: string
  imageAlt: string
  imagePosition?: string
  className?: string
}

function BrowserFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-[10px] border border-white/12 bg-[#08080a] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)]',
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.07] bg-[#121214] px-2.5 py-1.5">
        <div className="flex gap-1">
          <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto h-3.5 flex-1 max-w-[55%] rounded-md bg-white/[0.06]" />
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden bg-[#0a0a0c]">{children}</div>
    </div>
  )
}

export function WorkPreviewMock({
  imageSrc,
  imageAlt,
  imagePosition = 'center center',
  className,
}: WorkPreviewMockProps) {
  return (
    <div className={cn('absolute inset-1.5 sm:inset-2.5', className)}>
      <BrowserFrame className="h-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
      </BrowserFrame>
    </div>
  )
}

export const WORK_PREVIEW_IMAGES: Record<
  WorkPreviewType,
  { src: string; alt: string; position: string }
> = {
  'carbon-dashboard': {
    src: '/images/work/carbon-dashboard.jpg',
    alt: 'Carbon reporting dashboard with charts and analytics',
    position: 'center center',
  },
  'hse-dashboard': {
    src: '/images/work/hse-dashboard.jpg',
    alt: 'Operations dashboard on a laptop screen',
    position: 'center 22%',
  },
  'agency-site': {
    src: '/images/work/agency-site.jpg',
    alt: 'Creative agency website design on a monitor',
    position: 'center 28%',
  },
  'shopify-store': {
    src: '/images/work/shopify-store.jpg',
    alt: 'Ecommerce storefront and online shopping experience',
    position: 'center center',
  },
  'api-portal': {
    src: '/images/work/api-portal.jpg',
    alt: 'API reporting portal with team reviewing data dashboards',
    position: 'center 18%',
  },
}
