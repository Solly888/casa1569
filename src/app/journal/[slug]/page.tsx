import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";
import { journalEntries } from "@/lib/site-config";

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.dek,
  };
}

export default async function JournalEntryPage({
  params,
}: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const index = journalEntries.findIndex((item) => item.slug === slug);
  const entry = journalEntries[index];
  if (!entry) notFound();

  const next = journalEntries[(index + 1) % journalEntries.length];

  return (
    <>
      <section className="relative flex min-h-[45vh] items-end overflow-hidden">
        <TexturePanel
          tone="atlantic"
          pattern="waves"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-32 md:pb-20">
          <Section>
            <Reveal>
              <p className="label-caps text-casa-ivory/60">{entry.chapter}</p>
              <h1 className="mt-6 max-w-2xl font-serif-display text-4xl leading-tight text-casa-ivory sm:text-5xl md:text-6xl">
                {entry.title}
              </h1>
              <p className="mt-5 max-w-lg text-base text-casa-ivory/80">
                {entry.dek}
              </p>
            </Reveal>
          </Section>
        </div>
      </section>

      <Section className="py-20 md:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-6">
          {entry.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-lg leading-relaxed text-atlantic-ink/80"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-16 flex max-w-2xl flex-col gap-6 border-t border-atlantic-ink/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/journal"
            className="label-caps underline-fade text-atlantic-ink"
          >
            Back to the journal
          </Link>
          <Link
            href={`/journal/${next.slug}`}
            className="label-caps underline-fade text-atlantic-ink"
          >
            Next — {next.title}
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
