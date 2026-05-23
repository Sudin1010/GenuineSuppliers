import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return project
    ? {
        title: `${project.name} | Genuine Suppliers & Builders`,
        description: `${project.description} Project delivered in ${project.location}.`,
      }
    : {};
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) notFound();

  const related = projects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        item.category.some((category) => project.category.includes(category)),
    )
    .slice(0, 3);

  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} pt-36 sm:pt-40`}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/45" />
        <div className="container-shell relative pb-16 sm:pb-20">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-muted">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <ChevronRight className="h-3 w-3 text-brand-red" />
            <Link href="/projects" className="hover:text-brand-red">Projects</Link>
            <ChevronRight className="h-3 w-3 text-brand-red" />
            <span className="text-white">{project.name}</span>
          </div>
          <p className="eyebrow">{project.type} / {project.year}</p>
          <h1 className="max-w-4xl font-display text-6xl uppercase leading-none tracking-wide sm:text-7xl lg:text-8xl">
            {project.name}
          </h1>
          <p className="mt-7 flex items-center gap-2 text-brand-muted">
            <MapPin className="h-4 w-4 text-brand-red" /> {project.location}
          </p>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_340px]">
          <article>
            <h2 className="display-title !text-4xl">Project Overview</h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-brand-muted">{project.description}</p>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                [
                  "The Challenge",
                  "Deliver a refined result while coordinating multiple trades with minimal interruption.",
                ],
                [
                  "Our Approach",
                  "Detailed planning, dedicated specialists and quality-led material choices.",
                ],
                [
                  "The Result",
                  "A precise, dependable finish aligned with the client's practical needs and design goals.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="border-t-2 border-brand-red pt-6">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-muted">{text}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="h-fit border border-brand-border bg-brand-card p-7">
            <h2 className="font-display text-3xl tracking-wide">Project Details</h2>
            <dl className="mt-7 space-y-6 text-sm">
              <div>
                <dt className="mb-2 uppercase tracking-[0.2em] text-brand-muted">Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt className="mb-2 uppercase tracking-[0.2em] text-brand-muted">Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt className="mb-2 uppercase tracking-[0.2em] text-brand-muted">Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt className="mb-3 uppercase tracking-[0.2em] text-brand-muted">Services Used</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.category.map((category) => (
                    <span key={category} className="bg-brand-red/15 px-3 py-2 text-xs text-brand-red">
                      {category}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <Link href="/contact" className="button-primary mt-9 w-full">
              Get Similar Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="container-shell">
          <h2 className="display-title mb-10 !text-4xl">Project Gallery</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {["center", "left", "right", "center"].map((position, index) => (
              <div
                key={index}
                className={`relative min-h-64 overflow-hidden border border-brand-border bg-gradient-to-br ${project.gradient}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} view ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: position }}
                />
                <div className="absolute inset-0 bg-brand-dark/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section-space border-t border-brand-border bg-brand-card/30">
          <div className="container-shell">
            <h2 className="display-title mb-11 !text-4xl">Related Projects</h2>
            <div className="grid gap-5 lg:grid-cols-3">
              {related.map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
