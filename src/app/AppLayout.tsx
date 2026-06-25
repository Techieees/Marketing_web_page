import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { NeuralNetworkVisual } from '@/components/visual/NeuralNetworkVisual'
import { siteConfig } from '@/data/siteConfig'

export function AppLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
    <div className="relative flex min-h-screen flex-col">
      <NeuralNetworkVisual variant="background" />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
