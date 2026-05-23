import type { Metadata } from "next";
import { CountUpStats } from "@/components/CountUpStats";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { SectionHero } from "@/components/SectionHero";

export const metadata: Metadata = {
  title: "Projects | Genuine Suppliers & Builders",
  description: "500+ completed projects across Kathmandu Valley by Genuine Suppliers & Builders.",
};

export default function ProjectsPage() {
  return (
    <>
      <SectionHero
        title="Our Projects"
        current="Projects"
        subtitle="500+ completed projects across the Kathmandu Valley, from refined residences to high-performance commercial spaces."
      />
      <section className="border-b border-brand-border bg-brand-card">
        <div className="container-shell">
          <CountUpStats />
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <ProjectsExplorer />
        </div>
      </section>
    </>
  );
}
