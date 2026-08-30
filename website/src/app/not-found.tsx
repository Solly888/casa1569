import Link from "next/link";
import Section from "@/components/Section";
import Scene from "@/components/Scene";

export default function NotFound() {
  return (
    <section className="surface-dark relative flex min-h-[70vh] items-center overflow-hidden bg-atlantic-ink">
      <Scene mood="atlantic" overlay className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 w-full py-24 text-center">
        <Section>
          <p className="label-caps text-ivory-inverse-muted">404</p>
          <h1 className="mt-6 font-serif-display text-4xl leading-tight text-casa-ivory sm:text-5xl">
            This route hasn&apos;t been charted.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ivory-inverse-muted">
            The page you&rsquo;re looking for doesn&rsquo;t exist, or has
            moved to a different route.
          </p>
          <Link
            href="/"
            className="press label-caps mt-9 inline-flex min-h-11 items-center border border-casa-ivory px-7 py-3.5 text-casa-ivory transition-colors hover:bg-casa-ivory hover:text-atlantic-ink"
          >
            Return home
          </Link>
        </Section>
      </div>
    </section>
  );
}
