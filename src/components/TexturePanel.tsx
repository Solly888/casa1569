type Tone =
  | "atlantic"
  | "volcanic"
  | "brass"
  | "patina"
  | "terracotta"
  | "ink"
  | "ivory";

type Pattern = "topography" | "waves" | "grid" | "rings" | "none";

const tones: Record<Tone, string> = {
  atlantic:
    "linear-gradient(155deg, #1f333a 0%, #315e6d 46%, #17262c 100%)",
  volcanic:
    "linear-gradient(160deg, #17262c 0%, #384a3f 38%, #667063 70%, #17262c 100%)",
  brass: "linear-gradient(150deg, #a48656 0%, #8a7047 55%, #4a3c26 100%)",
  patina: "linear-gradient(150deg, #667063 0%, #3f4a3f 65%, #17262c 100%)",
  terracotta:
    "linear-gradient(150deg, #a85d43 0%, #7c4130 60%, #17262c 100%)",
  ink: "linear-gradient(150deg, #1f333a 0%, #17262c 100%)",
  ivory: "linear-gradient(150deg, #f1ebdd 0%, #e2d7bd 100%)",
};

function PatternOverlay({ pattern }: { pattern: Pattern }) {
  if (pattern === "none") return null;

  if (pattern === "waves") {
    return (
      <svg
        className="absolute inset-0 h-full w-full opacity-35"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        aria-hidden
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M -20 ${30 + i * 30} Q 100 ${10 + i * 30}, 200 ${30 + i * 30} T 420 ${30 + i * 30}`}
            fill="none"
            stroke="#F1EBDD"
            strokeWidth="0.6"
          />
        ))}
      </svg>
    );
  }

  if (pattern === "topography") {
    return (
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        aria-hidden
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse
            key={i}
            cx={200 - i * 6}
            cy={170 - i * 14}
            rx={40 + i * 26}
            ry={22 + i * 15}
            fill="none"
            stroke="#F1EBDD"
            strokeWidth="0.6"
          />
        ))}
      </svg>
    );
  }

  if (pattern === "rings") {
    return (
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        aria-hidden
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={200}
            cy={150}
            r={20 + i * 24}
            fill="none"
            stroke="#F1EBDD"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    );
  }

  if (pattern === "grid") {
    return (
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        aria-hidden
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 50}
            y1={0}
            x2={i * 50}
            y2={300}
            stroke="#F1EBDD"
            strokeWidth="0.4"
          />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 50}
            x2={400}
            y2={i * 50}
            stroke="#F1EBDD"
            strokeWidth="0.4"
          />
        ))}
      </svg>
    );
  }

  return null;
}

export default function TexturePanel({
  tone = "atlantic",
  pattern = "topography",
  caption,
  coordinates,
  className = "",
  imageHover = false,
}: {
  tone?: Tone;
  pattern?: Pattern;
  caption?: string;
  coordinates?: string;
  className?: string;
  imageHover?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${imageHover ? "image-hover" : ""} ${className}`}
    >
      <div
        className={imageHover ? "image-hover-target absolute inset-0" : "absolute inset-0"}
        style={{ background: tones[tone] }}
        aria-hidden="true"
      >
        <PatternOverlay pattern={pattern} />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
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
