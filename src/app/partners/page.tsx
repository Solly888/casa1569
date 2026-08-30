import type { Metadata } from "next";
import Section from "@/components/Section";
import TexturePanel from "@/components/TexturePanel";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "CASA 1569 is seeking long-term relationships with exceptional tea producers, estates, farmers, exporters and specialist partners.",
};

const weSeek = [
  "Traceable origin",
  "Exceptional cup quality",
  "Identifiable harvests / lots",
  "Responsible production",
  "Export capability",
  "Story and documentation",
  "Ability to begin with sensible pilot volumes",
  "Scalable, long-term relationships",
];

const weOffer = [
  "Premium international positioning",
  "Producer attribution where appropriate",
  "Origin-led storytelling",
  "Long-term partnership mindset",
  "Considered packaging",
  "Australian market development",
  "Direct-to-consumer brand building",
];

export default function PartnersPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <TexturePanel
          tone="brass"
          pattern="grid"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 w-full pb-16 pt-32 md:pb-20">
          <Section>
            <Reveal>
              <p className="label-caps text-casa-ivory/70">Partners</p>
              <h1 className="mt-6 max-w-2xl font-serif-display text-5xl leading-tight text-casa-ivory sm:text-6xl md:text-7xl">
                Built with origin.
              </h1>
              <p className="mt-6 max-w-lg text-base text-casa-ivory/85 sm:text-lg">
                CASA 1569 is seeking long-term relationships with
                exceptional tea producers, estates, farmers, exporters and
                specialist partners.
              </p>
            </Reveal>
          </Section>
        </div>
      </section>

      <Section className="py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="label-caps text-terracotta">What we seek</p>
            <ul className="mt-6 flex flex-col gap-4">
              {weSeek.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-atlantic-ink/12 pb-4 text-base text-atlantic-ink/80"
                >
                  <span className="label-caps text-atlantic-ink/30">/</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <p className="label-caps text-terracotta">
              What CASA 1569 offers
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {weOffer.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-atlantic-ink/12 pb-4 text-base text-atlantic-ink/80"
                >
                  <span className="label-caps text-atlantic-ink/30">/</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section dark className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <h2 className="font-serif-display text-4xl leading-tight text-casa-ivory sm:text-5xl">
              Speak with the House.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-casa-ivory/70">
              Tell us about your estate, garden or operation. We read every
              enquiry ourselves.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
