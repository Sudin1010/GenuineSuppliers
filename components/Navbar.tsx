"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "AMC", href: "/amc" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-brand-border/70 bg-brand-dark/95 backdrop-blur-xl transition-all ${
        compact ? "py-3" : "py-5"
      }`}
    >
      <nav className="container-shell flex items-center justify-between">
        <Link href="/" aria-label="Genuine Suppliers & Builders home" className="flex items-center gap-3">
          <Image
            src="/images/logo/genuine-logo.png"
            alt="Genuine Suppliers & Builders Pvt. Ltd."
            width={72}
            height={72}
            className="h-14 w-14 rounded-full bg-[#d7d7d7] object-cover sm:h-16 sm:w-16"
          />
          <span className="hidden sm:block">
            <span className="block font-display text-3xl leading-none tracking-[0.15em] text-white">
              GENUINE
            </span>
            <span className="block text-[9px] font-bold uppercase tracking-[0.33em] text-brand-red">
              Suppliers & Builders
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`border-b pb-1 text-sm transition ${
                  active
                    ? "border-brand-red text-brand-red"
                    : "border-transparent text-white hover:text-brand-red"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact?subject=Get%20Quote#contact-form" className="button-primary !px-5 !py-3">
            Get Quote
          </Link>
        </div>
        <button
          type="button"
          className="p-2 text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div
        className={`absolute inset-x-0 top-full h-[calc(100svh-72px)] overflow-y-auto border-t border-brand-border bg-[#0B0F19] px-6 pb-12 pt-8 transition duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center justify-between border-b border-brand-border py-5 font-display text-4xl tracking-wide ${
              pathname === link.href ? "text-brand-red" : "text-white"
            }`}
          >
            {link.name}
            {link.name === "AMC" && (
              <span className="bg-brand-red px-2 py-1 font-body text-[10px] tracking-widest text-white">
                NEW
              </span>
            )}
          </Link>
        ))}
        <Link href="/contact?subject=Free%20Quote#contact-form" className="button-primary mt-8 w-full">
          Get a Free Quote
        </Link>
      </div>
    </header>
  );
}
