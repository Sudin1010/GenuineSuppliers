import type { Metadata } from "next";
import { GraduationCap, HeartHandshake, HardHat, TrendingUp } from "lucide-react";
import { CareersBoard } from "@/components/CareersBoard";
import { SectionHero } from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Careers | Genuine Suppliers & Builders",
  description: "Open positions at Genuine Suppliers & Builders, Lalitpur. Build your career while building Nepal.",
};

const benefits = [
  { title: "Skilled Mentorship", text: "Learn with experienced project leaders.", icon: GraduationCap },
  { title: "Meaningful Projects", text: "Deliver spaces that serve local communities.", icon: HardHat },
  { title: "Career Growth", text: "Develop across trades and responsibilities.", icon: TrendingUp },
  { title: "Supportive Culture", text: "Work with a respectful, accountable team.", icon: HeartHandshake },
];

export default function CareersPage() {
  return (
    <>
      <SectionHero
        title="Join Our Team"
        current="Careers"
        subtitle="Build your career while building Nepal. Work on meaningful projects with a team committed to quality."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="mb-12">
            <p className="eyebrow">Why Genuine</p>
            <h2 className="display-title !text-5xl">Build With Us</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, text, icon: Icon }) => (
              <article key={title} className="surface-card p-7">
                <Icon className="mb-6 h-7 w-7 text-brand-red" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space border-t border-brand-border bg-brand-card/30">
        <div className="container-shell max-w-5xl">
          <div className="mb-11">
            <p className="eyebrow">Open Roles</p>
            <h2 className="display-title !text-5xl">Current Opportunities</h2>
          </div>
          <CareersBoard />
        </div>
      </section>
    </>
  );
}
