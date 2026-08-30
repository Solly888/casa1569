import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-casa-ivory/15 bg-atlantic-ink text-casa-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif-display text-2xl tracking-[0.08em]">
              CASA 1569
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-casa-ivory/70">
              A modern Portuguese house of origins, beginning with exceptional
              tea traced to remarkable places.
            </p>
            <p className="label-caps mt-8 text-casa-ivory/45">
              Every origin has a story. Every story has a route.
            </p>
          </div>

          <div>
            <p className="label-caps text-casa-ivory/45">Navigate</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="underline-fade text-sm text-casa-ivory/80 hover:text-casa-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps text-casa-ivory/45">The House</p>
            <ul className="mt-4 space-y-3 text-sm text-casa-ivory/80">
              <li>{siteConfig.location}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="underline-fade hover:text-casa-ivory"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-casa-ivory/15 pt-8 text-xs text-casa-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CASA 1569. Pre-launch.</p>
          <p>CASA · CHÁ · ROTA · CADERNOS DA ROTA</p>
        </div>
      </div>
    </footer>
  );
}
