import type { Service } from "@/lib/site";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="surface-card group p-7">
      <ServiceIcon
        name={service.icon}
        className="mb-6 h-8 w-8 text-brand-red transition group-hover:text-brand-red-hover"
      />
      <h3 className="mb-3 text-lg font-semibold text-white">{service.name}</h3>
      <p className="text-sm leading-7 text-brand-muted">{service.description}</p>
    </article>
  );
}
