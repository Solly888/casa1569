"use client";

import { useRef, useState, type FormEvent } from "react";
import { contactReasons, siteConfig } from "@/lib/site-config";

const fieldClasses =
  "w-full border-0 border-b border-casa-ivory/30 bg-transparent px-0 py-3 text-casa-ivory placeholder:text-casa-ivory/40 focus:border-aged-brass focus:outline-none focus:ring-0 aria-invalid:border-terracotta-inverse";

type FieldName = "name" | "company" | "country" | "email";

const requiredFields: { name: FieldName; label: string }[] = [
  { name: "name", label: "Name" },
  { name: "company", label: "Company / estate" },
  { name: "country", label: "Country" },
  { name: "email", label: "Email" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(form: HTMLFormElement) {
    const nextErrors: Partial<Record<FieldName, string>> = {};
    const data = new FormData(form);

    for (const field of requiredFields) {
      const value = String(data.get(field.name) ?? "").trim();
      if (!value) {
        nextErrors[field.name] = `${field.label} is required.`;
      }
    }

    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Honeypot — real visitors never fill this in.
    const honeypot = String(new FormData(form).get("website_confirm") ?? "");
    if (honeypot) {
      setSent(true);
      return;
    }

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      form
        .querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const country = String(data.get("country") ?? "");
    const email = String(data.get("email") ?? "");
    const website = String(data.get("website") ?? "");
    const reason = String(data.get("reason") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Partnership enquiry — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company / estate: ${company}`,
      `Country: ${country}`,
      `Email: ${email}`,
      website ? `Website: ${website}` : null,
      reason ? `Enquiry type: ${reason}` : null,
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
      <div className="border border-casa-ivory/25 px-8 py-12 text-center" role="status">
        <p className="label-caps text-aged-brass">Enquiry prepared</p>
        <p className="mt-4 font-serif-display text-2xl">
          Your email client should now be open.
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ivory-inverse-muted">
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
          className="press label-caps underline-fade mt-8 min-h-11 text-ivory-inverse-muted hover:text-casa-ivory"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-8 md:grid-cols-2">
        {/* Honeypot field — hidden from sighted users and screen readers, skipped in tab order. */}
        <div className="relative h-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website_confirm">Leave this field empty</label>
          <input
            id="website_confirm"
            name="website_confirm"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px]"
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="name" className="label-caps text-ivory-inverse-faint">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClasses}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-2 text-xs text-terracotta-inverse">
              {errors.name}
            </p>
          )}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="company" className="label-caps text-ivory-inverse-faint">
            Company / estate <span aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            aria-required="true"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={fieldClasses}
          />
          {errors.company && (
            <p id="company-error" role="alert" className="mt-2 text-xs text-terracotta-inverse">
              {errors.company}
            </p>
          )}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="country" className="label-caps text-ivory-inverse-faint">
            Country <span aria-hidden="true">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            aria-required="true"
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? "country-error" : undefined}
            className={fieldClasses}
          />
          {errors.country && (
            <p id="country-error" role="alert" className="mt-2 text-xs text-terracotta-inverse">
              {errors.country}
            </p>
          )}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="email" className="label-caps text-ivory-inverse-faint">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-2 text-xs text-terracotta-inverse">
              {errors.email}
            </p>
          )}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="website" className="label-caps text-ivory-inverse-faint">
            Website <span className="normal-case tracking-normal text-ivory-inverse-faint/70">(optional)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            inputMode="url"
            className={fieldClasses}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="reason" className="label-caps text-ivory-inverse-faint">
            This best describes us{" "}
            <span className="normal-case tracking-normal text-ivory-inverse-faint/70">(optional)</span>
          </label>
          <select
            id="reason"
            name="reason"
            defaultValue=""
            className={`${fieldClasses} [color-scheme:dark]`}
          >
            <option value="" className="text-atlantic-ink">
              Select one
            </option>
            {contactReasons.map((reason) => (
              <option key={reason} value={reason} className="text-atlantic-ink">
                {reason}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="label-caps text-ivory-inverse-faint">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            autoComplete="off"
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-6 md:col-span-2">
          <button
            type="submit"
            className="press label-caps inline-flex min-h-11 items-center border border-casa-ivory px-7 py-3.5 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
          >
            Begin a conversation
          </button>
        </div>
      </form>

      <p className="mt-8 text-sm text-ivory-inverse-muted">
        Prefer email? Write directly to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="underline-fade text-casa-ivory">
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </div>
  );
}
