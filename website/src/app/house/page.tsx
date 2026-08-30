import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The House",
  description:
    "CASA 1569 is a modern Portuguese house of origins — a curator, not a themed tea shop. Read about our essence, positioning and brand architecture.",
};

const associations = [
  "Cultured",
  "Quiet",
  "Precise",
  "Tactile",
  "Architectural",
  "Portuguese",
  "Global",
  "Origin-led",
  "Contemporary",
  "Timeless",
];

const architecture = [
  {
    name: "CASA",
    role: "Master brand",
    body: "House, hospitality and gathering — the idea CASA 1569 is built around, and large enough to outgrow tea if the origins ever ask us to.",
  },
  {
    name: "CHÁ",
    role: "Founding category",
    body: "The category CASA 1569 begins with. Not a limit, a starting point.",
  },
  {
    name: "ROTA",
    role: "Provenance system",
    body: "The way we number, map and document every origin we work with — ROTA 001, ROTA 002, and on.",
  },
  {
    name: "CADERNOS DA ROTA",
    role: "Editorial layer",
    body: "The journal where the routes, the history and the producers are written down.",
  },
];

export default function HousePage() {
  return (
    <>
      <section className="surface-dark relative flex min-h-[60vh] items-end overflow-hidden bg-atlantic-ink">
        <TexturePanel
          tone="ink"
          pattern="grid"
          overlay
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-32 md:pb-20">
          <Section>
            <p className="label-caps text-ivory-inverse-muted">A House of Origins</p>
            <h1 className="mt-6 font-serif-display text-5xl leading-tight text-casa-ivory sm:text-6xl md:text-7xl">
              The House
            </h1>
          </Section>
        </div>
      </section>

      <Section className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-serif-display text-3xl italic leading-snug text-atlantic-ink sm:text-4xl">
            CASA 1569 is a modern Portuguese house curating exceptional
            products shaped by remarkable places.
          </p>
          <p className="mt-6 label-caps text-terracotta-text">
            Origin. Ritual. Discovery.
          </p>
        </Reveal>
      </Section>

      <Section className="bg-casa-ivory-dim py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="label-caps text-terracotta-text">Positioning</p>
            <h2 className="mt-4 font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
              Closer to a design studio than a tea shop.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-secondary">
              CASA 1569 should feel closer to a contemporary European luxury
              house, an architectural studio or an independent editorial
              publication than to a conventional tea retailer. The category
              is tea. The discipline is provenance.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <p className="label-caps text-terracotta-text">Associations</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {associations.map((word) => (
                <li
                  key={word}
                  className="border-b border-atlantic-ink/15 pb-3 font-serif-display text-lg text-ink"
                >
                  {word}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="py-24 md:py-32">
        <Reveal className="max-w-xl">
          <p className="label-caps text-terracotta-text">Brand architecture</p>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            Four words, one house.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {architecture.map((item, index) => (
            <Reveal key={item.name} delay={Math.min(index * 50, 150)}>
              <p className="font-serif-display text-3xl text-ink">
                {item.name}
              </p>
              <p className="label-caps mt-2 text-ink-muted">
                {item.role}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-secondary">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark className="py-24 md:py-32">
        <Reveal className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-16">
          <div>
            <h2 className="max-w-lg font-serif-display text-3xl leading-tight text-casa-ivory sm:text-4xl">
              Built to stay close to origin.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-inverse-muted">
              CASA 1569 is a young house, deliberately small. We would rather
              spend our first years qualifying producers, sampling honestly
              and getting five origins right than publish a large catalogue
              we cannot stand behind.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ivory-inverse-muted">
              Nothing here is offered for sale yet. What is here is real:
              the relationships we are building, the research behind the
              name, and the standard we intend to hold.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/origins"
              className="label-caps underline-fade text-casa-ivory"
            >
              See the origins we are exploring
            </Link>
            <Link
              href="/1569"
              className="label-caps underline-fade text-casa-ivory"
            >
              Read why we are called 1569
            </Link>
            <Link
              href="/partners"
              className="label-caps underline-fade text-casa-ivory"
            >
              Begin a conversation
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
