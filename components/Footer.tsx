import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["AMC Packages", "/amc"],
  ["About Us", "/about"],
  ["Careers", "/careers"],
  ["Contact Us", "/contact"],
];

const serviceLinks = [
  "Electric & Electronics",
  "Plumbing",
  "Tiles & Marble",
  "Painting",
  "CCTV Installation",
  "AC Installation",
];

export function Footer() {
  return (
    <footer id="site-footer" className="border-t-2 border-brand-red bg-[#080B14] pb-24 pt-16 md:pb-12">
      <div className="container-shell grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/logo/genuine-logo.png"
              alt="Genuine Suppliers & Builders Pvt. Ltd."
              width={112}
              height={112}
              className="h-28 w-28 rounded-full bg-[#d7d7d7] object-cover"
            />
            <span>
              <span className="block font-display text-4xl tracking-[0.15em]">GENUINE</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">
                Suppliers & Builders
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-7 text-brand-muted">
            Building Trust, Constructing Future. Premium construction and maintenance
            services across Lalitpur and the Kathmandu Valley.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social profile"
                className="border border-brand-border p-3 text-brand-muted transition hover:border-brand-red hover:text-brand-red"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 font-display text-2xl tracking-wide">Quick Links</h3>
          <ul className="space-y-4 text-sm text-brand-muted">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-brand-red">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-display text-2xl tracking-wide">Services</h3>
          <ul className="space-y-4 text-sm text-brand-muted">
            {serviceLinks.map((service) => (
              <li key={service}>
                <Link href="/services" className="transition hover:text-brand-red">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-display text-2xl tracking-wide">Contact</h3>
          <ul className="space-y-5 text-sm leading-6 text-brand-muted">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
              Lalitpur Metropolitan-25, Bhainsepati, Lalitpur, Nepal
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand-red" />
              <a href="tel:9860484821">9860484821</a>,{" "}
              <a href="tel:9800746590">9800746590</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-red" />
              <a href="mailto:suppliersg38@gmail.com">suppliersg38@gmail.com</a>
            </li>
          </ul>
          <p className="mt-7 border-l-2 border-brand-red pl-4 text-sm text-white">
            Ask about our Annual Maintenance Contracts.
          </p>
        </div>
      </div>
      <div className="container-shell mt-14 border-t border-brand-border pt-7 text-xs uppercase tracking-[0.18em] text-brand-muted">
        © {new Date().getFullYear()} Genuine Suppliers & Builders Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
