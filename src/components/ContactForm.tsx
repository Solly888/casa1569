"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const fieldClasses =
  "w-full border-0 border-b border-casa-ivory/30 bg-transparent px-0 py-3 text-casa-ivory placeholder:text-casa-ivory/40 focus:border-aged-brass focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const country = String(form.get("country") ?? "");
    const email = String(form.get("email") ?? "");
    const website = String(form.get("website") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `Partnership enquiry — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company / estate: ${company}`,
      `Country: ${country}`,
      `Email: ${email}`,
      website ? `Website: ${website}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.location.href = mailto;
  }

  if (sent) {
    return (
      <div className="border border-casa-ivory/25 px-8 py-12 text-center">
        <p className="label-caps text-aged-brass">Enquiry prepared</p>
        <p className="mt-4 font-serif-display text-2xl">
          Your email client should now be open.
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-casa-ivory/70">
          If nothing happened, write to us directly at{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="underline-fade text-casa-ivory"
          >
            {siteConfig.contactEmail}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="label-caps underline-fade mt-8 text-casa-ivory/60 hover:text-casa-ivory"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-2">
      <div className="md:col-span-1">
        <label htmlFor="name" className="label-caps text-casa-ivory/50">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={fieldClasses}
        />
      </div>
      <div className="md:col-span-1">
        <label htmlFor="company" className="label-caps text-casa-ivory/50">
          Company / estate
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className={fieldClasses}
        />
      </div>
      <div className="md:col-span-1">
        <label htmlFor="country" className="label-caps text-casa-ivory/50">
          Country
        </label>
        <input
          id="country"
          name="country"
          type="text"
          required
          className={fieldClasses}
        />
      </div>
      <div className="md:col-span-1">
        <label htmlFor="email" className="label-caps text-casa-ivory/50">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClasses}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="website" className="label-caps text-casa-ivory/50">
          Website{" "}
          <span className="normal-case tracking-normal text-casa-ivory/30">
            (optional)
          </span>
        </label>
        <input
          id="website"
          name="website"
          type="text"
          className={fieldClasses}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className="label-caps text-casa-ivory/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClasses} resize-none`}
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="label-caps inline-flex items-center border border-casa-ivory px-7 py-3.5 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
        >
          Speak with the House
        </button>
      </div>
    </form>
  );
}
