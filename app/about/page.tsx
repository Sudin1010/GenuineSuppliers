import type { Metadata } from "next";
import { BadgeCheck, Building2, HeartHandshake, Lightbulb, ShieldCheck, Target, UsersRound } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "About Genuine Suppliers & Builders | Lalitpur, Nepal",
  description: "About Genuine Suppliers & Builders - 10+ years delivering trusted building services in Nepal.",
};

const values = [
  { title: "Integrity", text: "Transparent quotations and dependable commitments.", icon: ShieldCheck },
  { title: "Quality", text: "Precise workmanship and durable material choices.", icon: BadgeCheck },
  { title: "Innovation", text: "Contemporary methods for efficient, elegant spaces.", icon: Lightbulb },
  { title: "Community", text: "Local expertise invested in building Nepal well.", icon: HeartHandshake },
];

const team = [
  ["PM", "Project Manager"],
  ["LE", "Lead Engineer"],
  ["DC", "Design Consultant"],
  ["SS", "Site Supervisor"],
];

export default function AboutPage() {
  return (
    <>
      <SectionHero
        title="About Us"
        current="About"
        subtitle="Building Nepal, one project at a time, through skilled work, honest relationships and thoughtful delivery."
      />
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[380px_1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              ["500+", "Projects"],
              ["12+", "Services"],
              ["10+", "Years"],
              ["100%", "Commitment"],
            ].map(([number, label]) => (
              <div key={label} className="border border-brand-border bg-brand-card p-6">
                <p className="font-display text-5xl tracking-wide text-brand-red">{number}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-muted">{label}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="display-title !text-5xl">Trusted Partners in Building</h2>
            <p className="mt-6 text-base leading-9 text-brand-muted">
              Genuine Suppliers & Builders Pvt. Ltd. supports homeowners and businesses
              with coordinated construction, interiors, installation and maintenance
              services. Based in Bhainsepati, our work combines local understanding with
              disciplined project delivery and a premium standard of finish.
            </p>
            <p className="mt-5 text-base leading-9 text-brand-muted">
              Our mission is straightforward: make complex building needs simpler through
              one reliable team, accountable from first consultation through handover.
            </p>
          </div>
        </div>
      </section>
      <section className="section-space border-y border-brand-border bg-brand-card/30">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[360px_1fr]">
          <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-card to-[#1a0505]">
            <span className="font-display text-9xl tracking-wide text-brand-red">SB</span>
          </div>
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 className="font-display text-5xl tracking-wide">Saugat Basnet</h2>
            <p className="mt-2 uppercase tracking-[0.23em] text-brand-red">Chief Executive Officer</p>
            <blockquote className="mt-8 border-l-2 border-brand-red pl-7 text-2xl leading-relaxed text-white">
              &ldquo;Every project is a promise. We earn trust by building with care,
              communicating clearly and leaving work we are proud to stand behind.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              {
                title: "Our Mission",
                text: "To deliver dependable building services that elevate homes, workplaces and everyday life throughout Nepal.",
                icon: Target,
              },
              {
                title: "Our Vision",
                text: "To become the Kathmandu Valley's most trusted integrated construction and property care partner.",
                icon: Building2,
              },
            ].map(({ title, text, icon: Icon }) => (
              <article key={title} className="surface-card p-8">
                <Icon className="mb-6 h-8 w-8 text-brand-red" />
                <h2 className="font-display text-4xl tracking-wide">{title}</h2>
                <p className="mt-5 leading-8 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
          <div className="mb-11 mt-20 text-center">
            <p className="eyebrow">Principles</p>
            <h2 className="display-title !text-5xl">Our Values</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border-t-2 border-brand-red bg-brand-card p-7">
                <Icon className="mb-6 h-7 w-7 text-brand-red" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space border-t border-brand-border bg-brand-card/30">
        <div className="container-shell">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our People</p>
              <h2 className="display-title !text-5xl">The Team</h2>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.17em] text-brand-muted">
              {["Registered", "Licensed", "Insured"].map((label) => (
                <span key={label} className="flex items-center gap-2 border border-brand-border px-4 py-3">
                  <UsersRound className="h-4 w-4 text-brand-red" /> {label}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([initials, title]) => (
              <article key={title} className="surface-card p-6 text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-dark font-display text-4xl tracking-wide text-brand-red">
                  {initials}
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-brand-muted">Genuine Suppliers & Builders</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
