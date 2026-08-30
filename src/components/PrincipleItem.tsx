export default function PrincipleItem({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border-t border-atlantic-ink/15 py-8 first:border-t-0 md:border-t-0 md:border-l md:py-0 md:pl-8">
      <p className="label-caps text-terracotta">{number}</p>
      <h3 className="mt-3 font-serif-display text-2xl">{title}</h3>
      <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-atlantic-ink/70">
        {body}
      </p>
    </div>
  );
}
