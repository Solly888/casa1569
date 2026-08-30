import Link from "next/link";
import Section from "@/components/Section";
import Scene from "@/components/Scene";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";
import OriginCard from "@/components/OriginCard";
import PrincipleItem from "@/components/PrincipleItem";
import JournalCard from "@/components/JournalCard";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { origins, principles, journalEntries } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="surface-dark relative flex min-h-[92vh] items-end overflow-hidden bg-atlantic-ink">
        <Scene
          mood="atlantic"
          overlay
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-40 md:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="label-caps text-ivory-inverse-muted">
                CASA 1569
              </p>
              <h1 className="mt-5 max-w-2xl font-serif-display text-4xl leading-[1.08] text-casa-ivory sm:text-5xl md:text-6xl lg:text-7xl">
                Exceptional tea from remarkable places.
              </h1>
              <p className="mt-6 max-w-md text-base text-ivory-inverse-muted sm:text-lg">
                An Australian tea house shaped by Portuguese heritage,
                Atlantic provenance and a belief that origin matters.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/origins"
                  className="press label-caps inline-flex min-h-11 items-center border border-casa-ivory px-7 py-3.5 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
                >
                  Discover our origins
                </Link>
                <Link
                  href="/house"
                  className="label-caps underline-fade inline-flex min-h-11 items-center text-casa-ivory/90 hover:text-casa-ivory"
                >
                  Our story
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — Brand idea */}
      <Section className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-serif-display text-3xl italic leading-tight text-ink sm:text-4xl md:text-5xl">
            Every origin has a story.
            <br />
            Every story has a route.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-secondary">
            CASA 1569 is a modern Portuguese house of provenance. We seek
            exceptional tea from remarkable places and trace it back to the
            landscape, producer and harvest that shaped it.
          </p>
          <p className="label-caps mt-8 text-terracotta-text">
            Tea is where the house begins.
          </p>
        </Reveal>
      </Section>

      {/* 3 — Why 1569 */}
      <Section id="why-1569" className="py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal>
            <p className="font-serif-display text-[7rem] leading-none text-atlantic-ink/10 sm:text-[9rem] md:text-[11rem]">
              1569
            </p>
          </Reveal>
          <Reveal delay={60} className="md:pt-8">
            <p className="label-caps text-terracotta-text">
              A point of departure
            </p>
            <h2 className="mt-4 font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
              Why 1569?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary">
              In 1569, Portuguese friar Gaspar da Cruz published one of the
              earliest Portuguese eyewitness accounts of Chinese tea culture.
              Among the rituals he described was the offering of a warm drink
              called chá.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
              CASA 1569 takes its name from that encounter — not as a claim
              to age, but as a point of departure.
            </p>
            <Link
              href="/1569"
              className="label-caps underline-fade mt-8 inline-block text-ink"
            >
              Read the story
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* 4 — CHÁ */}
      <Section dark className="py-28 md:py-40">
        <Reveal className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
          <p className="font-serif-display text-7xl italic leading-none text-casa-ivory sm:text-8xl md:text-9xl">
            CHÁ
          </p>
          <div>
            <p className="label-caps text-ivory-inverse-faint">
              A word that travelled
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ivory-inverse-muted">
              Chá arrived in Portuguese through early contact with southern
              China — a linguistic route distinct from the tea, thé and Tee
              that reached much of Western Europe by sea.
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ivory-inverse-muted">
              It is a small word carrying a long route through the
              Portuguese maritime world — one CASA 1569 continues to trace.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 5 — ROTA 001 */}
      <Section className="py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <Scene
              mood="volcanic"
              caption="ROTA 001"
              coordinates="37.7749° N · 25.6756° W"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
          <Reveal delay={60}>
            <p className="label-caps text-terracotta-text">
              The first route
            </p>
            <h2 className="mt-4 font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
              São Miguel
            </h2>
            <p className="label-caps mt-2 text-ink-muted">
              ROTA 001 · Açores · Portugal
            </p>
            <p className="mt-6 max-w-md font-serif-display text-xl italic leading-snug text-ink-secondary">
              Volcanic soil. Atlantic rain. Tea grown on a Portuguese island
              in the middle of the ocean.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-secondary">
              CASA 1569 begins at São Miguel — the first entry in ROTA, our
              numbered system for tracing each origin, harvest and producer.
            </p>
            <p className="label-caps mt-8 text-patina-text">
              Our first sourcing journey is underway.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 6 — Principles */}
      <Section className="bg-casa-ivory-dim py-24 md:py-32">
        <Reveal>
          <p className="label-caps text-terracotta-text">What guides us</p>
          <h2 className="mt-4 max-w-md font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            Principles
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 50}>
              <PrincipleItem {...principle} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7 — Producer section */}
      <Section dark className="py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
          <Reveal>
            <h2 className="max-w-lg font-serif-display text-3xl leading-tight text-casa-ivory sm:text-4xl md:text-5xl">
              The producer belongs in the story.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ivory-inverse-muted">
              CASA 1569 is being built around long-term relationships with
              growers, estates and makers who care deeply about what they
              produce.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ivory-inverse-muted">
              We are not interested in hiding origin behind anonymous
              blends. Wherever possible, our teas will identify where they
              were grown, how they were produced and who made them possible.
            </p>
            <Link
              href="/partners"
              className="press label-caps mt-9 inline-flex min-h-11 items-center border border-casa-ivory px-7 py-3.5 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
            >
              Partner with CASA 1569
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <TexturePanel
              tone="brass"
              pattern="rings"
              caption="Hands at harvest"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </Section>

      {/* 8 — Founding origins */}
      <Section className="py-32 md:py-40">
        <Reveal className="max-w-xl">
          <p className="label-caps text-terracotta-text">
            The founding collection
          </p>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            Origins we are exploring
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-secondary">
            Five routes, five geographies, none yet available. These are the
            places CASA 1569 is currently developing relationships with —
            not a catalogue.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {origins.map((origin, index) => (
            <Reveal key={origin.slug} delay={Math.min(index * 50, 150)}>
              <OriginCard origin={origin} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 md:mt-16">
          <Link
            href="/origins"
            className="label-caps underline-fade inline-block text-ink"
          >
            View all origins
          </Link>
        </Reveal>
      </Section>

      {/* 9 — Cadernos da Rota */}
      <Section className="bg-casa-ivory-dim py-24 md:py-32">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-caps text-terracotta-text">
              Cadernos da Rota
            </p>
            <h2 className="mt-4 font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
              Notes from the route
            </h2>
          </div>
          <Link
            href="/journal"
            className="label-caps underline-fade text-ink"
          >
            View the journal
          </Link>
        </Reveal>
        <div className="mt-12 md:mt-16">
          {journalEntries.map((entry, index) => (
            <Reveal key={entry.slug} delay={Math.min(index * 50, 150)}>
              <JournalCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10 — Early access */}
      <Section dark className="py-28 md:py-40">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-serif-display text-4xl leading-tight text-casa-ivory sm:text-5xl">
            Enter the House.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory-inverse-muted">
            Receive occasional notes on new origins, producers and the first
            release of CASA 1569.
          </p>
          <div className="mt-10 flex justify-center">
            <EarlyAccessForm />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
