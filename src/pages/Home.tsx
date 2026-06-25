import { Hero } from '@/components/sections/Hero'
import { LogoStrip } from '@/components/sections/LogoStrip'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { PricingPreview } from '@/components/sections/PricingPreview'
import { WhyUs } from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { FinalCTA } from '@/components/sections/FinalCTA'

export function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturedWork />
      <Services />
      <Process />
      <PricingPreview />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
