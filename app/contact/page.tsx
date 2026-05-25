import type { Metadata } from "next";
import { Clock3, Globe, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHero } from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Contact Genuine Suppliers & Builders | Lalitpur, Nepal",
  description: "Contact Genuine Suppliers & Builders in Lalitpur, Nepal for building services and free project quotations.",
};

interface ContactPageProps {
  searchParams: { subject?: string };
}

const details = [
  { title: "Phone", text: "9860484821 / 9800746590", icon: Phone, href: "tel:9860484821" },
  { title: "Email", text: "suppliersg38@gmail.com", icon: Mail, href: "mailto:suppliersg38@gmail.com" },
  { title: "Website", text: "www.genuinesuppliers.com", icon: Globe, href: "https://www.genuinesuppliers.com" },
  { title: "Address", text: "Lalitpur Metropolitan-25, Bhainsepati, Lalitpur, Nepal", icon: MapPin },
  { title: "Hours", text: "Sun-Fri 8AM-6PM / Sat 9AM-3PM", icon: Clock3 },
];

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <>
      <SectionHero
        title="Get In Touch"
        current="Contact"
        subtitle="Discuss your build, repair or annual maintenance requirements with our Lalitpur team."
      />
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[390px_1fr]">
          <div>
            <p className="eyebrow">Contact Details</p>
            <h2 className="font-display text-5xl uppercase tracking-wide">Let&apos;s Start Building</h2>
            <div className="mt-10 space-y-7">
              {details.map(({ title, text, icon: Icon, href }) => (
                <div key={title} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-brand-muted">{title}</p>
                    {href ? (
                      <a href={href} className="text-sm leading-7 text-white transition hover:text-brand-red">
                        {text}
                      </a>
                    ) : (
                      <p className="text-sm leading-7 text-white">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="contact-form">
          <ContactForm initialSubject={searchParams.subject} />       
         </div>
        </div>
      </section>
      <section className="container-shell pb-20 sm:pb-28">
       <div className="overflow-hidden border border-brand-border bg-brand-card p-2">
        <iframe
         src="https://maps.google.com/maps?q=27.652803,85.302401&z=15&output=embed"
         className="h-[390px] w-full border-0"
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         title="Genuine Suppliers & Builders Location"
       />
      </div>
     </section>
    </>
  );
}
