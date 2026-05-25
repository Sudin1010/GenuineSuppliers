"use client";

import Link from "next/link";
import { CalendarDays, ChevronUp, Phone } from "lucide-react";
import { useEffect, useState } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className ?? ""} scale-125`} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34ZM12.05 21.79a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89ZM20.52 3.45A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.56 0 11.89-5.34 11.89-11.9 0-3.17-1.23-6.16-3.43-8.45Z" />
    </svg>
  );
}

const whatsappMessage = encodeURIComponent(
  "Hello Genuine Suppliers & Builders, I would like to inquire about your services.",
);

const actions = [
  {
    label: "Chat on WhatsApp",
    href: `https://wa.me/9779860484821?text=${whatsappMessage}`,
    icon: WhatsAppIcon,
    style: "bg-[#25D366] animate-contact",
    external: true,
    newTab: true,
  },
  {
    label: "Call Now",
    href: "tel:9860484821",
    icon: Phone,
    style: "bg-brand-red",
    external: true,
  },
  {
    label: "AMC Inquiry",
    href: "/contact?subject=amc",
    icon: CalendarDays,
    style: "bg-[#741818]",
    external: false,
  },
];

export function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 md:bottom-7 md:right-7">
      {actions.map(({ label, href, icon: Icon, style, external, newTab }) => {
        const content = (
          <>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap bg-brand-card px-3 py-2 text-xs uppercase tracking-widest text-white opacity-0 transition group-hover:opacity-100">
              {label}
            </span>
            <Icon className="h-5 w-5" />
          </>
        );
        const className = `group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition hover:scale-105 ${style}`;

        return external ? (
          <a
            key={label}
            href={href}
            className={className}
            aria-label={label}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
          >
            {content}
          </a>
        ) : (
          <Link key={label} href={href} className={className} aria-label={label}>
            {content}
          </Link>
        );
      })}
      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-card text-white transition hover:border-brand-red hover:text-brand-red"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
