import type { Metadata } from "next";
import Section from "@/components/Section";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";
import JournalCard from "@/components/JournalCard";
import { journalCategories, journalEntries } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Cadernos da Rota — notes on origins, history and the routes tea has travelled, from CASA 1569.",
};

export default function JournalPage() {
  return (
    <>
      <section className="surface-dark relative flex min-h-[50vh] items-end overflow-hidden">
        <TexturePanel
          tone="terracotta"
          pattern="rings"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-32 md:pb-20">
          <Section>
            <Reveal>
              <p className="label-caps text-ivory-inverse-muted">
                Cadernos da Rota
              </p>
              <h1 className="mt-6 font-serif-display text-5xl leading-tight text-casa-ivory sm:text-6xl md:text-7xl">
                Journal
              </h1>
              <p className="mt-6 max-w-lg text-base text-ivory-inverse-muted sm:text-lg">
                Notes on origins, history and the routes tea has travelled —
                written as the house is built, not after.
              </p>
            </Reveal>
          </Section>
        </div>
      </section>

      <Section className="py-16 md:py-20">
        <Reveal>
          <p className="label-caps text-ink-muted">Categories</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Journal categories">
            {journalCategories.map((category) => (
              <li
                key={category}
                className="label-caps rounded-full border border-atlantic-ink/15 px-3 py-1.5 text-ink-muted"
              >
                {category}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="py-8 md:py-12">
        {journalEntries.map((entry, index) => (
          <Reveal key={entry.slug} delay={Math.min(index * 50, 150)}>
            <JournalCard entry={entry} />
          </Reveal>
        ))}
      </Section>

      <Section className="pb-28 md:pb-36">
        <Reveal className="border-t border-atlantic-ink/15 pt-12 text-center md:pt-16">
          <p className="label-caps text-ink-muted">In progress</p>
          <p className="mx-auto mt-4 max-w-md font-serif-display text-xl italic leading-snug text-ink-secondary">
            More notes on Wuyishan, Darjeeling, Ceylon and Wazuka are being
            written as those relationships develop.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
