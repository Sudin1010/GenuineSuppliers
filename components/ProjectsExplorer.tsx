"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import { projectCategories } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";

const types = ["Residential", "Commercial", "Industrial"] as const;

export function ProjectsExplorer() {
  const [category, setCategory] = useState("All");
  const [type, setType] = useState<string>("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (category === "All" || project.category.includes(category)) &&
          (type === "All" || project.type === type),
      ),
    [category, type],
  );

  const displayed = expanded ? filtered : filtered.slice(0, 8);

  return (
    <>
      <div className="mb-12 space-y-7 border border-brand-border bg-brand-card/50 p-5 sm:p-7">
        <div className="flex flex-wrap gap-3">
          {["All", ...projectCategories].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setExpanded(false);
              }}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition ${
                category === item
                  ? "border-brand-red bg-brand-red text-white"
                  : "border-brand-border text-brand-muted hover:border-brand-red hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 border-t border-brand-border pt-6">
          {["All", ...types].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setType(item);
                setExpanded(false);
              }}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] transition ${
                type === item
                  ? "border-brand-red text-brand-red"
                  : "border-brand-border text-brand-muted hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {displayed.length > 0 ? (
        <div className="project-masonry">
          {displayed.map((project, index) => (
            <ProjectCard key={project.slug} project={project} tall={index % 3 === 0} />
          ))}
        </div>
      ) : (
        <div className="border border-brand-border py-20 text-center text-brand-muted">
          No projects match these filters yet.
        </div>
      )}
      {!expanded && filtered.length > 8 && (
        <div className="mt-10 text-center">
          <button type="button" className="button-secondary" onClick={() => setExpanded(true)}>
            Load More Projects
          </button>
        </div>
      )}
    </>
  );
}
