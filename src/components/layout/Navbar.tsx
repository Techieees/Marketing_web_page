import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { TypewriterBrand, TypewriterText } from '@/components/ui/TypewriterText'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { MobileNav } from '@/components/layout/MobileNav'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/50 bg-background/70 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav
          className="container-wide flex h-16 items-center justify-between px-5 md:h-[4.5rem] md:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="relative z-10 text-sm font-medium tracking-tight transition-opacity hover:opacity-80"
          >
            <TypewriterBrand name={siteConfig.brand.name} />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item, i) => {
              const active = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'text-sm transition-colors hover:text-foreground',
                    !active && 'text-muted',
                  )}
                >
                  <TypewriterText
                    text={item.label}
                    startOnView={false}
                    delay={0.4 + i * 0.12}
                    charDelay={0.04}
                  />
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="sm" magnetic>
              Book a Call
            </Button>
          </div>

          <button
            type="button"
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
