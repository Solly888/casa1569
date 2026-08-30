import type { Metadata } from "next";
import Section from "@/components/Section";
import Scene from "@/components/Scene";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";
import { origins, type Origin } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Origins",
  description:
    "The five origins CASA 1569 is currently exploring — São Miguel, Wuyishan, Darjeeling, the Ceylon Highlands and Wazuka.",
};

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

const sceneMoodByVariant: Record<Origin["variant"], "atlantic" | "volcanic" | "mineral" | "human"> = {
  volcanic: "volcanic",
  mountain: "mineral",
  highland: "mineral",
  valley: "atlantic",
  forest: "volcanic",
};

export default function OriginsPage() {
  return (
    <>
      <section className="surface-dark relative flex min-h-[60vh] items-end overflow-hidden bg-atlantic-ink">
        <Scene mood="volcanic" overlay className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 w-full pb-16 pt-32 md:pb-20">
          <Section>
            <p className="label-caps text-ivory-inverse-muted">ROTA</p>
            <h1 className="mt-6 font-serif-display text-5xl leading-tight text-casa-ivory sm:text-6xl md:text-7xl">
              Origins
            </h1>
            <p className="mt-6 max-w-lg text-base text-ivory-inverse-muted sm:text-lg">
              Five geographies CASA 1569 is currently developing
              relationships with — mapped, numbered and documented as we
              go.
            </p>
          </Section>
        </div>
      </section>

      <Section className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-serif-display text-2xl italic leading-snug text-ink sm:text-3xl">
            Not a catalogue. A working map of where CASA 1569 is looking,
            and why.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-secondary">
            Terroir is not a marketing word for us — it is the whole
            argument. Soil, altitude, cloud cover and a producer&rsquo;s hand
            change what ends up in the cup more than any processing
            technique. Each route below is a place first, a tea second.
          </p>
          <p className="label-caps mx-auto mt-6 max-w-xl text-ink-muted">
            ROTA — the numbered system under which each origin is mapped,
            documented and, in time, sold.
          </p>
        </Reveal>
      </Section>

      <Section className="pb-28 md:pb-36">
        <div className="flex flex-col divide-y divide-atlantic-ink/15">
          {origins.map((origin, index) => (
            <Reveal key={origin.slug} delay={Math.min(index * 40, 120)}>
              <div
                id={origin.slug}
                className="grid scroll-mt-28 gap-8 py-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-20"
              >
                {index === 0 ? (
                  <Scene
                    mood={sceneMoodByVariant[origin.variant]}
                    caption={origin.rota}
                    coordinates={origin.coordinates}
                    className="aspect-[4/3] w-full md:aspect-[5/4]"
                  />
                ) : (
                  <TexturePanel
                    tone={toneByVariant[origin.variant]}
                    pattern={patternByVariant[origin.variant]}
                    caption={origin.rota}
                    coordinates={origin.coordinates}
                    className="aspect-[4/3] w-full md:aspect-[5/4]"
                  />
                )}
                <div className="flex flex-col justify-center">
                  <p className="label-caps text-terracotta-text">
                    {origin.status}
                  </p>
                  <h2 className="mt-4 font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
                    {origin.name}
                  </h2>
                  <p className="label-caps mt-2 text-ink-muted">
                    {origin.region} · {origin.country}
                  </p>
                  <p className="mt-6 max-w-lg font-serif-display text-xl italic leading-snug text-ink-secondary">
                    {origin.summary}
                  </p>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-secondary">
                    {origin.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-serif-display text-3xl leading-tight text-casa-ivory sm:text-4xl">
            Working on a sixth route?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ivory-inverse-muted">
            If you grow, produce or export tea you believe belongs in this
            collection, we would like to hear from you.
          </p>
          <a
            href="/partners"
            className="label-caps underline-fade mt-8 inline-block text-casa-ivory"
          >
            Begin a conversation
          </a>
        </Reveal>
      </Section>
    </>
  );
}
