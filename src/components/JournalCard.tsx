import Link from "next/link";
import type { JournalEntry } from "@/lib/site-config";

export default function JournalCard({ entry }: { entry: JournalEntry }) {
  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="group flex flex-col border-t border-atlantic-ink/15 py-8 first:border-t-0"
    >
      <p className="label-caps text-atlantic-ink/45">{entry.chapter}</p>
      <h3 className="mt-3 font-serif-display text-3xl transition-colors group-hover:text-terracotta md:text-4xl">
        {entry.title}
      </h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-atlantic-ink/70">
        {entry.dek}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="underline-fade label-caps text-atlantic-ink">
          Read the story
        </span>
        <span className="label-caps text-atlantic-ink/40">
          {entry.readTime}
        </span>
      </div>
    </Link>
  );
}
