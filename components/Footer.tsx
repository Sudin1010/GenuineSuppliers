import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#1877F2" />
      <path d="M13.4 20v-7h2.35l.38-2.7H13.4V8.58c0-.8.27-1.35 1.42-1.35h1.43V4.81c-.25-.03-.9-.1-1.72-.1-2.54 0-4.04 1.48-4.04 3.62v1.97H8.08V13h2.41v7h2.91Z" fill="#fff" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
      <defs>
        <linearGradient id="instagram-gradient" x1="2" y1="22" x2="22" y2="2">
          <stop stopColor="#FEDA75" />
          <stop offset=".27" stopColor="#FA7E1E" />
          <stop offset=".51" stopColor="#D62976" />
          <stop offset=".76" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="url(#instagram-gradient)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16" cy="8" r="1" fill="#fff" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#000" />
      <path d="M12 5v9.1a2.85 2.85 0 1 1-2.2-2.78" fill="none" stroke="#25F4EE" strokeWidth="2.25" />
      <path d="M13.2 4.8c.34 2.45 1.67 3.8 4 4.2" fill="none" stroke="#25F4EE" strokeWidth="2.25" />
      <path d="M13.2 5.45v9.1a2.85 2.85 0 1 1-2.2-2.78" fill="none" stroke="#FE2C55" strokeWidth="2.25" />
      <path d="M14.4 5.25c.34 2.45 1.67 3.8 4 4.2" fill="none" stroke="#FE2C55" strokeWidth="2.25" />
      <path d="M12.6 5.1v9.1a2.85 2.85 0 1 1-2.2-2.78" fill="none" stroke="#fff" strokeWidth="2.05" />
      <path d="M13.8 4.9c.34 2.45 1.67 3.8 4 4.2" fill="none" stroke="#fff" strokeWidth="2.05" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://facebook.com/yourpage",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/suppliers__builders",
  },
  {
    label: "TikTok",
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@genuine.suppliers",
  },
];

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
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition"
              >
                <Icon />
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
