import { forwardRef, useRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  magnetic?: boolean
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_0_1px_var(--primary-btn-ring)]',
  secondary:
    'glass text-foreground hover:bg-foreground/[0.06] hover:border-border-hover',
  ghost: 'text-muted hover:text-foreground hover:bg-foreground/[0.04]',
  outline:
    'border border-border text-foreground hover:border-border-hover hover:bg-foreground/[0.04]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-12 px-8 text-base gap-2.5',
}

const baseStyles =
  'relative inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 disabled:pointer-events-none disabled:opacity-50'

function MagneticWrapper({
  magnetic,
  children,
  className,
}: {
  magnetic?: boolean
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const rafRef = useRef(0)
  const pendingRef = useRef<{ x: number; y: number } | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  if (!magnetic) {
    return <div className={className}>{children}</div>
  }

  function flushMove() {
    rafRef.current = 0
    const pending = pendingRef.current
    if (!pending) return
    x.set(pending.x)
    y.set(pending.y)
    pendingRef.current = null
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={className}
      onMouseEnter={() => {
        if (ref.current) rectRef.current = ref.current.getBoundingClientRect()
      }}
      onMouseMove={(e) => {
        const rect = rectRef.current
        if (!rect) return
        const offsetX = e.clientX - rect.left - rect.width / 2
        const offsetY = e.clientY - rect.top - rect.height / 2
        pendingRef.current = { x: offsetX * 0.15, y: offsetY * 0.15 }
        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(flushMove)
        }
      }}
      onMouseLeave={() => {
        rectRef.current = null
        pendingRef.current = null
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = 0
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      magnetic = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

    const content = (
      <MagneticWrapper magnetic={magnetic}>
        {href ? (
          href.startsWith('/') ? (
            <Link to={href} className={classes}>
              {children}
            </Link>
          ) : (
            <a href={href} className={classes}>
              {children}
            </a>
          )
        ) : (
          <button ref={ref} className={classes} {...props}>
            {children}
          </button>
        )}
      </MagneticWrapper>
    )

    return content
  },
)

Button.displayName = 'Button'
