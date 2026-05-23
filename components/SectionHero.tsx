import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeroProps {
  title: string;
  subtitle: string;
  current: string;
}

export function SectionHero({ title, subtitle, current }: SectionHeroProps) {
  return (
    <section className="border-b border-brand-border bg-gradient-to-br from-brand-dark via-brand-dark to-brand-card pt-36 sm:pt-40">
      <div className="container-shell pb-16 sm:pb-20">
        <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-muted">
          <Link href="/" className="transition hover:text-brand-red">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-brand-red" />
          <span className="text-white">{current}</span>
        </div>
        <p className="eyebrow">Genuine Suppliers & Builders</p>
        <h1 className="display-title">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
