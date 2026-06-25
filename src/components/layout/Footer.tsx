import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { TypewriterBrand, TypewriterText } from '@/components/ui/TypewriterText'

export function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <footer className="section-scrim relative z-10 border-t border-border">
      <div className="container-wide flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-5 md:px-8 md:py-6 lg:px-12">
        <div className="flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1 sm:gap-x-3">
          <Link to="/" className="shrink-0 text-sm font-medium md:text-base">
            <TypewriterBrand />
          </Link>
          <span className="hidden text-muted/40 sm:inline" aria-hidden="true">
            ·
          </span>
          <p className="min-w-0 text-sm text-muted">
            <TypewriterText
              text={siteConfig.footer.tagline}
              muted
              delay={0.2}
              charDelay={0.028}
            />
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:shrink-0">
          <p className="text-xs text-muted/80">
            <TypewriterText
              text={siteConfig.footer.copyright}
              muted
              delay={0.3}
              charDelay={0.022}
            />
          </p>
          {isHome && <ThemeToggle className="px-3 py-1.5 text-xs" />}
        </div>
      </div>
    </footer>
  )
}
