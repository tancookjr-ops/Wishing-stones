# Website UI kit — Wishing Stones

An interactive click-through of the public marketing site. Four screens, switched via the top nav:

- **Home** (`Home.jsx`) — hero wordmark + tagline, "gallery / museum / library / shop" marquee, a three-up preview of shop goods, and a "Meet Hilary" band.
- **Visit** (`Visit.jsx`) — hours & tides, ferry directions, a map placeholder, and a newsletter sign-up.
- **Gallery** (`Gallery.jsx`) — category-filterable grid of framed works (`ImageFrame`).
- **Shop** (`Shop.jsx`) — filterable product grid with a working add-to-basket counter.

`Nav.jsx` holds the sticky header + dark footer. `shared.jsx` provides the coastal gradient photo placeholders (`PHOTOS`), the Lucide `Icon` helper, and the `Eyebrow` label.

## Composition
Screens compose the design-system primitives (`Button`, `IconButton`, `Input`, `Card`, `Badge`, `Tag`, `TapeLabel`, `ImageFrame`) from `window.WishingStonesDesignSystem_953619` — they do not re-implement them.

## Placeholders
All imagery is a warm coastal CSS/SVG gradient standing in for real Tancook Island photography. Swap `PHOTOS` in `shared.jsx` for real photos when available.

Open `index.html` to run it.
