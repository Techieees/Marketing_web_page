import { lazy, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { DeferredMount } from '@/components/ui/LazySection'
import { siteConfig } from '@/data/siteConfig'

const NeuralNetworkVisual = lazy(() =>
  import('@/components/visual/NeuralNetworkVisual').then((m) => ({
    default: m.NeuralNetworkVisual,
  })),
)

export function AppLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const root = document.documentElement
    function syncMotionState() {
      root.dataset.motion = document.visibilityState === 'hidden' ? 'paused' : 'active'
    }
    syncMotionState()
    document.addEventListener('visibilitychange', syncMotionState)
    return () => document.removeEventListener('visibilitychange', syncMotionState)
  }, [])

  useEffect(() => {
    const base = siteConfig.brand.name
    const titles: Record<string, string> = {
      '/': `${base} | Digital Studio`,
      '/work': `Work | ${base}`,
      '/pricing': `Pricing | ${base}`,
      '/contact': `Contact | ${base}`,
    }
    document.title = titles[location.pathname] ?? base
  }, [location.pathname])

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="desktop-bg-visual" aria-hidden="true">
        <DeferredMount>
          <Suspense fallback={null}>
            <NeuralNetworkVisual variant="background" />
          </Suspense>
        </DeferredMount>
      </div>
      <div className="noise-overlay perf-noise desktop-bg-visual" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
