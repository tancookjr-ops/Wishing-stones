# Wishing Stones — Design System

> A gallery, museum, library, gift shop, and community hub in one joyful old building on **Tancook Island, Nova Scotia**. Hilary Dionne is its heart and soul. This design system exists to drive global interest in an utterly unique venue — and in the person who makes it magic.

**Aesthetic in one breath:** sea, beach, driftwood, makeshift, quirky, fun. Rustic charm meets genuine joy. Simple, beautiful, easy to navigate — and easy for a non-technical owner to maintain.

## Sources
No codebase, Figma, logo, or brand assets were provided. This system is built from the written brief. All visuals are original coastal placeholders; **fonts are Google Fonts substitutions** (see below) and there is **no real logo** — the brand name is set in display type wherever a mark would go.

---

## Content Fundamentals — how we write

**Voice:** warm, first-person-plural and second-person ("come find us", "plan *your* visit"). We talk the way Hilary would greet you at the door — delighted you came.

**Tone:** joyful, unhurried, a little playful. Never corporate, never salesy. We'd rather charm than convince.

**Casing:** Headlines and the wordmark use display type; small eyebrow labels are UPPERCASE with wide tracking (`--ls-label`). Handwritten notes are lowercase and casual ("open thurs–sun!", "found on the beach!").

**Quirk:** dry island humour is welcome — "Mon–Wed: closed (gone beachcombing)", "Postcards, not spam." Keep it short and genuine, never forced.

**Emoji:** avoided in body copy. A single `✦` star is used as a decorative separator in the category marquee — that's the extent of it.

**Examples**
- Hero: *"Island magic, washed ashore."*
- Lead: *"Part gallery, part museum, part library, part island gift shop — and all quirky Tancook charm."*
- Handwritten label: *"found on the beach!"*, *"$14 · one of a kind"*
- Micro-copy: *"made with island magic"*

---

## Visual Foundations

**Colors.** A sun-bleached North Atlantic palette. Warm **sand** papers (`--sand-*`) are the default surfaces — never stark white. Weathered **driftwood** neutrals (`--driftwood-*`) carry borders and muted text. **Deep sea** green-navy (`--sea-900`) is the primary ink and the dark-section background. **Sea glass** greens (`--seaglass-*`) and **tide** blues (`--tide-*`) are the brand mid-tones. Quirky **buoy-bright pops** — coral (`--coral-500`, the primary accent), sunwash yellow, rosehip pink — are used sparingly, like a splash of paint on a float.

**Type.** Four families:
- **Bricolage Grotesque** — display / headings. Chosen because "bricolage" literally means *makeshift/DIY* — a warm, slightly irregular grotesque.
- **Newsreader** — body. A literary, gallery-catalogue serif; warm and highly readable.
- **Caveat** — handwritten accent for labels, prices, captions and asides. This is where the "island magic" personality lives.
- **La Belle Aurore** — the *sign script*, reserved for the wordmark. Recreates the handwriting carved into the wooden Wishing Stones sign out front (see `ui_kits/website/assets/sign-crate.png`); used via `--font-sign`, usually with a hairline text-stroke for paint weight.

**Backgrounds.** Sections are the building's own painted walls: peach **shingle** courses (`.shingle-wall` + `--facade-peach-soft`), **periwinkle** vertical boards with scalloped trim (`--facade-blue-soft` + `Scallop`), warm butter, washed sage and rose interior walls, and dark `--sea-900`/hearth bands for contrast. A global warm paper-grain overlay and a photo-grade `.wood-grain` texture (for boards, crates, frames) keep surfaces from ever feeling flat-web. Real deployment should lean on **island photography** (warm, natural light — see Imagery below).

**Imagery vibe.** Warm and natural, never cold or heavily filtered. Photos want a matted or driftwood **frame** (`ImageFrame`) and a gentle hand-written caption. A slight tilt (`tilt={-2}`) makes them feel pinned up by hand.

**Spacing.** 4px base scale (`--space-1`…`--space-10`). Generous, airy sections — this is a calm place.

**Corner radii.** Gently rounded, sea-tumbled — never sharp. `--radius-sm` 6px through `--radius-xl` 32px, plus a `--radius-pill` and an organic `--radius-stone` pebble blob for playful moments.

**Borders.** Thin warm sand hairlines (`--border-hairline`) for cards; 2px ink borders for outline buttons; driftwood underlines on inputs.

**Shadows.** Soft, low, **warm** — tinted with driftwood brown, never hard black (`--shadow-sm/md/lg`). Taped or pinned objects get `--shadow-prop`, a tiny offset "propped against the shelf" shadow.

**Cards.** Warm paper (`--surface-card`), 1px hairline border, rounded `--radius-lg`, soft shadow. An optional `tilt` gives a hand-propped, makeshift lean.

**Motion.** Gentle and tidal — `--ease-tide` cubic-bezier, 140–480ms. Fades and soft slides; **no springy bounces, no aggressive snapping.** Buttons depress slightly on press (`translateY(1px)`); icon buttons scale to 0.94.

**Hover / press.** Hover deepens color (coral → `--coral-600`) or lightens a surface; press nudges/shrinks. Nothing flashy.

**Transparency & blur.** Reserved for the sticky nav only — a translucent sand bar with `backdrop-filter: blur(8px)`. Elsewhere, surfaces are opaque.

**Layout.** Centered content columns (`--maxw-content` 1080px, `--maxw-wide` 1280px), fluid `--gutter`. Sticky header; everything else scrolls.

---

## Iconography

- **Line icons via [Lucide](https://lucide.dev)** (CDN) — a friendly, rounded, medium-stroke set that suits the warm coastal tone. Loaded from `unpkg.com/lucide` and rendered through the `Icon` helper in the website kit. **This is a substitution** — no icon set was provided; Lucide was chosen for its soft, hand-drawn-adjacent feel.
- Common glyphs in use: `anchor`, `sailboat`, `map-pin`, `clock`, `shopping-bag`, `mail`, `menu`, `search`, `instagram`.
- **Emoji:** not used as UI icons. A single `✦` unicode star appears as a decorative separator in the category marquee — decorative only.
- **No custom SVG icon drawing.** Use Lucide; if a needed glyph is missing, pick the closest Lucide equivalent rather than hand-rolling one.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

**Components** (`window.WishingStonesDesignSystem_953619`)
- `components/forms/` — **Button**, **IconButton**, **Input**
- `components/content/` — **Card**, **Badge**, **Tag**
- `components/brand/` — **TapeLabel**, **ImageFrame**

**UI kits**
- `ui_kits/website/` — interactive 5-screen marketing site (Home, Visit, The Rooms, The Map, Shop). Carries the "slightly chaotic like the building" layout language: tilted frames, taped notes, photo props peeking in from section edges (`PropPeek`), messy white string lights (`WhiteLights`), driftwood sticks and sea glass (`Driftwood`, `SeaGlass`), the crate-and-board wordmark (`SignBoard`), and drag-in `<image-slot>` frames awaiting real photos.

### Intentional additions
The brief provided no component inventory, so a standard small set was authored, plus two brand-specific pieces that carry the "makeshift island" personality:
- **TapeLabel** — a handwritten note on a strip of torn tape (prices, hours, asides). The signature quirky touch.
- **ImageFrame** — a matted / driftwood picture frame for gallery works and island photos.

---

## Substitutions to confirm (please send real files!)
1. **Fonts** — Bricolage Grotesque, Newsreader, Caveat are Google Fonts stand-ins; **La Belle Aurore** stands in for the hand-carved sign script (closest match to the real sign's slanted, looping hand). If the studio has licensed brand fonts, send them and I'll swap the `@font-face`s.
2. **Logo** — none provided; brand name is set in Bricolage Grotesque. If a real mark exists, drop it in `assets/`.
3. **Icons** — Lucide (CDN) substitution.
4. **Photography** — all imagery is coastal gradient placeholder. Real Tancook photos will transform this.
