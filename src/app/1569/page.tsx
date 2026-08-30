import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "1569",
  description:
    "The history behind the name CASA 1569 — from Gaspar da Cruz's 1569 account of Chinese chá to tea's later roots in the Azores.",
};

const chapters = [
  {
    roman: "I",
    label: "The Word",
    title: "Chá",
    tone: "atlantic" as const,
    pattern: "waves" as const,
    body: [
      "Almost every language's word for tea descends from one of two roots. Chá comes from Cantonese and Mandarin, carried overland and by early maritime contact. Tea, thé and Tee descend from Amoy Min Chinese, carried later by Dutch and British trading routes along the coast.",
      "Portuguese inherited chá — a linguistic fingerprint of an early, direct route to southern China, distinct from the sea route most of Western Europe would use.",
    ],
  },
  {
    roman: "II",
    label: "The Account",
    title: "1569",
    tone: "brass" as const,
    pattern: "grid" as const,
    body: [
      "In 1569, the Portuguese Dominican friar Gaspar da Cruz published his Tractado in Évora — one of the earliest Portuguese eyewitness accounts of China, based on his own travels.",
      "Among the customs he documented was the offering of a warm drink called chá, extended as a gesture of hospitality. It is a brief, precise observation, made by a man recording what he saw rather than founding anything.",
      "For CASA 1569, 1569 is a point of departure, not a birthday.",
    ],
  },
  {
    roman: "III",
    label: "The Port",
    title: "Macau",
    tone: "ink" as const,
    pattern: "topography" as const,
    body: [
      "Macau became an important node of Portuguese-Asian exchange from the mid-sixteenth century, one of the few points of direct, sustained contact between Europe and China at the time.",
      "It would be inaccurate to say Portuguese merchants alone, or even primarily, introduced tea commercially to Europe. That role fell largely to Dutch and later British trading companies, whose volumes and networks were commercially decisive.",
      "What Macau offered was something narrower and, we think, still worth telling: an early window, and an early word.",
    ],
  },
  {
    roman: "IV",
    label: "The Court",
    title: "Bragança",
    tone: "terracotta" as const,
    pattern: "rings" as const,
    body: [
      "Catherine of Braganza married Charles II of England in 1662. Tea was already known in England before she arrived at court.",
      "What Catherine did was help make an existing habit fashionable — she became strongly associated with tea drinking at the English court, and her patronage is often credited with tea's rise in aristocratic favour.",
      "We do not claim she introduced tea to England. We note that a Portuguese princess helped decide what a nation would drink next.",
    ],
  },
  {
    roman: "V",
    label: "The Garden",
    title: "Açores",
    tone: "patina" as const,
    pattern: "topography" as const,
    body: [
      "Centuries later, tea took physical root in Portuguese territory itself — planted on São Miguel, in the Azores, where volcanic soil and Atlantic humidity proved unexpectedly suited to Camellia sinensis.",
      "It closes a route that began with an observation, not a plantation: China, an early Portuguese encounter, a word — chá — carried home, and eventually, a Portuguese island growing the plant itself.",
    ],
  },
];

export default function Page1569() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <TexturePanel
          tone="ink"
          pattern="grid"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-32 md:pb-20">
          <Section>
            <Reveal>
              <p className="label-caps text-casa-ivory/60">
                The story behind the name
              </p>
              <h1 className="mt-6 font-serif-display text-6xl leading-tight text-casa-ivory sm:text-7xl md:text-8xl">
                1569
              </h1>
              <p className="mt-6 max-w-lg text-base text-casa-ivory/80 sm:text-lg">
                Not a founding date. A point of departure.
              </p>
            </Reveal>
          </Section>
        </div>
      </section>

      <div className="flex flex-col">
        {chapters.map((chapter, index) => (
          <Section
            key={chapter.roman}
            className={`py-20 md:py-28 ${index % 2 === 1 ? "bg-casa-ivory-dim" : ""}`}
          >
            <Reveal className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-16">
              <TexturePanel
                tone={chapter.tone}
                pattern={chapter.pattern}
                caption={`Chapter ${chapter.roman}`}
                className="aspect-[4/3] w-full md:aspect-square"
              />
              <div>
                <p className="label-caps text-terracotta">
                  {chapter.roman} — {chapter.label}
                </p>
                <h2 className="mt-3 font-serif-display text-4xl leading-tight text-atlantic-ink sm:text-5xl">
                  {chapter.title}
                </h2>
                <div className="mt-6 flex max-w-xl flex-col gap-4">
                  {chapter.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="text-base leading-relaxed text-atlantic-ink/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </Section>
        ))}
      </div>

      <Section dark className="py-28 text-center md:py-36">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-serif-display text-4xl leading-tight text-casa-ivory sm:text-5xl">
            A modern point of departure.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-casa-ivory/75">
            The history explains why we chose the name. What we do with it
            now is a question for São Miguel, and for the origins that
            follow.
          </p>
          <Link
            href="/origins"
            className="label-caps underline-fade mt-8 inline-block text-casa-ivory"
          >
            See the origins we are exploring
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
