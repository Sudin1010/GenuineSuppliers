import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  tall?: boolean;
}

export function ProjectCard({ project, tall = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden border border-brand-border bg-gradient-to-br ${project.gradient} ${
        tall ? "min-h-[410px]" : "min-h-[340px]"
      } transition duration-500 hover:scale-[1.02] hover:border-brand-red`}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 34vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute right-5 top-5 z-10 bg-brand-red px-3 py-1 text-[11px] uppercase tracking-[0.17em] text-white">
        {project.category[0]}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/35 to-transparent transition group-hover:from-brand-dark" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand-red">
          {project.year} / {project.type}
        </p>
        <h3 className="font-display text-3xl uppercase tracking-wide text-white">
          {project.name}
        </h3>
        <p className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
          <MapPin className="h-4 w-4 text-brand-red" />
          {project.location}
        </p>
        <span className="mt-5 inline-flex translate-y-2 items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Details <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
