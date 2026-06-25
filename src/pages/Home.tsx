import { lazy, Suspense } from 'react'
import { Hero } from '@/components/sections/Hero'
import { LogoStrip } from '@/components/sections/LogoStrip'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { LazySection } from '@/components/ui/LazySection'

const Services = lazy(() =>
  import('@/components/sections/Services').then((m) => ({ default: m.Services })),
)
const Process = lazy(() =>
  import('@/components/sections/Process').then((m) => ({ default: m.Process })),
)
const PricingPreview = lazy(() =>
  import('@/components/sections/PricingPreview').then((m) => ({ default: m.PricingPreview })),
)
const WhyUs = lazy(() =>
  import('@/components/sections/WhyUs').then((m) => ({ default: m.WhyUs })),
)
const Testimonials = lazy(() =>
  import('@/components/sections/Testimonials').then((m) => ({ default: m.Testimonials })),
)
const FinalCTA = lazy(() =>
  import('@/components/sections/FinalCTA').then((m) => ({ default: m.FinalCTA })),
)

function SectionSlot() {
  return null
}

export function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturedWork />

      <LazySection minHeight="480px">
        <Suspense fallback={<SectionSlot />}>
          <Services />
        </Suspense>
      </LazySection>

      <LazySection minHeight="520px">
        <Suspense fallback={<SectionSlot />}>
          <Process />
        </Suspense>
      </LazySection>

      <LazySection minHeight="640px">
        <Suspense fallback={<SectionSlot />}>
          <PricingPreview />
        </Suspense>
      </LazySection>

      <LazySection minHeight="400px">
        <Suspense fallback={<SectionSlot />}>
          <WhyUs />
        </Suspense>
      </LazySection>

      <LazySection minHeight="480px">
        <Suspense fallback={<SectionSlot />}>
          <Testimonials />
        </Suspense>
      </LazySection>

      <LazySection minHeight="360px">
        <Suspense fallback={<SectionSlot />}>
          <FinalCTA />
        </Suspense>
      </LazySection>
    </>
  )
}
