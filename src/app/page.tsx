import Link from "next/link";
import Section from "@/components/Section";
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
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <TexturePanel
          tone="atlantic"
          pattern="waves"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-40 md:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="label-caps text-casa-ivory/70">
                São Miguel · Açores · Portugal
              </p>
              <h1 className="mt-6 font-serif-display text-5xl leading-[1.05] text-casa-ivory sm:text-6xl md:text-7xl lg:text-8xl">
                CASA 1569
              </h1>
              <p className="mt-3 font-serif-display text-2xl italic text-casa-ivory/90 sm:text-3xl md:text-4xl">
                A House of Origins.
              </p>
              <p className="mt-6 max-w-md text-base text-casa-ivory/75 sm:text-lg">
                Exceptional tea from remarkable places.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/house"
                  className="label-caps inline-flex items-center border border-casa-ivory px-7 py-3.5 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
                >
                  Discover the House
                </Link>
                <a
                  href="#why-1569"
                  className="label-caps underline-fade text-casa-ivory/85 hover:text-casa-ivory"
                >
                  Why 1569
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — Brand idea */}
      <Section className="py-28 md:py-36">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-serif-display text-3xl italic leading-tight text-atlantic-ink sm:text-4xl md:text-5xl">
            Every origin has a story.
            <br />
            Every story has a route.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-atlantic-ink/70">
            CASA 1569 is a modern Portuguese house of provenance. We seek
            exceptional tea from remarkable places and trace it back to the
            landscape, producer and harvest that shaped it.
          </p>
          <p className="label-caps mt-8 text-terracotta">
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
          <Reveal delay={100} className="md:pt-8">
            <p className="label-caps text-terracotta">A point of departure</p>
            <h2 className="mt-4 font-serif-display text-3xl leading-tight text-atlantic-ink sm:text-4xl">
              Why 1569?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-atlantic-ink/75">
              In 1569, Portuguese friar Gaspar da Cruz published one of the
              earliest Portuguese eyewitness accounts of Chinese tea culture.
              Among the rituals he described was the offering of a warm drink
              called chá.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-atlantic-ink/75">
              CASA 1569 takes its name from that encounter — not as a claim
              to age, but as a point of departure.
            </p>
            <Link
              href="/1569"
              className="label-caps underline-fade mt-8 inline-block text-atlantic-ink"
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
            <p className="label-caps text-casa-ivory/50">
              A word that travelled
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-casa-ivory/85">
              Chá arrived in Portuguese through early contact with southern
              China — a linguistic route distinct from the tea, thé and Tee
              that reached much of Western Europe by sea.
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-casa-ivory/85">
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
            <TexturePanel
              tone="volcanic"
              pattern="topography"
              caption="ROTA 001"
              coordinates="37.7749° N · 25.6756° W"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="label-caps text-terracotta">The first route</p>
            <h2 className="mt-4 font-serif-display text-4xl leading-tight text-atlantic-ink sm:text-5xl">
              São Miguel
            </h2>
            <p className="label-caps mt-2 text-atlantic-ink/55">
              Açores · Portugal
            </p>
            <p className="mt-6 max-w-md font-serif-display text-xl italic leading-snug text-atlantic-ink/85">
              Volcanic soil. Atlantic rain. Tea grown on a Portuguese island
              in the middle of the ocean.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-atlantic-ink/70">
              CASA 1569 begins at São Miguel.
            </p>
            <p className="label-caps mt-8 text-patina">
              Our first sourcing journey is underway.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 6 — Principles */}
      <Section className="bg-casa-ivory-dim py-28 md:py-36">
        <Reveal>
          <p className="label-caps text-terracotta">What guides us</p>
          <h2 className="mt-4 max-w-md font-serif-display text-3xl leading-tight text-atlantic-ink sm:text-4xl">
            Principles
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 80}>
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
            <p className="mt-8 max-w-md text-base leading-relaxed text-casa-ivory/75">
              CASA 1569 is being built around long-term relationships with
              growers, estates and makers who care deeply about what they
              produce.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-casa-ivory/75">
              We are not interested in hiding origin behind anonymous
              blends. Wherever possible, our teas will identify where they
              were grown, how they were produced and who made them possible.
            </p>
            <Link
              href="/partners"
              className="label-caps mt-9 inline-flex items-center border border-casa-ivory px-7 py-3.5 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
            >
              Partner with CASA 1569
            </Link>
          </Reveal>
          <Reveal delay={100}>
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
      <Section className="py-28 md:py-36">
        <Reveal className="max-w-xl">
          <p className="label-caps text-terracotta">The founding collection</p>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight text-atlantic-ink sm:text-4xl">
            Origins we are exploring
          </h2>
          <p className="mt-6 text-base leading-relaxed text-atlantic-ink/70">
            Five routes, five geographies, none yet available. These are the
            places CASA 1569 is currently developing relationships with —
            not a catalogue.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {origins.map((origin, index) => (
            <Reveal key={origin.slug} delay={index * 60}>
              <OriginCard origin={origin} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 md:mt-16">
          <Link
            href="/origins"
            className="label-caps underline-fade inline-block text-atlantic-ink"
          >
            View all origins
          </Link>
        </Reveal>
      </Section>

      {/* 9 — Cadernos da Rota */}
      <Section className="bg-casa-ivory-dim py-28 md:py-36">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-caps text-terracotta">Cadernos da Rota</p>
            <h2 className="mt-4 font-serif-display text-3xl leading-tight text-atlantic-ink sm:text-4xl">
              Notes from the route
            </h2>
          </div>
          <Link
            href="/journal"
            className="label-caps underline-fade text-atlantic-ink"
          >
            View the journal
          </Link>
        </Reveal>
        <div className="mt-12 md:mt-16">
          {journalEntries.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 70}>
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
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-casa-ivory/75">
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
