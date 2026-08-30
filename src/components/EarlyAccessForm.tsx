"use client";

import { useState, type FormEvent } from "react";

export default function EarlyAccessForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="label-caps text-aged-brass">
        Thank you — {email} is on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4 sm:flex-row sm:items-end sm:gap-3"
    >
      <div className="flex-1">
        <label htmlFor="early-access-email" className="sr-only">
          Email address
        </label>
        <input
          id="early-access-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          className="w-full border-0 border-b border-casa-ivory/30 bg-transparent px-0 py-3 text-casa-ivory placeholder:text-casa-ivory/35 focus:border-aged-brass focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="label-caps inline-flex shrink-0 items-center justify-center border border-casa-ivory px-6 py-3 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
      >
        Join the House
      </button>
    </form>
  );
}
