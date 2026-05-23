"use client";

import Link from "next/link";
import { CalendarDays, ChevronUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const actions = [
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/9779860484821",
    icon: MessageCircle,
    style: "bg-[#25D366] animate-contact",
    external: true,
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
    <div className="fixed bottom-24 right-4 z-40 hidden flex-col items-end gap-3 md:flex md:bottom-7 md:right-7">
      {actions.map(({ label, href, icon: Icon, style, external }) => {
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
          <a key={label} href={href} className={className} aria-label={label}>
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
