/**
 * Archival / manuscript placeholder for the historical material on /1569.
 *
 * Deliberately contrasts with Scene (the documentary/landscape placeholder
 * used on the homepage and /origins): aged paper tone, ledger ruling, a
 * deckled edge and a rotated date stamp, rather than a photographic horizon.
 */
export default function Archive({
  chapter,
  date,
  className = "",
  showLabel = true,
}: {
  chapter: string;
  date?: string;
  className?: string;
  showLabel?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-casa-ivory-dim ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, #e9e1cf 0%, #ddcfae 55%, #cdbb92 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 25px, rgba(23,38,44,0.14) 26px)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-3 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, #cdbb92 0px, #cdbb92 5px, transparent 6px, transparent 11px)",
          maskImage:
            "linear-gradient(to left, black 0%, transparent 100%)",
        }}
        aria-hidden
      />
      <div className="grain-overlay opacity-70" aria-hidden />

      <div className="absolute left-5 top-5 h-6 w-6 border-l border-t border-brass-text/60 md:left-6 md:top-6" aria-hidden />
      <div className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-brass-text/60 md:bottom-6 md:right-6" aria-hidden />

      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <p className="label-caps text-brass-text">{chapter}</p>
          {date && (
            <p className="font-serif-display text-lg italic text-ink-secondary">
              {date}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
