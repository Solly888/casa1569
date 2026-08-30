/**
 * Photography asset architecture.
 *
 * CASA 1569 has not yet commissioned photography. Every hero and origin
 * section that will eventually carry a real photograph renders a `Scene`
 * (documentary/landscape) or `Archive` (manuscript/historical) placeholder
 * instead of a stock or fabricated image — see components/Scene.tsx and
 * components/Archive.tsx.
 *
 * This registry is the brief for whoever commissions or licenses that
 * photography: it names every slot, the subject it should depict, the mood
 * reference and the aspect ratio the layout expects. When a real photograph
 * is ready, drop the file into `/public/images/` under the listed filename,
 * swap the corresponding `Scene`/`Archive` usage for a Next.js `<Image>`,
 * and remove the row below.
 *
 * Do not photograph or name specific unidentified people, estates or
 * producers as CASA partners until an agreement exists (see
 * /decisions and AGENTS.md in the source business repository).
 */
export type ImageSlot = {
  filename: string;
  subject: string;
  mood: string;
  aspectRatio: string;
  usedIn: string;
  alt: string;
};

export const imageSlots: ImageSlot[] = [
  {
    filename: "hero-sao-miguel.jpg",
    subject: "São Miguel tea fields under low Atlantic cloud",
    mood: "Documentary, cinematic, muted volcanic greens — not travel-brochure blue skies",
    aspectRatio: "21:9 (full-bleed hero)",
    usedIn: "Homepage hero",
    alt: "Terraced tea fields on São Miguel, Açores, under overcast Atlantic sky",
  },
  {
    filename: "atlantic-coastline.jpg",
    subject: "Volcanic coastline meeting open Atlantic water",
    mood: "Cool, mineral, slightly desaturated",
    aspectRatio: "4:5",
    usedIn: "Homepage brand-idea / CHÁ sections",
    alt: "Volcanic Atlantic coastline near São Miguel, Açores",
  },
  {
    filename: "tea-fields-sao-miguel.jpg",
    subject: "Rows of tea under mist, human scale for perspective",
    mood: "Agricultural, unglamorous, true to the working landscape",
    aspectRatio: "4:3",
    usedIn: "/origins — ROTA 001",
    alt: "Rows of tea plants on volcanic soil, São Miguel",
  },
  {
    filename: "tea-hands.jpg",
    subject: "Hands at harvest or processing — no identifiable individual until a producer relationship is confirmed",
    mood: "Close, tactile, natural light",
    aspectRatio: "4:5",
    usedIn: "Homepage producer section, /partners",
    alt: "Hands sorting freshly harvested tea leaves",
  },
  {
    filename: "gaspar-da-cruz-archive.jpg",
    subject: "Facsimile or reproduction of Gaspar da Cruz's 1569–70 Tractado (rights-cleared)",
    mood: "Archival, monochrome, document grain",
    aspectRatio: "1:1",
    usedIn: "/1569 — Chapter II",
    alt: "Reproduction page from Gaspar da Cruz's Tractado, published in Évora around 1569–1570",
  },
  {
    filename: "macau-map.jpg",
    subject: "Historical cartographic fragment showing Macau and the South China coast",
    mood: "Archival, sepia/ink tones, fine engraved linework",
    aspectRatio: "1:1",
    usedIn: "/1569 — Chapter III",
    alt: "Historical map fragment of Macau and the Pearl River estuary",
  },
  {
    filename: "portuguese-limestone.jpg",
    subject: "Portuguese limestone or Azorean basalt architectural detail",
    mood: "Material, tactile, quiet luxury",
    aspectRatio: "4:3",
    usedIn: "/house",
    alt: "Detail of Portuguese limestone architecture",
  },
  {
    filename: "tea-ritual.jpg",
    subject: "Ceramics and tea prepared for drinking, uncluttered composition",
    mood: "Still, considered, natural light",
    aspectRatio: "4:5",
    usedIn: "Homepage early-access section",
    alt: "Tea prepared in unglazed ceramic ware",
  },
];
