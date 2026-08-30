"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/site-config";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-atlantic-ink/12 bg-casa-ivory/92 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-serif-display text-xl tracking-[0.08em] text-ink md:text-2xl"
        >
          CASA <span className="text-terracotta-text">1569</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`label-caps relative flex items-center gap-2 pb-1 ${
                  active
                    ? "text-ink after:absolute after:inset-x-0 after:-bottom-[3px] after:h-px after:bg-terracotta-text"
                    : "underline-fade text-ink-muted hover:text-ink"
                }`}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rounded-full bg-terracotta-text"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/partners"
            className="press label-caps inline-flex min-h-11 items-center border border-atlantic-ink px-5 py-2.5 text-ink transition-colors hover:bg-atlantic-ink hover:text-casa-ivory"
          >
            Enquire
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          className="press flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-atlantic-ink transition-transform duration-200 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-atlantic-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-atlantic-ink transition-transform duration-200 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        ref={panelRef}
        className={`grid overflow-hidden border-t border-atlantic-ink/12 bg-casa-ivory transition-[grid-template-rows] duration-200 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        inert={!open}
      >
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto overflow-x-hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`label-caps flex min-h-11 items-center gap-2 py-3 ${
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 rounded-full bg-terracotta-text"
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/partners"
              onClick={closeMenu}
              className="press label-caps mt-3 inline-flex min-h-11 w-fit items-center border border-atlantic-ink px-5 py-2.5 text-ink"
            >
              Enquire
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
