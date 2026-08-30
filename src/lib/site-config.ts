export const siteConfig = {
  name: "CASA 1569",
  descriptor: "A House of Origins",
  // casa1569.com.au is the canonical primary domain (Australian market).
  // casa1569.com is the secondary domain and should redirect here — see middleware.ts.
  url: "https://casa1569.com.au",
  secondaryDomain: "casa1569.com",
  description:
    "CASA 1569 is a modern Portuguese house of origins, beginning with exceptional tea traced to remarkable places, producers and traditions.",
  // Prepared mailbox for the partners channel — confirm this inbox is live and
  // monitored before launch. Sourced from NEXT_PUBLIC_CONTACT_EMAIL when set.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "partners@casa1569.com.au",
  location: "Sydney, Australia",
};

export const navLinks = [
  { href: "/origins", label: "Origins" },
  { href: "/house", label: "The House" },
  { href: "/1569", label: "1569" },
  { href: "/journal", label: "Journal" },
  { href: "/partners", label: "Partners" },
];

export type Origin = {
  slug: string;
  rota: string;
  name: string;
  region: string;
  country: string;
  coordinates: string;
  status: string;
  summary: string;
  detail: string;
  variant: "volcanic" | "mountain" | "highland" | "valley" | "forest";
};

export const origins: Origin[] = [
  {
    slug: "sao-miguel",
    rota: "ROTA 001",
    name: "São Miguel",
    region: "Açores",
    country: "Portugal",
    coordinates: "37.7749° N · 25.6756° W",
    status: "Sourcing journey underway",
    summary: "Volcanic soil. Atlantic rain. Tea grown on a Portuguese island in the middle of the ocean.",
    detail:
      "CASA 1569 begins at São Miguel. Tea has grown here for generations, tended in fields shaped by volcanic soil and near-constant Atlantic moisture — one of the only places in Europe where Camellia sinensis is cultivated at meaningful scale. Our first sourcing journey is underway.",
    variant: "volcanic",
  },
  {
    slug: "wuyishan",
    rota: "ROTA 002",
    name: "Wuyishan",
    region: "Fujian",
    country: "China",
    coordinates: "27.7146° N · 117.9723° E",
    status: "Origin under exploration",
    summary: "Rock-grown oolong from the cliffs and gorges that shaped the modern idea of tea craft.",
    detail:
      "Wuyishan is the historical bridge in the CASA 1569 story of chá — the mineral-rich cliffs of northern Fujian, where rock oolong has been refined for centuries. We are exploring producers whose lots can be traced to specific gorges and harvests.",
    variant: "mountain",
  },
  {
    slug: "darjeeling",
    rota: "ROTA 003",
    name: "Darjeeling",
    region: "West Bengal",
    country: "India",
    coordinates: "27.0410° N · 88.2663° E",
    status: "Origin under exploration",
    summary: "High-elevation gardens and a seasonal harvest calendar prized by collectors.",
    detail:
      "Darjeeling offers seasonal prestige — first and second flush lots grown at altitude in the foothills of the Himalaya. We are evaluating gardens with documented estate histories and consistent lot-level traceability.",
    variant: "highland",
  },
  {
    slug: "ceylon-highlands",
    rota: "ROTA 004",
    name: "Ceylon Highlands",
    region: "Central Highlands",
    country: "Sri Lanka",
    coordinates: "6.9497° N · 80.7891° E",
    status: "Origin under exploration",
    summary: "A refined, repeatable black tea from estates above the cloud line.",
    detail:
      "The Ceylon Highlands offer a dependable, high-grown black tea character we consider essential to a founding collection — bright, structured, and produced by estates with long-standing export relationships.",
    variant: "valley",
  },
  {
    slug: "wazuka",
    rota: "ROTA 005",
    name: "Wazuka",
    region: "Kyoto",
    country: "Japan",
    coordinates: "34.8464° N · 135.9436° E",
    status: "Origin under exploration",
    summary: "Shaded gardens in a valley responsible for a significant share of Japan's finest green tea.",
    detail:
      "Wazuka's terraced, mist-covered valley near Kyoto produces some of Japan's most respected green tea. We are in early conversations with growers who practise traditional shading and small-lot processing.",
    variant: "forest",
  },
];

export const principles = [
  {
    number: "01",
    title: "Origin",
    body: "We begin with place.",
  },
  {
    number: "02",
    title: "Provenance",
    body: "Every tea should be traceable to the people and land behind it.",
  },
  {
    number: "03",
    title: "Selection",
    body: "We choose deliberately, not endlessly.",
  },
  {
    number: "04",
    title: "Ritual",
    body: "Tea deserves time.",
  },
];

export const journalCategories = [
  "Origin",
  "Places",
  "Tea",
  "Objects",
  "People",
  "Notes",
] as const;

export type JournalCategory = (typeof journalCategories)[number];

export type JournalEntry = {
  slug: string;
  title: string;
  dek: string;
  readTime: string;
  chapter: string;
  categories: JournalCategory[];
  body: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "why-1569",
    title: "Why 1569?",
    dek: "On naming a house after a year that isn't a birthday.",
    readTime: "4 min",
    chapter: "Cadernos da Rota — I",
    categories: ["Notes", "Origin"],
    body: [
      "CASA 1569 was not founded in 1569. No tea changed hands, no house opened its doors, no ship belonging to us ever left a Portuguese port that year. We chose the number anyway, and we think it's worth explaining why.",
      "In 1569, the Portuguese Dominican friar Gaspar da Cruz published his Tractado, one of the earliest Portuguese eyewitness accounts of China. Among the customs he recorded was the offering of a warm drink the Chinese called chá — a small, precise observation, made in passing, by a man who was not looking for tea and did not know he had found the beginning of something.",
      "That is the register we wanted for this house. Not a foundation myth. A point of departure — a single, well-documented moment where two worlds briefly shared a cup, long before either had any idea what would follow.",
      "1569 does not make us old. It gives us a direction to look in.",
    ],
  },
  {
    slug: "tea-at-the-edge-of-the-atlantic",
    title: "Tea at the edge of the Atlantic",
    dek: "How a Chinese plant came to grow on a Portuguese island.",
    readTime: "5 min",
    chapter: "Cadernos da Rota — II",
    categories: ["Places", "Origin"],
    body: [
      "Most conversations about tea and Europe end at the ports of London or Amsterdam. Ours starts in the middle of the ocean, on São Miguel — the largest of the Azores, and one of the very few places in Europe where Camellia sinensis is grown with any seriousness.",
      "The plant arrived here in the nineteenth century, carried by trade routes and curiosity rather than colonial ambition, and found something unlikely waiting for it: volcanic soil, near-constant cloud cover, and Atlantic rain in almost the right rhythm. Tea does not usually associate itself with black sand beaches and hydrangea hedgerows. On São Miguel, it does.",
      "It's this improbability — a Chinese plant, an Atlantic island, a Portuguese harvest — that gives CASA 1569 its first route. Not because the story is neat, but because it is true, and because it says something about how far tea has always been willing to travel.",
    ],
  },
  {
    slug: "tea-and-cha",
    title: "The two words that travelled the world: tea and chá",
    dek: "A short linguistic route through how the world came to talk about tea.",
    readTime: "4 min",
    chapter: "Cadernos da Rota — III",
    categories: ["Tea", "Notes"],
    body: [
      "Almost every language's word for tea descends from one of two roots: chá, from Cantonese and Mandarin, or , from the Min Chinese dialects spoken around the port of Amoy. Which word a country ended up with generally traces the route its tea arrived by.",
      "Coastal trading routes through Amoy gave much of Western Europe thé, tea, Tee. Overland and early maritime contact through southern China gave Portuguese, Japanese, Korean, Hindi, Arabic, Russian and Persian speakers some version of chá.",
      "Portugal's chá is a linguistic fingerprint of an early, direct route to southern China — a route that predates the tea trade most of Europe would later build through Amsterdam and London. It is one of the small pieces of evidence behind the words on our tins: not a claim to have invented tea, but a record of an early conversation.",
    ],
  },
];

export const contactReasons = [
  "Tea estate or grower",
  "Exporter",
  "Packaging or production partner",
  "Press or collaboration",
  "Other",
];
