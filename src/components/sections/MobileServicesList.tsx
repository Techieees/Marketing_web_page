import type { Service } from '@/data/services'
import { cn } from '@/utils/cn'

const MOBILE_SERVICE_IDS = ['websites', 'dashboards', 'automation'] as const

interface MobileServicesListProps {
  services: Service[]
}

export function MobileServicesList({ services }: MobileServicesListProps) {
  const mobileServices = services.filter((service) =>
    MOBILE_SERVICE_IDS.includes(service.id as (typeof MOBILE_SERVICE_IDS)[number]),
  )

  return (
    <div className="mobile-services-list md:hidden">
      {mobileServices.map((service, index) => (
        <article
          key={service.id}
          className={cn(index > 0 && 'mt-8 border-t border-border pt-8')}
        >
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
            {String(index + 1).padStart(2, '0')}
          </p>

          <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground">
            {service.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>

          <ul className="mt-4 space-y-2">
            {service.items.slice(0, 4).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85"
              >
                <span
                  className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-muted/70"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
