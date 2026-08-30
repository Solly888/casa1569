import Link from "next/link";
import type { Origin } from "@/lib/site-config";
import TexturePanel from "./TexturePanel";

const toneByVariant: Record<Origin["variant"], "volcanic" | "brass" | "patina" | "terracotta" | "atlantic"> = {
  volcanic: "volcanic",
  mountain: "terracotta",
  highland: "brass",
  valley: "atlantic",
  forest: "patina",
};

const patternByVariant: Record<Origin["variant"], "topography" | "waves" | "rings" | "grid"> = {
  volcanic: "topography",
  mountain: "rings",
  highland: "grid",
  valley: "waves",
  forest: "topography",
};

export default function OriginCard({ origin }: { origin: Origin }) {
  return (
    <Link
      href={`/origins#${origin.slug}`}
      className="group flex flex-col focus-visible:outline-offset-4"
    >
      <TexturePanel
        tone={toneByVariant[origin.variant]}
        pattern={patternByVariant[origin.variant]}
        caption={origin.rota}
        coordinates={origin.coordinates}
        imageHover
        className="aspect-[4/5] w-full"
      />
      <div className="pt-5">
        <p className="label-caps text-terracotta-text">{origin.status}</p>
        <h3 className="underline-fade mt-2 inline-block font-serif-display text-2xl text-ink">
          {origin.name}
        </h3>
        <p className="label-caps mt-1 text-ink-muted">
          {origin.region} · {origin.country}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          {origin.summary}
        </p>
      </div>
    </Link>
  );
}
