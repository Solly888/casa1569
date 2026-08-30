/**
 * Documentary / cinematic placeholder for a future photograph.
 *
 * Built entirely from gradients, a clipped horizon silhouette and grain —
 * no stock photography, no fabricated depictions of people or places we
 * haven't documented. See lib/image-placeholders.ts for what should replace
 * each usage once CASA 1569 commissions real photography.
 */
type Mood = "atlantic" | "volcanic" | "human" | "mineral";

const skies: Record<Mood, string> = {
  atlantic: "linear-gradient(180deg, #cdd9d6 0%, #a9bdc0 38%, #5c7a80 100%)",
  volcanic: "linear-gradient(180deg, #d7d6c4 0%, #b3b79f 38%, #667063 100%)",
  human: "linear-gradient(180deg, #e6d9c4 0%, #cbaf8d 38%, #8c6b4a 100%)",
  mineral: "linear-gradient(180deg, #d9d2c2 0%, #bcae95 38%, #8a7047 100%)",
};

const lands: Record<Mood, string> = {
  atlantic: "#1f333a",
  volcanic: "#293b30",
  human: "#3a2c22",
  mineral: "#3a2f1f",
};

const horizonPaths: Record<Mood, string> = {
  atlantic:
    "polygon(0% 62%, 8% 58%, 18% 63%, 30% 57%, 42% 61%, 55% 55%, 68% 60%, 80% 54%, 92% 59%, 100% 55%, 100% 100%, 0% 100%)",
  volcanic:
    "polygon(0% 68%, 12% 52%, 24% 60%, 34% 44%, 46% 58%, 58% 46%, 70% 56%, 82% 48%, 94% 58%, 100% 52%, 100% 100%, 0% 100%)",
  human:
    "polygon(0% 74%, 15% 70%, 30% 73%, 45% 68%, 60% 72%, 75% 67%, 100% 71%, 100% 100%, 0% 100%)",
  mineral:
    "polygon(0% 66%, 10% 60%, 22% 64%, 33% 50%, 48% 62%, 60% 52%, 72% 61%, 86% 53%, 100% 60%, 100% 100%, 0% 100%)",
};

export default function Scene({
  mood = "atlantic",
  caption,
  coordinates,
  className = "",
  imageHover = false,
  overlay = false,
}: {
  mood?: Mood;
  caption?: string;
  coordinates?: string;
  className?: string;
  imageHover?: boolean;
  /**
   * Full-height darkening scrim for scenes carrying large hero copy anywhere
   * in the frame — not just a bottom caption. Use whenever text can appear
   * above the bottom third of the image (e.g. a hero h1 + subhead), since
   * the caption-only scrim doesn't reach that high.
   */
  overlay?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${imageHover ? "image-hover" : ""} ${className}`}
    >
      <div
        className={imageHover ? "image-hover-target absolute inset-0" : "absolute inset-0"}
        style={{ background: skies[mood] }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{ background: lands[mood], clipPath: horizonPaths[mood] }}
        />
        <div
          className="absolute inset-0 opacity-25 mix-blend-multiply"
          style={{
            background:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 6px, rgba(255,255,255,0.4) 7px, transparent 8px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(10,17,20,0.35) 100%)",
          }}
        />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
      {overlay && (
        <div
          className="absolute inset-0"
          // Flat, fairly strong scrim rather than a height-dependent gradient:
          // hero copy can land anywhere in the frame (not just the bottom
          // third), and this is verified via axe-core to keep ivory text at
          // AA contrast against the lightest sky tone in every mood.
          style={{ background: "rgba(8,14,17,0.82)" }}
          aria-hidden="true"
        />
      )}
      {(caption || coordinates) && (
        <>
          <div className="scrim-b" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-casa-ivory md:p-6">
            {caption && <p className="label-caps opacity-95">{caption}</p>}
            {coordinates && (
              <p className="label-caps whitespace-nowrap opacity-75">
                {coordinates}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
