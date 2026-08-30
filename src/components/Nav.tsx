"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-config";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-atlantic-ink/12 bg-casa-ivory/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-serif-display text-xl tracking-[0.08em] text-atlantic-ink md:text-2xl"
        >
          CASA <span className="text-terracotta">1569</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`label-caps underline-fade ${
                  active ? "text-atlantic-ink" : "text-atlantic-ink/65"
                } hover:text-atlantic-ink`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/partners"
            className="label-caps inline-flex items-center border border-atlantic-ink px-5 py-2.5 text-atlantic-ink transition-colors hover:bg-atlantic-ink hover:text-casa-ivory"
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-atlantic-ink transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-atlantic-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-atlantic-ink transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-t border-atlantic-ink/12 bg-casa-ivory transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="label-caps py-3 text-atlantic-ink/80 hover:text-atlantic-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partners"
              onClick={() => setOpen(false)}
              className="label-caps mt-3 inline-flex w-fit items-center border border-atlantic-ink px-5 py-2.5 text-atlantic-ink"
            >
              Enquire
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
