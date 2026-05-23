import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Gem,
  IndianRupee,
  Quote,
  Star,
  UsersRound,
} from "lucide-react";
import { CountUpStats } from "@/components/CountUpStats";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/lib/projects";
import { services } from "@/lib/site";

const packages = [
  { name: "Basic", tagline: "Essential protection for compact homes." },
  { name: "Professional", tagline: "Complete care for homes and offices." },
  { name: "Enterprise", tagline: "Full coverage for commercial property." },
];

const strengths = [
  {
    title: "Quality Materials",
    text: "Durable selections specified for performance and lasting appeal.",
    icon: Gem,
  },
  {
    title: "Expert Team",
    text: "Experienced specialists coordinated through every trade.",
    icon: UsersRound,
  },
  {
    title: "On-Time Delivery",
    text: "Disciplined planning and transparent project milestones.",
    icon: Clock3,
  },
  {
    title: "Affordable Pricing",
    text: "Clear quotations that balance ambition and practical value.",
    icon: IndianRupee,
  },
];

const testimonials = [
  {
    quote: "They renovated our villa with excellent finish quality and dependable communication.",
    name: "R. Shrestha",
    location: "Bhainsepati, Lalitpur",
  },
  {
    quote: "Our CCTV and electrical upgrade was delivered neatly, on schedule and without disruption.",
    name: "A. Maharjan",
    location: "Patan, Lalitpur",
  },
  {
    quote: "The AMC team responds quickly and keeps our office systems running smoothly year-round.",
    name: "P. Karki",
    location: "Pulchowk, Lalitpur",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-brand-dark via-[#101827] to-brand-card pt-28">
        <Image
          src="/images/hero/home-hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-brand-dark/25" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -right-32 top-20 h-[660px] w-px rotate-[32deg] bg-brand-red/35" />
        <div className="absolute -right-8 top-2 h-[780px] w-px rotate-[32deg] bg-brand-red/15" />
        <div className="container-shell relative py-20">
          <p className="eyebrow animate-fade-up">Lalitpur, Nepal</p>
          <h1 className="animate-fade-up delay-1 font-display text-[clamp(4rem,12vw,7.5rem)] uppercase leading-[0.9] tracking-[0.045em]">
            Building Trust,
            <span className="block text-white">Constructing Future</span>
          </h1>
          <div className="animate-fade-up delay-2 my-8 h-[3px] w-28 bg-brand-red" />
          <p className="animate-fade-up delay-2 max-w-lg text-base leading-8 text-brand-muted sm:text-lg">
            Nepal&apos;s trusted partner for construction, interior and building services.
          </p>
          <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/services" className="button-primary">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="button-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-card">
        <div className="container-shell">
          <CountUpStats />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="mb-12 max-w-xl">
            <p className="eyebrow">Full-Service Delivery</p>
            <h2 className="display-title">Our Services</h2>
            <p className="mt-5 leading-8 text-brand-muted">
              From electrical to waterproofing, we handle it all with one accountable team.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
          <div className="mt-11 text-center">
            <Link href="/services" className="red-link">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-brand-border bg-brand-card/35">
        <div className="container-shell">
          <div className="mb-12">
            <p className="eyebrow">Portfolio</p>
            <h2 className="display-title">Our Work</h2>
            <p className="mt-5 text-brand-muted">
              Real projects. Real results. Built across the Kathmandu Valley.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.slug} project={project} tall={index === 0 || index === 3} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/projects" className="red-link">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-gradient-to-br from-brand-dark to-brand-card">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-l-2 border-brand-red pl-7">
            <p className="eyebrow">AMC Packages</p>
            <h2 className="display-title">Protect Your Property Year-Round</h2>
            <p className="mt-6 leading-8 text-brand-muted">
              Planned maintenance keeps electrical, plumbing, cooling and safety systems
              dependable while protecting your investment.
            </p>
            <Link href="/amc" className="red-link mt-9 inline-block">
              View AMC Packages →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((item, index) => (
              <article
                key={item.name}
                className={`border p-6 ${index === 1 ? "border-brand-red bg-brand-card" : "border-brand-border"}`}
              >
                <h3 className="font-display text-3xl tracking-wide">{item.name}</h3>
                <p className="mt-5 min-h-20 text-sm leading-7 text-brand-muted">{item.tagline}</p>
                <Link href="/amc" className="red-link">
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space grid-pattern">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="eyebrow">The Genuine Standard</p>
            <h2 className="display-title">Why Choose Us</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border-t-[3px] border-brand-red bg-brand-card p-7">
                <Icon className="mb-6 h-7 w-7 text-brand-red" />
                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-brand-border bg-brand-card/35">
        <div className="container-shell">
          <div className="mb-12">
            <p className="eyebrow">Client Voices</p>
            <h2 className="display-title">Built on Trust</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="border border-brand-border bg-brand-card p-8">
                <Quote className="mb-5 h-10 w-10 fill-brand-red text-brand-red" />
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="mb-7 leading-8 text-white">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-brand-muted">{testimonial.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-red py-16">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-shell relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="font-display text-5xl uppercase tracking-wide sm:text-6xl">
              Ready to Build Your Dream?
            </h2>
            <p className="mt-3 flex items-center justify-center gap-2 text-white/85 lg:justify-start">
              <BadgeCheck className="h-5 w-5" /> Consult with our expert team today.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-red transition hover:bg-brand-dark hover:text-white"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
