import type { Metadata } from "next";
import Section from "@/components/Section";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";
import JournalCard from "@/components/JournalCard";
import { journalEntries } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Cadernos da Rota — notes on origins, history and the routes tea has travelled, from CASA 1569.",
};

export default function JournalPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <TexturePanel
          tone="terracotta"
          pattern="rings"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-32 md:pb-20">
          <Section>
            <Reveal>
              <p className="label-caps text-casa-ivory/70">Cadernos da Rota</p>
              <h1 className="mt-6 font-serif-display text-5xl leading-tight text-casa-ivory sm:text-6xl md:text-7xl">
                Journal
              </h1>
              <p className="mt-6 max-w-lg text-base text-casa-ivory/85 sm:text-lg">
                Notes on origins, history and the routes tea has travelled —
                written as the house is built, not after.
              </p>
            </Reveal>
          </Section>
        </div>
      </section>

      <Section className="py-20 md:py-28">
        <Reveal>
          {journalEntries.map((entry, index) => (
            <div key={entry.slug} style={{ animationDelay: `${index * 60}ms` }}>
              <JournalCard entry={entry} />
            </div>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
