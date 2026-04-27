# Design Brief — Hansung University of Arts and Sciences

## Tone
Premium academic aesthetic with refined clarity and generous whitespace. Navy-dominant, gold-accented institutional authority.

## Color Palette

| Token | OKLCH | Hex Equivalent | Purpose |
|-------|-------|---|----------|
| Primary | 0.25 0.02 243 | #1a3a52 | Navy backgrounds, primary containers |
| Secondary | 0.45 0.02 243 | #384d66 | Lighter navy for secondary areas |
| Accent | 0.70 0.1 40 | #b8860b | Gold for CTAs, highlights, borders |
| Background | 0.98 0 0 | #fafafa | Light neutral for content areas |
| Foreground | 0.25 0.02 243 | #1a3a52 | Navy text on light backgrounds |
| Card | 0.95 0 0 | #f0f0f0 | Card and popover surfaces |
| Muted | 0.65 0 0 | #a6a6a6 | Secondary text, subtle elements |
| Border | 0.35 0.01 243 | #2d4563 | Subtle navy borders |

## Typography

| Layer | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| Display | Fraunces (serif) | 2.5rem–4.5rem | 700 | Page headings, hero title |
| Heading | Fraunces (serif) | 1.2–2rem | 600–700 | Section headings, cards |
| Body | Lora (serif) | 0.9–1.1rem | 400 | Content, descriptions |
| Accent | Lora (serif) | 0.9rem | 600 | Links, metadata |
| Mono | JetBrains Mono | 0.75–0.8rem | 400 | Badges, dates, technical labels |

## Structural Zones

| Zone | Background | Border | Elevation | Notes |
|------|------------|--------|-----------|-------|
| Header | Navy (primary) | Gold bottom | Sticky fixed | Logo left, nav center, actions right |
| Hero | Navy gradient | None | Prominent | Centered content, white text |
| Content Light | White (background) | Subtle navy | Baseline | Main content areas |
| Content Dark | Navy (primary) | None | Baseline | Accent sections |
| Cards | Off-white (card) | Subtle navy/gold on hover | Elevated +2px on hover | Hover reveal gold accent |
| Footer | Navy (primary) | Navy top | Baseline | Grid layout, gold section headers |

## Spacing & Rhythm
- Section padding: 4–6rem (vertical), 2rem (horizontal mobile)
- Card gap: 2rem grid
- Header height: ~80px (fixed)
- Hero padding: 7rem top, 4rem bottom
- Micro interactions: 0.2–0.3s ease transitions

## Component Patterns
1. **Header Navigation:** Fixed sticky, multi-level dropdown menus, gold accent on hover
2. **Hero Section:** Centered card with badge, title, subtitle, dual CTA buttons
3. **News Grid:** 3-column auto-fit with hover elevation, gold accent border reveal
4. **Section Dividers:** Centered gold horizontal line under section heading
5. **Buttons:** Gold primary, navy outline secondary; 4px radius, no shadows
6. **Cards:** Minimal borders, white body on light bg / white text on dark bg, hover +2px lift

## Motion
- **Default transition:** `all 0.3s ease`
- **Hover lift:** `transform: translateY(-2px)`
- **Fade in on scroll:** `opacity 0.6s ease, transform 0.6s ease`
- **Entrance:** Card elements fade in as viewport scrolls past
- **No animation:** Neon glows, floating blobs, or glassmorphism; pure clarity

## Differentiation
Premium institutional web presence inspired by leading universities (Yonsei, MIT). Navy authority + gold elegance = refined academic legitimacy. Clean typography hierarchy and minimal decoration signal confidence and focus.

## Accessibility
- Minimum contrast: AA+ (navy on white, white on navy)
- Interactive elements: Visible focus states, no opacity-only states
- Typography: Serif fonts for editorial clarity, 1.4–1.9 line-height
- Mobile: Full stack responsive, header collapses on `max-width: 768px`

## Signature Detail
Gold accent line beneath section headings. On hover, cards reveal gold border accent, elevating visual hierarchy. Subtle, repeated, premium.
