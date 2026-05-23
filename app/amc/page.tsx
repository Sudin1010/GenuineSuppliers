import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck2, ChevronDown, Clock3, Headset, ShieldCheck } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { services } from "@/lib/site";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Annual Maintenance Contracts | Genuine Suppliers & Builders",
  description: "Annual Maintenance Contracts for homes and offices in Nepal with responsive year-round building care.",
};

const packages = [
  {
    name: "Basic",
    text: "Essential coverage for small homes & apartments",
    features: ["2 visits/year", "Electrical + plumbing inspection", "AC filter service (1 unit)", "Phone support", "48hr response", "Up to 1,000 sq ft"],
    excluded: "No CCTV, false ceiling or weekend emergencies.",
  },
  {
    name: "Professional",
    text: "Complete coverage for homes & small offices",
    popular: true,
    features: ["4 visits/year", "Full electrical + plumbing", "AC servicing (2 units)", "CCTV and false ceiling check", "Minor painting", "24hr response + 2 emergencies"],
    excluded: "Coverage up to 2,500 sq ft.",
  },
  {
    name: "Enterprise",
    text: "Full-service coverage for offices & commercial spaces",
    features: ["6 visits/year", "All 12 services", "Unlimited AC coverage", "Dedicated account manager", "4hr response", "Unlimited emergencies + annual report"],
    excluded: "Built for commercial and multi-unit properties.",
  },
];

const comparison = [
  ["Scheduled visits", "2", "4", "6"],
  ["Electrical & plumbing", "Included", "Included", "Included"],
  ["AC maintenance", "1 unit", "2 units", "Unlimited"],
  ["CCTV check", "-", "Included", "Included"],
  ["Emergency response", "-", "2 callouts", "Unlimited"],
  ["Response time", "48hr", "24hr", "4hr"],
  ["Dedicated manager", "-", "-", "Included"],
];

const faqs = [
  ["What is an AMC?", "An Annual Maintenance Contract arranges planned inspections, priority response and covered building services for one year."],
  ["Are repair materials included?", "Inspection and covered servicing are included as stated in your plan; replacement materials are quoted transparently when needed."],
  ["Can I customize coverage?", "Yes. We assess the property and can tailor the scope around systems, size and usage."],
  ["Do you cover emergencies?", "Professional includes limited emergency callouts; Enterprise includes unlimited emergencies under agreed terms."],
  ["Is AMC available for apartments?", "Yes. We support individual apartments, housing complexes, offices and commercial buildings."],
  ["How do I begin?", "Book a free assessment and we will recommend the most suitable maintenance package."],
];

const benefits = [
  { label: "Priority Response", icon: Clock3 },
  { label: "Dedicated Team", icon: Headset },
  { label: "Fixed Annual Cost", icon: ShieldCheck },
];

export default function AmcPage() {
  return (
    <>
      <SectionHero
        title="Annual Maintenance Contract"
        current="AMC"
        subtitle="One contract. All your building needs. Year-round peace of mind."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <p className="eyebrow">Planned Care</p>
              <h2 className="display-title !text-5xl">Protect the Property You Built</h2>
              <p className="mt-6 max-w-2xl leading-8 text-brand-muted">
                Our AMC plans keep vital building systems inspected and maintained by one
                dependable team, reducing surprises and making annual costs easier to manage.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {benefits.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-4 border border-brand-border bg-brand-card p-5">
                  <Icon className="h-6 w-6 shrink-0 text-brand-red" />
                  <span className="text-sm font-semibold uppercase tracking-[0.17em]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-24">
        <div className="container-shell grid gap-5 lg:grid-cols-3">
          {packages.map((plan) => (
            <article
              key={plan.name}
              className={`relative border bg-brand-card p-7 ${plan.popular ? "border-brand-red" : "border-brand-border"}`}
            >
              {plan.popular && (
                <p className="absolute right-5 top-0 -translate-y-1/2 bg-brand-red px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Most Popular
                </p>
              )}
              <h2 className="font-display text-4xl tracking-wide">{plan.name}</h2>
              <p className="mt-4 min-h-14 text-sm leading-7 text-brand-muted">{plan.text}</p>
              <p className="my-7 font-display text-4xl tracking-wide text-brand-red">Contact for Quote</p>
              <ul className="space-y-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-white">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-brand-red" /> {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-brand-border pt-5 text-sm leading-6 text-brand-muted">{plan.excluded}</p>
              <Link href="/contact?subject=amc" className="button-primary mt-7 w-full">
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section-space border-y border-brand-border bg-brand-card/35">
        <div className="container-shell">
          <h2 className="display-title mb-10 !text-5xl">Compare Packages</h2>
          <div className="overflow-x-auto border border-brand-border">
            <table className="min-w-[680px] w-full text-left text-sm">
              <thead className="bg-brand-card">
                <tr>
                  {["Coverage", "Basic", "Professional", "Enterprise"].map((title, index) => (
                    <th key={title} className={`px-5 py-5 uppercase tracking-widest ${index === 0 ? "sticky left-0 bg-brand-card" : ""}`}>
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]} className="border-t border-brand-border">
                    {row.map((cell, index) => (
                      <td
                        key={cell}
                        className={`px-5 py-5 ${index === 0 ? "sticky left-0 bg-brand-dark font-semibold text-white" : "text-brand-muted"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="mb-11">
            <p className="eyebrow">Coverage</p>
            <h2 className="display-title !text-5xl">What&apos;s Covered</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.name} className="border border-brand-border bg-brand-card p-5">
                <ServiceIcon name={service.icon} className="mb-4 h-6 w-6 text-brand-red" />
                <p className="min-h-12 text-sm font-semibold">{service.name}</p>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-brand-muted">
                  {index < 2 ? "B / P / E" : index < 6 ? "P / E" : "E"}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space border-y border-brand-border bg-brand-card/35">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="eyebrow">Simple Process</p>
            <h2 className="display-title !text-5xl">How AMC Works</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {["Free Assessment", "Tailored Proposal", "Contract & Schedule", "Ongoing Care"].map((step, index) => (
              <div key={step} className="border border-brand-border bg-brand-card p-7">
                <CalendarCheck2 className="mb-6 h-7 w-7 text-brand-red" />
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-red">Step 0{index + 1}</p>
                <h3 className="text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell max-w-4xl">
          <h2 className="display-title mb-10 !text-5xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border border-brand-border bg-brand-card p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand-red transition group-open:rotate-180" />
                </summary>
                <p className="mt-5 max-w-3xl border-t border-brand-border pt-5 leading-8 text-brand-muted">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact?subject=amc" className="button-primary">
              Book Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
