// Wishing Stones — shared bits for the website UI kit.
// Real Tancook Island photography + hand-me-down props cut from the studio's own photos.
const WS = window.WishingStonesDesignSystem_953619;

const PHOTOS = Object.assign({
  storefront: "assets/storefront.jpg",
  signCrate: "assets/sign-crate.png",        // the real sign in its crate
  stonesRow: "assets/stones-row.png",        // wishing stones on the crate ledge
  lamp: "assets/lamp.png",                   // stained-glass lamp in the gallery
  portraitCorner: "assets/portrait-corner.png", // corner of the old family portrait
  bookSpines: "assets/book-spines.png",      // well-loved spines in the library
  birdhouse: "assets/birdhouse.png",         // birdhouse on weathered shingles
  shinglesWindow: "assets/shingles-peach.png", // upstairs window + sconces
  sidingBlue: "assets/siding-blue.png",      // periwinkle boards + iron curls
}, window.WS_PHOTOS || {});

// Deterministic little random — so the "mess" is the same mess every load.
function seededRand(seed) {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// Striped placeholder for imagery we don't have yet — with a monospace note
// so it's obvious a real photo drops in here.
function stripe(label, w = 480, h = 600) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
    `<defs><pattern id="p" width="18" height="18" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">` +
    `<rect width="18" height="18" fill="#E9DBBF"/><rect width="9" height="18" fill="#E2D2B2"/></pattern></defs>` +
    `<rect width="100%" height="100%" fill="url(#p)"/>` +
    `<rect x="10" y="10" width="${w - 20}" height="${h - 20}" fill="none" stroke="#B7A47F" stroke-dasharray="3 7"/>` +
    `<text x="50%" y="50%" fill="#6E5F4C" font-family="ui-monospace,Menlo,monospace" font-size="15" text-anchor="middle" dominant-baseline="middle">${label}</text>` +
    `</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg).replace(/[()']/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
}

// Lucide icon helper
function Icon({ name, size = 20, color }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      window.lucide && lucide.createIcons({ attrs: { width: size, height: size, stroke: color || "currentColor" } });
    }
  });
  return React.createElement("span", { ref, style: { display: "inline-flex", color } });
}

// Eyebrow label (uppercase, tracked)
function Eyebrow({ children, color = "var(--brand-green)" }) {
  return <div style={{ fontFamily: "var(--font-body)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.14em", color, marginBottom: 12 }}>{children}</div>;
}

// Handwritten aside — the "island magic" voice, tilted like a scrawled note
function Scrawl({ children, color = "var(--accent)", size = 26, rotate = -2, style }) {
  return <div style={{ fontFamily: "var(--font-hand)", fontWeight: 600, color, fontSize: size, lineHeight: 1.1, transform: `rotate(${rotate}deg)`, ...style }}>{children}</div>;
}

// The wordmark, set like the carved wooden sign out front: script letters on a
// weathered grey board, resting in its sea-green crate with the wishing stones.
function SignBoard({ children = "Wishing Stones", size = "clamp(3rem, 5.6vw, 4.5rem)", tilt = -1.2, stones = true, as = "h1", style }) {
  const H = as;
  return (
    <div style={{ display: "inline-block", transform: `rotate(${tilt}deg)`, maxWidth: "100%", ...style }}>
      <div className="wood-grain" style={{ background: "linear-gradient(180deg, #CEDCBF, #B9C9A6)", border: "1px solid #9EAF8C", borderRadius: 6, padding: "13px 15px 12px", boxShadow: "var(--shadow-lift), inset 0 0 0 6px rgba(255,255,255,0.16), inset 0 -12px 26px rgba(59,50,38,0.20)" }}>
        <div className="wood-grain" style={{ background: "linear-gradient(180deg, #B6ADA0 0%, #A79E8E 55%, #92897A 100%)", borderRadius: 3, border: "1px solid #857C6D", boxShadow: "inset 0 2px 6px rgba(255,255,255,0.28), inset 0 -4px 10px rgba(59,50,38,0.30)", padding: "8px 26px 16px" }}>
          <H style={{ margin: 0, fontFamily: "var(--font-sign)", fontWeight: 400, fontSize: size, lineHeight: 1.02, color: "#33302A", whiteSpace: "nowrap", transform: "rotate(-0.6deg)", WebkitTextStroke: "0.6px #33302A", textShadow: "0 1px 0 rgba(255,255,255,0.22)" }}>{children}</H>
        </div>
        {stones && <img src={PHOTOS.stonesRow} alt="" aria-hidden="true" style={{ display: "block", width: "100%", height: 50, objectFit: "cover", borderRadius: 3, marginTop: 10, border: "1px solid rgba(122,113,95,0.5)" }} />}
      </div>
    </div>
  );
}

// A photo prop peeking in from the edge of a section — the spine of an old
// book, the corner of a picture, a lamp. Multiply-blended so it sits "printed"
// on the wall color, softly masked so it has no hard photo edges.
function PropPeek({ src, w = 180, rotate = 0, opacity = 0.85, blend = "multiply", mask, style }) {
  const m = mask || "radial-gradient(closest-side, #000 55%, transparent 97%)";
  return (
    <div aria-hidden="true" style={{ position: "absolute", pointerEvents: "none", zIndex: 1, transform: `rotate(${rotate}deg)`, ...style }}>
      <img src={src} width={w} alt="" style={{ display: "block", opacity, mixBlendMode: blend, WebkitMaskImage: m, maskImage: m }} />
    </div>
  );
}

// String-light garland — a cozy swag of warm bulbs. Echoes the shop interior,
// where lights are strung across every beam.
function StringLights({ height = 52, style }) {
  const swags = 9, amp = 15, base = 7, n = swags * 3;
  const bulbColors = ["var(--lamp-amber)", "var(--lamp-amber)", "var(--coral-500)", "var(--lamp-amber)", "var(--seaglass-400)", "var(--lamp-amber)", "var(--rosehip-500)", "var(--lamp-amber)"];
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const x = (i / n) * 1000;
    const frac = ((i / n) * swags) % 1;
    pts.push([x, base + amp * Math.sin(Math.PI * frac)]);
  }
  const d = "M " + pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L ");
  return (
    <div aria-hidden="true" style={{ position: "relative", height, width: "100%", overflow: "hidden", pointerEvents: "none", ...style }}>
      <svg viewBox={`0 0 1000 ${height}`} preserveAspectRatio="none" width="100%" height={height} style={{ position: "absolute", inset: 0 }}>
        <path d={d} fill="none" stroke="var(--driftwood-700)" strokeWidth="1.4" />
      </svg>
      {pts.map((p, i) => (
        <span key={i} style={{ position: "absolute", left: p[0] / 10 + "%", top: p[1], width: 11, height: 11, marginLeft: -5.5, borderRadius: "50%", background: bulbColors[i % bulbColors.length], boxShadow: "0 0 9px 2px rgba(231,178,102,0.5)" }} />
      ))}
    </div>
  );
}

// Messy white pinpoint lights — the tangled warm-white strings from inside the
// shop. Uneven nails, uneven sag, the odd bulb dangling on its own bit of wire.
function WhiteLights({ height = 60, seed = 3, style }) {
  const { path, bulbs, nails, pendants } = React.useMemo(() => {
    const rnd = seededRand(seed);
    const nails = [{ x: 0, y: 5 + rnd() * 16 }];
    let x = 0;
    while (x < 920) { x += 110 + rnd() * 150; nails.push({ x: Math.min(x, 1000), y: 4 + rnd() * 20 }); }
    if (nails[nails.length - 1].x < 1000) nails.push({ x: 1000, y: 6 + rnd() * 14 });
    const pts = [];
    for (let i = 0; i < nails.length - 1; i++) {
      const a = nails[i], b = nails[i + 1];
      const sag = Math.max(a.y, b.y) + 12 + rnd() * (height - 34);
      for (let t = 0; t <= 1.001; t += 0.1) {
        const mt = 1 - t;
        pts.push([mt * mt * a.x + 2 * mt * t * ((a.x + b.x) / 2 + (rnd() - 0.5) * 24) + t * t * b.x,
                  mt * mt * a.y + 2 * mt * t * (sag * 2 - (a.y + b.y) / 2) + t * t * b.y]);
      }
    }
    const path = "M " + pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L ");
    const bulbs = pts.filter((_, i) => i % 2 === 1);
    const pendants = [];
    for (let k = 0; k < 3; k++) {
      const p = pts[Math.floor(rnd() * pts.length)];
      pendants.push({ x: p[0], y: p[1], len: 9 + rnd() * 12 });
    }
    return { path, bulbs, nails, pendants };
  }, [seed, height]);
  return (
    <div aria-hidden="true" style={{ position: "relative", height, width: "100%", overflow: "hidden", pointerEvents: "none", ...style }}>
      <svg viewBox={`0 0 1000 ${height}`} preserveAspectRatio="none" width="100%" height={height} style={{ position: "absolute", inset: 0 }}>
        <path d={path} fill="none" stroke="rgba(88,76,60,0.5)" strokeWidth="1.1" />
        {pendants.map((p, i) => <line key={i} x1={p.x} y1={p.y} x2={p.x + 2} y2={p.y + p.len} stroke="rgba(88,76,60,0.5)" strokeWidth="1" />)}
      </svg>
      {nails.map((p, i) => (
        <span key={"n" + i} style={{ position: "absolute", left: p.x / 10 + "%", top: p.y - 1, width: 3, height: 3, borderRadius: "50%", background: "rgba(88,76,60,0.7)" }} />
      ))}
      {bulbs.map((p, i) => (
        <span key={i} style={{ position: "absolute", left: p[0] / 10 + "%", top: p[1] - 2, width: 4.5, height: 4.5, marginLeft: -2, borderRadius: "50%", background: "#FFFBEE", boxShadow: "0 0 7px 2.5px rgba(255,246,215,0.9)" }} />
      ))}
      {pendants.map((p, i) => (
        <span key={"p" + i} style={{ position: "absolute", left: p.x / 10 + "%", top: p.y + p.len - 2, width: 5, height: 5, marginLeft: -2, borderRadius: "50%", background: "#FFFBEE", boxShadow: "0 0 8px 3px rgba(255,246,215,0.9)" }} />
      ))}
    </div>
  );
}

// A weathered driftwood stick — organic edges via a turbulence displacement.
function Driftwood({ w = 320, rotate = 0, flip = false, opacity = 1, style }) {
  const id = "dw" + React.useId().replace(/[:]/g, "");
  return (
    <div aria-hidden="true" style={{ pointerEvents: "none", display: "inline-block", transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`, opacity, lineHeight: 0, ...style }}>
      <svg width={w} height={w * 0.085} viewBox="0 0 420 36">
        <defs>
          <linearGradient id={id + "g"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C9BCA4" /><stop offset="0.55" stopColor="#AE9F85" /><stop offset="1" stopColor="#8D7F67" />
          </linearGradient>
          <filter id={id + "f"} x="-5%" y="-40%" width="110%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.021 0.09" numOctaves="2" seed="7" result="t" />
            <feDisplacementMap in="SourceGraphic" in2="t" scale="7" />
          </filter>
        </defs>
        <g filter={`url(#${id}f)`}>
          <path d="M4,16 C60,7 130,20 225,11 C300,5 360,17 415,10 L416,15 C370,24 305,13 240,19 C150,27 75,15 5,21 Z" fill={`url(#${id}g)`} />
          <path d="M30,15 C90,11 150,17 210,13 M120,19 C180,21 250,15 330,16" fill="none" stroke="rgba(110,95,76,0.45)" strokeWidth="0.8" />
          <ellipse cx="150" cy="16" rx="4.5" ry="2.2" fill="rgba(110,95,76,0.5)" />
          <ellipse cx="316" cy="14" rx="3" ry="1.6" fill="rgba(110,95,76,0.4)" />
        </g>
      </svg>
    </div>
  );
}

// A little scatter of frosted sea glass — like the case inside, minus the case.
function SeaGlass({ w = 130, seed = 5, n = 5, style }) {
  const shapes = [
    "M-16,-2 Q-14,-14 0,-15 Q13,-13 15,-3 Q16,9 2,13 Q-12,12 -16,-2 Z",
    "M-18,-6 Q-8,-16 6,-13 Q18,-8 16,3 Q12,14 -4,13 Q-16,10 -18,-6 Z",
    "M-13,-9 Q0,-16 10,-10 Q17,-2 12,8 Q3,15 -8,11 Q-16,4 -13,-9 Z",
  ];
  const colors = ["#A8D8C4", "#7FBFC9", "#5E9B87", "#E9EDE4", "#8FB7D8"];
  const pebbles = React.useMemo(() => {
    const rnd = seededRand(seed);
    const out = []; let x = 18;
    for (let i = 0; i < n; i++) {
      out.push({ x, y: 38 + (rnd() - 0.5) * 8, s: 0.65 + rnd() * 0.5, r: rnd() * 360, shape: shapes[Math.floor(rnd() * 3)], c: colors[Math.floor(rnd() * colors.length)] });
      x += 26 + rnd() * 16;
    }
    return out;
  }, [seed, n]);
  return (
    <div aria-hidden="true" style={{ pointerEvents: "none", lineHeight: 0, ...style }}>
      <svg width={w} height={w * 0.42} viewBox="0 0 200 56">
        {pebbles.map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.r}) scale(${p.s})`}>
            <path d={p.shape} fill={p.c} fillOpacity="0.88" stroke="rgba(59,50,38,0.18)" strokeWidth="1" />
            <ellipse cx="-4" cy="-6" rx="5" ry="3" fill="rgba(255,255,255,0.5)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

// A row of scalloped trim, like the fascia boards on the blue part of the building.
function Scallop({ color = "var(--facade-blue-deep)", size = 22, height = 15, style }) {
  return <div aria-hidden="true" style={{ height, backgroundImage: `radial-gradient(circle at ${size / 2}px 0px, ${color} ${size / 2 - 1}px, rgba(0,0,0,0) ${size / 2}px)`, backgroundSize: `${size}px ${height}px`, backgroundRepeat: "repeat-x", ...style }} />;
}

Object.assign(window, { WS, PHOTOS, stripe, seededRand, Icon, Eyebrow, Scrawl, SignBoard, PropPeek, StringLights, WhiteLights, Driftwood, SeaGlass, Scallop });
