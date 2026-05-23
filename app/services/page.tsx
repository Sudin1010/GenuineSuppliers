import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Hammer, MessageSquareText, PenTool } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Construction & Building Services in Lalitpur | Genuine Suppliers",
  description:
    "All 12 building services in Lalitpur - electric, plumbing, tiles, CCTV, AC, furniture, waterproofing and more.",
};

const steps = [
  { title: "Consultation", text: "Understand your needs and visit the site.", icon: MessageSquareText },
  { title: "Planning", text: "Define scope, materials, pricing and schedule.", icon: PenTool },
  { title: "Execution", text: "Deliver skilled work with close supervision.", icon: Hammer },
  { title: "Handover", text: "Inspect, finish and confidently hand over.", icon: ClipboardCheck },
];

export default function ServicesPage() {
  return (
    <>
      <SectionHero
        title="Our Services"
        current="Services"
        subtitle="A coordinated suite of building and maintenance services delivered with precision across Lalitpur."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space border-t border-brand-border bg-brand-card/40">
        <div className="container-shell">
          <div className="mb-14 text-center">
            <p className="eyebrow">Our Process</p>
            <h2 className="display-title">From Brief to Handover</h2>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-brand-red/60 lg:block" />
            {steps.map(({ title, text, icon: Icon }, index) => (
              <article key={title} className="relative text-center">
                <span className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-brand-red bg-brand-dark text-brand-red">
                  <Icon />
                </span>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-brand-red">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/contact" className="button-primary">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
