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
    <article className="group flex flex-col">
      <TexturePanel
        tone={toneByVariant[origin.variant]}
        pattern={patternByVariant[origin.variant]}
        caption={origin.rota}
        coordinates={origin.coordinates}
        className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />
      <div className="pt-5">
        <p className="label-caps text-terracotta">{origin.status}</p>
        <h3 className="mt-2 font-serif-display text-2xl text-atlantic-ink">
          {origin.name}
        </h3>
        <p className="label-caps mt-1 text-atlantic-ink/55">
          {origin.region} · {origin.country}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-atlantic-ink/75">
          {origin.summary}
        </p>
      </div>
    </article>
  );
}
