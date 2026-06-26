import { siteConfig } from '@/data/siteConfig'
import { ROTATE_SETS } from '@/data/rotateWords'
import { services } from '@/data/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { MobileServicesList } from '@/components/sections/MobileServicesList'

export function Services() {
  const { services: servicesMeta } = siteConfig

  return (
    <section
      className="section-padding section-scrim services-section max-md:bg-background max-md:py-14"
      id="services"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow={servicesMeta.eyebrow}
          title=""
          rotateWords={[...ROTATE_SETS.services]}
          titleAfterRotate="and the glue between them."
          description={servicesMeta.description}
          className="mb-8 md:mb-16"
        />

        <MobileServicesList services={services} />

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
