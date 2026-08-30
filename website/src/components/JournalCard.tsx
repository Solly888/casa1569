import Link from "next/link";
import type { JournalEntry } from "@/lib/site-config";

const categoryTone: Record<string, string> = {
  Origin: "bg-patina/12 text-patina-text",
  Places: "bg-azulejo-blue/12 text-azulejo-blue",
  Tea: "bg-terracotta/12 text-terracotta-text",
  Objects: "bg-aged-brass/14 text-brass-text",
  People: "bg-terracotta/12 text-terracotta-text",
  Notes: "bg-atlantic-ink/8 text-ink-muted",
};

export default function JournalCard({
  entry,
  titleAs: Title = "h3",
}: {
  entry: JournalEntry;
  /** Set to "h2" when no other h2 precedes this card in the page outline (e.g. /journal index). */
  titleAs?: "h2" | "h3";
}) {
  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="group flex flex-col border-t border-atlantic-ink/15 py-8 first:border-t-0 focus-visible:outline-offset-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="label-caps text-ink-muted">{entry.chapter}</p>
        {entry.categories.map((category) => (
          <span
            key={category}
            className={`label-caps rounded-full px-2.5 py-1 ${categoryTone[category] ?? "bg-atlantic-ink/8 text-ink-muted"}`}
          >
            {category}
          </span>
        ))}
      </div>
      <Title className="mt-3 font-serif-display text-3xl transition-colors duration-150 group-hover:text-terracotta-text md:text-4xl">
        {entry.title}
      </Title>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-secondary">
        {entry.dek}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="underline-fade label-caps text-ink">
          Read the story
        </span>
        <span className="label-caps text-ink-muted">{entry.readTime}</span>
      </div>
    </Link>
  );
}
