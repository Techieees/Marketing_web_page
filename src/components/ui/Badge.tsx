import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'muted'
  className?: string
}

const variants = {
  default: 'surface-highlight text-foreground border-border',
  accent: 'surface-highlight-strong text-foreground border-border-hover',
  muted: 'bg-transparent text-muted border-border',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit max-w-full items-center rounded-full border px-3.5 py-1.5',
        'text-[11px] font-semibold leading-none tracking-wide',
        variant === 'accent' && 'uppercase',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
