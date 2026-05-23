"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { services } from "@/lib/site";

interface ContactFormProps {
  initialSubject?: string;
}

export function ContactForm({ initialSubject }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Contact inquiry submitted:", Object.fromEntries(new FormData(event.currentTarget)));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[470px] flex-col items-center justify-center border border-brand-border bg-brand-card p-8 text-center">
        <CheckCircle2 className="mb-6 h-12 w-12 text-brand-red" />
        <h3 className="font-display text-5xl tracking-wide">Message Sent</h3>
        <p className="mt-4 max-w-sm leading-7 text-brand-muted">
          Thank you for reaching out. Our team will contact you shortly with the next steps.
        </p>
        <button type="button" className="red-link mt-9" onClick={() => setSent(false)}>
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-brand-border bg-brand-card p-6 sm:p-9">
      <p className="eyebrow">Free Quote</p>
      <h2 className="mb-7 font-display text-4xl tracking-wide">Tell Us Your Project</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="input-field" name="name" placeholder="Full name" required />
        <input className="input-field" name="email" type="email" placeholder="Email address" required />
        <input className="input-field" name="phone" type="tel" placeholder="Phone number" required />
        <select
          className="input-field"
          name="service"
          defaultValue={initialSubject === "amc" ? "Annual Maintenance Contract" : ""}
          required
        >
          <option value="" disabled>
            Select service
          </option>
          <option>Annual Maintenance Contract</option>
          {services.map((service) => (
            <option key={service.name}>{service.name}</option>
          ))}
        </select>
      </div>
      <textarea className="input-field mt-4 min-h-36" name="message" placeholder="Tell us about your needs" required />
      <button type="submit" className="button-primary mt-5 w-full sm:w-auto">
        Send Inquiry <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
