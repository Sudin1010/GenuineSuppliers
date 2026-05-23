"use client";

import Link from "next/link";
import { Building2, FolderKanban, Home, Phone, ShieldCheck, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/services", icon: Wrench, label: "Services" },
  { href: "/projects", icon: FolderKanban, label: "Projects" },
  { href: "/amc", icon: ShieldCheck, label: "AMC" },
  { href: "/about", icon: Building2, label: "About" },
  { href: "/contact", icon: Phone, label: "Contact" },
];

export function FloatingNav() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (footerVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 rounded-full border border-brand-red/40 bg-brand-card/95 px-2 py-2 shadow-glow backdrop-blur md:hidden">
      {navItems.map(({ href, icon: Icon, label }) => {
        const active = href === "/" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className={`rounded-full p-3 transition ${active ? "bg-brand-red text-white" : "text-brand-muted"}`}
          >
            <Icon className="h-4 w-4" />
          </Link>
        );
      })}
    </div>
  );
}
