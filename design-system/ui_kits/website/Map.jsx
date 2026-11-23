// The Map screen — the world map Hilary hangs from the ceiling, pinned with
// every place her visitors have come from.
function CeilingMap({ go }) {
  const { Button, TapeLabel, Card } = WS;
  const [tip, setTip] = React.useState(null);

  // Hand-drawn-from-memory continents (like everything else here, close enough).
  const land = [
    "M75,95 Q100,60 160,62 Q205,55 250,75 Q300,80 318,100 Q335,112 328,126 Q345,132 338,150 Q322,168 305,162 Q300,185 282,196 Q268,214 252,208 Q258,232 274,244 Q262,254 246,246 Q225,232 214,214 Q195,205 178,190 Q150,175 130,150 Q95,130 75,95 Z",
    "M244,246 L254,250 Q244,266 226,272 L216,266 Q230,256 244,246 Z",
    "M300,272 Q322,258 340,268 Q358,278 356,300 Q368,322 356,348 Q346,378 332,398 Q324,416 314,422 Q302,410 302,386 Q292,356 294,326 Q288,296 300,272 Z",
    "M382,72 Q392,50 420,46 Q444,50 446,68 Q440,88 420,94 Q396,98 382,72 Z",
    "M492,102 Q498,92 505,97 Q507,108 500,116 Q491,115 492,102 Z",
    "M505,122 Q518,104 540,100 Q562,96 578,106 Q590,114 585,126 Q572,138 556,140 Q538,148 522,144 Q508,138 505,122 Z",
    "M540,96 Q542,74 558,62 Q570,58 574,70 Q568,88 556,98 Q546,102 540,96 Z",
    "M498,168 Q515,152 545,152 Q572,156 582,172 Q596,190 588,212 Q600,238 588,266 Q574,292 560,308 Q548,330 536,344 Q522,330 520,300 Q506,268 506,240 Q496,204 498,168 Z",
    "M580,104 Q600,80 645,72 Q690,60 740,68 Q800,64 845,80 Q885,88 905,108 Q922,124 908,138 Q893,148 872,144 Q880,162 862,168 Q842,174 828,164 Q818,184 798,186 Q780,200 762,192 Q748,206 730,200 Q712,214 698,204 Q680,208 668,196 Q650,192 640,178 Q618,170 608,152 Q590,140 585,126 Q578,114 580,104 Z",
    "M695,192 Q708,206 706,228 Q700,248 690,254 Q680,238 682,214 Q686,200 695,192 Z",
    "M755,200 Q768,214 764,232 Q756,244 748,240 Q744,222 748,208 Z",
    "M862,138 Q874,140 882,152 Q888,162 880,166 Q870,158 862,146 Z",
    "M852,332 Q872,314 902,316 Q928,322 934,344 Q930,366 912,376 Q888,384 866,376 Q848,362 852,332 Z",
    "M950,384 Q958,378 962,384 Q960,394 954,398 Q948,392 950,384 Z",
    "M958,398 Q966,394 969,402 Q964,412 957,410 Q954,402 958,398 Z",
  ];
  const islands = [[608, 300, 4, 9], [780, 262, 6, 2.5], [800, 268, 5, 2.2], [762, 266, 4, 2.2], [826, 252, 3, 4]];

  const pinColors = ["var(--coral-500)", "var(--tide-500)", "var(--sunwash-400)", "var(--rosehip-500)", "var(--seaglass-600)"];
  const pins = [
    [303, 137, "Boston, Massachusetts"],
    [294, 143, "New York City"],
    [279, 134, "Toronto, Ontario"],
    [158, 118, "Vancouver, BC"],
    [225, 204, "Mexico City"],
    [338, 370, "Buenos Aires"],
    [352, 332, "São Paulo"],
    [439, 75, "Reykjavík"],
    [500, 111, "London"],
    [506, 120, "Paris — came for the sea glass"],
    [514, 108, "Amsterdam"],
    [532, 121, "Munich"],
    [530, 87, "Oslo"],
    [475, 146, "Lisbon"],
    [585, 114, "Kyiv"],
    [538, 324, "Cape Town"],
    [578, 232, "Nairobi"],
    [702, 205, "Mumbai"],
    [853, 152, "Seoul"],
    [888, 157, "Tokyo — stayed all afternoon"],
    [920, 368, "Sydney"],
    [960, 402, "Auckland"],
  ];

  return (
    <div>
      {/* Intro */}
      <section style={{ maxWidth: "var(--maxw-content)", margin: "0 auto", padding: "var(--space-8) var(--gutter) var(--space-6)", textAlign: "center", position: "relative" }}>
        <Eyebrow>Mind your head</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--fs-h1)", color: "var(--sea-900)", margin: "0 0 12px", transform: "rotate(-0.5deg)" }}>The map on the ceiling</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "56ch", margin: "0 auto" }}>Look up. Strung between the beams hangs an old world map, and every pin in it is a visitor — each one pressed in by someone who found their way across the bay to our little door.</p>
      </section>

      {/* The hanging map */}
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "0 var(--gutter) var(--space-8)", position: "relative" }}>
        <PropPeek src={PHOTOS.lamp} w={130} style={{ right: -26, top: -84 }} opacity={0.6} />
        <div style={{ position: "relative", transform: "rotate(-1.2deg)" }}>
          {/* rod + strings */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: -6, position: "relative", zIndex: 2 }}>
            <Driftwood w={520} rotate={0.8} />
          </div>
          <svg aria-hidden="true" viewBox="0 0 1000 60" style={{ display: "block", width: "100%", height: 42, marginTop: -14 }}>
            <line x1="330" y1="6" x2="120" y2="60" stroke="rgba(88,76,60,0.55)" strokeWidth="1.4" />
            <line x1="670" y1="6" x2="880" y2="60" stroke="rgba(88,76,60,0.55)" strokeWidth="1.4" />
            <line x1="500" y1="2" x2="500" y2="60" stroke="rgba(88,76,60,0.4)" strokeWidth="1.2" />
          </svg>
          {/* the map itself */}
          <div className="wood-grain" style={{ position: "relative", background: "linear-gradient(160deg, #EFE5C9, #E6D9B8 60%, #DECFAC)", border: "1px solid var(--driftwood-500)", borderRadius: 4, boxShadow: "var(--shadow-lift)", padding: "18px 18px 10px" }}>
            <div style={{ position: "absolute", top: 10, left: 26 }}><TapeLabel tone="washi" rotate={-5}>everyone who's found us</TapeLabel></div>
            <div style={{ position: "absolute", top: 8, right: 34, zIndex: 3 }}><TapeLabel tone="coral" rotate={4}>add yours when you visit</TapeLabel></div>
            <svg viewBox="0 0 1000 520" style={{ display: "block", width: "100%", height: "auto" }}>
              {/* creases in the old paper */}
              <g stroke="rgba(110,95,76,0.16)" strokeWidth="1">
                <line x1="250" y1="0" x2="250" y2="520" /><line x1="500" y1="0" x2="500" y2="520" /><line x1="750" y1="0" x2="750" y2="520" /><line x1="0" y1="260" x2="1000" y2="260" />
              </g>
              {/* faint graticule */}
              <g stroke="rgba(110,95,76,0.10)" strokeWidth="0.7">
                {[65, 130, 195, 325, 390, 455].map((y) => <line key={y} x1="0" y1={y} x2="1000" y2={y} />)}
                {[125, 375, 625, 875].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="520" />)}
              </g>
              {/* land, drawn from memory */}
              <g fill="#D9C69C" stroke="rgba(110,95,76,0.75)" strokeWidth="1.4" strokeLinejoin="round">
                {land.map((d, i) => <path key={i} d={d} />)}
                {islands.map(([cx, cy, rx, ry], i) => <ellipse key={"i" + i} cx={cx} cy={cy} rx={rx} ry={ry} />)}
              </g>
              <path d="M150,505 Q400,492 620,502 Q780,510 870,504" fill="none" stroke="rgba(110,95,76,0.3)" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
              <text x="828" y="240" fontFamily="var(--font-hand)" fontSize="20" fill="rgba(110,95,76,0.65)" transform="rotate(-4 828 240)">here be visitors</text>
              {/* visitor pins */}
              {pins.map(([x, y, label], i) => (
                <g key={label} transform={`translate(${x} ${y})`} style={{ cursor: "pointer" }}
                   onMouseEnter={() => setTip({ x, y, label })} onMouseLeave={() => setTip(null)}>
                  <ellipse cx="1.6" cy="3" rx="4.6" ry="1.7" fill="rgba(59,50,38,0.3)" />
                  <circle r="4.8" fill={pinColors[i % pinColors.length]} stroke="rgba(59,50,38,0.5)" strokeWidth="0.9" />
                  <circle cx="-1.4" cy="-1.4" r="1.4" fill="rgba(255,255,255,0.65)" />
                  <circle r="13" fill="transparent" />
                </g>
              ))}
              {/* us */}
              <g transform="translate(321 131)" style={{ cursor: "pointer" }} onMouseEnter={() => setTip({ x: 321, y: 131, label: "Big Tancook Island — you are here", us: true })} onMouseLeave={() => setTip(null)}>
                <path d="M0,-9 L2.6,-2.8 L9,-2.6 L4,1.8 L5.8,8.2 L0,4.6 L-5.8,8.2 L-4,1.8 L-9,-2.6 L-2.6,-2.8 Z" fill="var(--coral-500)" stroke="#8C3B24" strokeWidth="1" />
              </g>
              <text x="345" y="112" fontFamily="var(--font-hand)" fontSize="21" fill="var(--coral-600)" transform="rotate(-5 345 112)">us!</text>
            </svg>
            {tip && (
              <div style={{ position: "absolute", left: (tip.x / 10) + "%", top: (tip.y / 520) * 92 + "%", transform: "translate(-50%, -135%) rotate(-2deg)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-md)", borderRadius: 4, padding: "6px 12px", fontFamily: "var(--font-hand)", fontSize: 19, color: tip.us ? "var(--coral-600)" : "var(--sea-900)", pointerEvents: "none", whiteSpace: "nowrap", zIndex: 5 }}>{tip.label}</div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, alignItems: "center", marginTop: 26, flexWrap: "wrap" }}>
          <Scrawl rotate={-1.5} size={22} color="var(--text-muted)">forty-some countries — hover the pins</Scrawl>
        </div>
      </section>

      {/* photos of the real thing */}
      <section className="shingle-wall" style={{ background: "var(--surface-butter)", padding: "var(--space-8) 0 var(--space-9)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
            <Scrawl rotate={-2} size={23}>the real one's better, obviously</Scrawl>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: "var(--sea-900)", margin: "4px 0 0", transform: "rotate(-0.5deg)" }}>Photos of the real map</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "var(--space-6)", alignItems: "start" }}>
            <div style={{ transform: "rotate(-1deg)", position: "relative" }}>
              <Driftwood w={150} rotate={-6} style={{ position: "absolute", top: -18, left: -20, zIndex: 4 }} />
              <div style={{ background: "var(--surface-card)", padding: 10, borderRadius: 4, boxShadow: "var(--shadow-md)", border: "1px solid var(--border-hairline)" }}>
                <image-slot id="slot-map-photo" shape="rect" placeholder="the map, hanging overhead" style={{ width: "100%", height: 340, display: "block" }}></image-slot>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--driftwood-700)", textAlign: "center", paddingTop: 8 }}>look up when you're in the gallery</div>
              </div>
            </div>
            <div style={{ transform: "rotate(1.4deg)", marginTop: 34 }}>
              <div style={{ background: "var(--surface-card)", padding: 10, borderRadius: 4, boxShadow: "var(--shadow-md)", border: "1px solid var(--border-hairline)" }}>
                <image-slot id="slot-map-pin" shape="rect" placeholder="a new pin going in" style={{ width: "100%", height: 280, display: "block" }}></image-slot>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--driftwood-700)", textAlign: "center", paddingTop: 8 }}>the newest pin</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--space-7)" }}>
            <Button variant="primary" size="lg" onClick={() => go("Visit")}><Icon name="map-pin" size={20} /> Come add your pin</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { CeilingMap });
