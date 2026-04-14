# ft-template-filmmaker

A premium template for a filmmaker / videographer / small production company.

Built for Final Touch Websites. Next.js 15 App Router · Tailwind · Framer Motion.

## Pages

- `/` — Home (hero, credit strip, reel preview, capabilities, process, call sheet, quotes, contact)
- `/work` — Full project index
- `/work/[slug]` — Project detail (statically generated from `lib/projects.ts`)
- `/about` — Crew, stats, process, call sheet
- `/contact` — Inquiry form

## Run

```
npm install
npm run dev
```

Open http://localhost:3000.

## Reskin — where to swap things for a client

### 1. Palette
All color lives in CSS custom properties in `app/globals.css`:

```
--ink, --ink-2, --ink-3   /* backgrounds */
--bone, --bone-dim        /* text */
--amber                   /* single accent */
--bleach                  /* secondary accent */
--rule                    /* divider lines */
```

One accent only. Keep it dark — this template assumes a matte-black aesthetic.

### 2. Type
`app/layout.tsx` loads Fraunces (serif), JetBrains Mono (mono), Inter (sans) via `next/font`. Swap any of them and the rest of the UI inherits via CSS variables.

### 3. Studio name / copy
- `app/layout.tsx` — metadata + default title
- `components/nav/top-nav.tsx` — wordmark
- `components/footer/end-slate.tsx` — footer copy
- `components/hero/hero.tsx` — hero headline and strapline
- `components/capabilities/capabilities.tsx` — capability columns
- `components/process/scrubber.tsx` — stage descriptions
- `components/gear/call-sheet.tsx` — gear list & crew quotes
- `components/testimonials/pull-quote.tsx` — client quotes
- `components/marquee/credit-strip.tsx` — client/festival ticker

### 4. Projects
All project data lives in `lib/projects.ts`. Each entry generates a static `/work/[slug]` detail page. Add / remove projects there.

### 5. Media slots
Every image/video on the site is marked with a `ASSET SLOT` label so the client knows where to drop assets:

- **Hero reel** — `components/hero/hero.tsx` has a placeholder letterboxed plate. Replace with a `<video>` element (muted, loop, playsInline, poster). Keep it 2.39:1.
- **Project stills** — `lib/projects.ts` `stills` array describes slots. Replace the gradient placeholder divs in `components/work/reel-index.tsx` and `app/work/[slug]/project-detail-client.tsx` with `<Image>` tags.
- **Crew portraits** — `components/gear/call-sheet.tsx` has square portrait slots.

## Animation rules

- All scroll-triggered reveals use Framer Motion `whileInView` with `once: true`.
- Custom easings live in `lib/motion.ts`: `easeFilmic` for entrances, `easeSlate` for letterbox/wipe moves. No bouncy springs anywhere.
- Grain is an SVG fractal noise loop in `app/globals.css` (`.grain`), stepped at ~6 frames so it reads as real film grain.
- `prefers-reduced-motion: reduce` disables grain animation and collapses durations.

## Custom cursor

Desktop only (hover + fine pointer). Components can opt a hit area into a specific cursor state with `data-cursor="play"` or `data-cursor="link"`.

## What this template is NOT

- Not a light-mode template. Don't try to invert it.
- Not a grid-of-cards portfolio. The work index is vertical and text-first on purpose.
- Not for videographers who want a Squarespace film template. This is for studios that care about type and restraint.
