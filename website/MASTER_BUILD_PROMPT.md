# CASA 1569 — Cursor / Claude Master Website Prompt

## Mission

Build a static, launch-quality public website for **CASA 1569 — A House of Origins**.

This is not yet e-commerce.

The website exists to establish credibility with:
- tea estates and growers;
- exporters;
- packaging and production partners;
- press and collaborators;
- early premium consumers.

A supplier should understand within 20 seconds that CASA 1569 is serious, origin-led, design-literate and capable of representing their product well.

## Required stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- static-export capable
- semantic HTML
- accessible
- high Lighthouse performance
- no database
- no auth
- no shopping cart
- no unnecessary dependencies

## Brand

Read:
- `/brand/brand-guide.md`
- `/brand/style-guide.md`
- `/brand/voice.md`
- `/research/history-of-cha.md`

Before coding.

## Global visual direction

Quiet Portuguese Luxury + Maritime Modernism + Old World Contemporary.

Use CSS tokens:

```css
--casa-ivory: #F1EBDD;
--atlantic-ink: #17262C;
--azulejo-blue: #315E6D;
--patina: #667063;
--terracotta: #A85D43;
--aged-brass: #A48656;
```

### Do not create
- glassmorphism;
- purple/blue startup gradients;
- floating SaaS cards;
- rounded-pill overload;
- generic icon sets;
- cliché ships/anchors/ropes;
- tourist azulejo aesthetics.

## Routes

Build:

- `/`
- `/house`
- `/origins`
- `/1569`
- `/partners`
- `/journal`

## Navigation

CASA 1569

Origins  
The House  
1569  
Journal  
Partners

Right:
Enquire

## Homepage

### 1 — Hero

Full visual impact.

**CASA 1569**  
**A House of Origins.**

> Exceptional tea from remarkable places.

CTAs:
- Discover the House
- Why 1569

Use São Miguel / Atlantic imagery.

No `Shop Now`.

### 2 — Brand idea

> **Every origin has a story.  
> Every story has a route.**

Supporting copy:

CASA 1569 is a modern Portuguese house of provenance. We seek exceptional tea from remarkable places and trace it back to the landscape, producer and harvest that shaped it.

**Tea is where the house begins.**

### 3 — Why 1569?

Large `1569`.

Heading:
**A point of departure.**

Copy:

In 1569, Portuguese friar Gaspar da Cruz published one of the earliest Portuguese eyewitness accounts of Chinese tea culture. Among the rituals he described was the offering of a warm drink called chá.

CASA 1569 takes its name from that encounter — not as a claim to age, but as a point of departure.

Link:
**Read the story**

### 4 — CHÁ

Atlantic Ink section.

Large:
**CHÁ**

Short editorial treatment around the word and routes through the Portuguese maritime world.

Avoid overclaiming historical causation.

### 5 — ROTA 001

Label:
THE FIRST ROUTE

# ROTA 001
## SÃO MIGUEL
### AÇORES · PORTUGAL

> Volcanic soil. Atlantic rain. Tea grown on a Portuguese island in the middle of the ocean.

> CASA 1569 begins at São Miguel.

Important: no supplier has been publicly appointed yet.

Say:
**Our first sourcing journey is underway.**

### 6 — Principles

01 ORIGIN  
We begin with place.

02 PROVENANCE  
Every tea should be traceable to the people and land behind it.

03 SELECTION  
We choose deliberately, not endlessly.

04 RITUAL  
Tea deserves time.

### 7 — Producer section

# The producer belongs in the story.

CASA 1569 is being built around long-term relationships with growers, estates and makers who care deeply about what they produce.

We are not interested in hiding origin behind anonymous blends. Wherever possible, our teas will identify where they were grown, how they were produced and who made them possible.

CTA:
**Partner with CASA 1569**

### 8 — Founding origins

Title:
**Origins we are exploring**

Cards:
- São Miguel — Açores · Portugal
- Wuyishan — Fujian · China
- Darjeeling — India
- Ceylon Highlands — Sri Lanka
- Wazuka — Kyoto · Japan

Do not make these look like purchasable inventory.

### 9 — Cadernos da Rota

Editorial preview.

Examples:
- Why 1569?
- Tea at the edge of the Atlantic
- The two words that travelled the world: tea and chá

### 10 — Early access

# Enter the House.

> Receive occasional notes on new origins, producers and the first release of CASA 1569.

CTA:
**Join the House**

No discount gimmicks.

## `/partners`

This is a core commercial page.

Hero:
# Built with origin.

> CASA 1569 is seeking long-term relationships with exceptional tea producers, estates, farmers, exporters and specialist partners.

### What we seek

- traceable origin
- exceptional cup quality
- identifiable harvests / lots
- responsible production
- export capability
- story/documentation
- ability to begin with sensible pilot volumes
- scalable long-term relationships

### What CASA 1569 offers

- premium international positioning
- producer attribution where appropriate
- origin-led storytelling
- long-term partnership mindset
- considered packaging
- Australian market development
- direct-to-consumer brand building

CTA:
# Speak with the House.

Contact form fields:
- name
- company / estate
- country
- email
- website
- message

Use a placeholder variable for contact email. Never invent one.

## `/1569`

Chapters:

I — THE WORD / Chá  
II — THE ACCOUNT / 1569  
III — THE PORT / Macau  
IV — THE COURT / Bragança  
V — THE GARDEN / Açores

End:
# A modern point of departure.

## Behaviour

Use:
- subtle fades;
- slow image reveal;
- fine underline movement;
- restrained parallax only where performance remains excellent.

Avoid motion that competes with content.

## Images

Place local image placeholders in `/public/images/`.

Suggested filenames:
- hero-sao-miguel.jpg
- atlantic-ocean.jpg
- tea-fields-sao-miguel.jpg
- tea-hands.jpg
- gaspar-da-cruz-archive.jpg
- macau-map.jpg
- portuguese-limestone.jpg
- tea-ritual.jpg

Do not hotlink random images in production.

## SEO

Homepage:
`CASA 1569 | A House of Origins`

Description:
`CASA 1569 is a modern Portuguese house of origins, beginning with exceptional tea traced to remarkable places, producers and traditions.`

Add:
- OpenGraph;
- sitemap;
- robots;
- semantic metadata;
- organisation structured data.

Do not make false claims about products being available.

## Definition of done

The site must:
- feel like a real premium international house;
- be excellent on mobile;
- contain no fake functionality;
- use clean reusable components;
- avoid brand drift;
- be fast;
- be accessible;
- make suppliers want to respond to us.

Most important instruction:

# MAKE CASA 1569 FEEL LIKE A REAL LUXURY HOUSE BEFORE IT HAS SOLD ITS FIRST BOX OF TEA.
