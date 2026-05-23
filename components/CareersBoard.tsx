"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, BriefcaseBusiness, MapPin, X } from "lucide-react";

interface Job {
  title: string;
  type: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: "Site Engineer",
    type: "Full-time",
    location: "Lalitpur",
    description: "Coordinate quality execution, schedules and site safety.",
  },
  {
    title: "Electrical Technician",
    type: "Full-time",
    location: "Kathmandu Valley",
    description: "Deliver dependable installation and fault resolution.",
  },
  {
    title: "Interior Designer",
    type: "Contract",
    location: "Lalitpur",
    description: "Shape practical luxury interiors and client presentations.",
  },
  {
    title: "Plumbing Supervisor",
    type: "Full-time",
    location: "Lalitpur",
    description: "Lead plumbing works from planning through handover.",
  },
  {
    title: "Customer Relations Executive",
    type: "Full-time",
    location: "Bhainsepati",
    description: "Support inquiries, AMC clients and project communication.",
  },
];

export function CareersBoard() {
  const [selected, setSelected] = useState<Job | null>(null);
  const [success, setSuccess] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    console.log("Career application submitted:", values);
    setSuccess(true);
  }

  function close() {
    setSelected(null);
    setSuccess(false);
  }

  return (
    <>
      <div className="space-y-4">
        {jobs.map((job) => (
          <article
            key={job.title}
            className="surface-card flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{job.title}</h3>
              <div className="mt-3 flex flex-wrap gap-5 text-sm text-brand-muted">
                <span className="flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-brand-red" />
                  {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-red" />
                  {job.location}
                </span>
              </div>
              <p className="mt-4 text-sm text-brand-muted">{job.description}</p>
            </div>
            <button className="button-secondary shrink-0" onClick={() => setSelected(job)}>
              Apply Now <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-brand-dark/90 px-5 py-10 backdrop-blur">
          <div className="mx-auto max-w-xl border border-brand-border bg-brand-card p-7 sm:p-9">
            <button
              type="button"
              aria-label="Close application"
              onClick={close}
              className="ml-auto block text-brand-muted hover:text-brand-red"
            >
              <X />
            </button>
            {success ? (
              <div className="py-16 text-center">
                <p className="eyebrow">Application Received</p>
                <h3 className="font-display text-5xl tracking-wide">Thank You</h3>
                <p className="mx-auto mt-5 max-w-sm text-brand-muted">
                  Our team will review your application for {selected.title} and contact you.
                </p>
                <button className="button-primary mt-8" onClick={close}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Join the Team</p>
                <h2 className="font-display text-4xl tracking-wide">{selected.title}</h2>
                <form onSubmit={submit} className="mt-8 space-y-4">
                  <input className="input-field" name="name" placeholder="Full name" required />
                  <input className="input-field" name="email" type="email" placeholder="Email address" required />
                  <input className="input-field" name="phone" type="tel" placeholder="Phone number" required />
                  <select className="input-field" name="position" defaultValue={selected.title}>
                    {jobs.map((job) => (
                      <option key={job.title}>{job.title}</option>
                    ))}
                  </select>
                  <textarea className="input-field min-h-32" name="coverLetter" placeholder="Cover letter" required />
                  <label className="block border border-dashed border-brand-border p-4 text-sm text-brand-muted">
                    Upload CV
                    <input className="mt-3 block w-full text-sm" name="cv" type="file" accept=".pdf,.doc,.docx" required />
                  </label>
                  <button className="button-primary w-full" type="submit">
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
