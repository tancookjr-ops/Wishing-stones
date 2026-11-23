// Home screen — set against the building's own painted walls: peach shingles,
// weathered boards, periwinkle siding. Slightly chaotic on purpose, like the place.
function Home({ go }) {
  const { Button, Badge, TapeLabel, ImageFrame, Card } = WS;
  const rooms = [
    [PHOTOS.giftShop, "the gallery", -3, 0],
    [PHOTOS.library, "the library", 2.5, 44],
    [PHOTOS.museumTable, "the museum", -2, 10],
    [PHOTOS.hearthRoom, "by the fire", 3.5, 52],
  ];
  return (
    <div>
      {/* HERO — the peach-shingle wall, with the sign itself as the title */}
      <section className="shingle-wall" style={{ position: "relative", overflow: "hidden", background: "var(--facade-peach-soft)" }}>
        <WhiteLights height={56} seed={11} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-24%", right: "-6%", width: 660, height: 660, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,240,205,0.5), transparent 66%)", pointerEvents: "none" }}></div>
        <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "var(--space-5) var(--gutter) var(--space-9)", display: "grid", gridTemplateColumns: "1.04fr 0.96fr", gap: "var(--space-8)", alignItems: "center", position: "relative" }}>
          <div>
            <Scrawl rotate={-2} size={29} style={{ marginBottom: 14, color: "var(--coral-600)" }}>welcome to the island's happiest little building</Scrawl>
            <SignBoard style={{ marginBottom: 20 }}>Wishing Stones</SignBoard>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.55, color: "var(--text-body)", maxWidth: "42ch", margin: "0 0 24px" }}>Part gallery, part museum, part library, part island gift shop — and all quirky Tancook charm. Come in, poke around, and stay a while.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Button variant="primary" size="lg" onClick={() => go("Visit")}><Icon name="anchor" size={20} /> Plan your visit</Button>
              <Button variant="outline" size="lg" onClick={() => go("Rooms")}>Wander the rooms</Button>
            </div>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 21, color: "var(--coral-600)", marginTop: 20, transform: "rotate(-1.5deg)" }}>open most days, 11–4 · just push the door</div>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center", minHeight: 430 }}>
            <ImageFrame src={PHOTOS.giftShop} alt="Inside the gallery" caption="mind the string lights" driftwood tilt={-2.5} style={{ width: "100%", maxWidth: 458, position: "relative", zIndex: 2 }} />
            <ImageFrame src={PHOTOS.hearthRoom} alt="By the fire" caption="fire's lit" tilt={3.5} style={{ width: 208, position: "absolute", bottom: -22, left: -12, zIndex: 3 }} />
            <div style={{ position: "absolute", top: -6, right: 4, zIndex: 4 }}><TapeLabel tone="coral" rotate={-7}>come on in!</TapeLabel></div>
            <SeaGlass w={120} seed={9} n={4} style={{ position: "absolute", bottom: 2, right: 26, zIndex: 3 }} />
          </div>
        </div>
        <Driftwood w={280} rotate={1.2} style={{ position: "absolute", bottom: 6, left: "calc(var(--gutter) - 18px)", opacity: 0.85 }} />
      </section>
      <Scallop color="var(--facade-peach-deep)" style={{ opacity: 0.55 }} />

      {/* STOREFRONT — you can't miss it */}
      <section style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "var(--space-8) var(--gutter) var(--space-8)", position: "relative" }}>
        <h2 style={{ textAlign: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--fs-h2)", letterSpacing: "-0.02em", color: "var(--sea-900)", margin: "0 0 6px" }}>Island magic, washed <span style={{ color: "var(--brand-green)" }}>ashore</span>.</h2>
        <Scrawl rotate={-1.5} size={22} color="var(--text-muted)" style={{ textAlign: "center", marginBottom: 26 }}>one whale mural, three colours of paint, no two shingles alike</Scrawl>
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <ImageFrame src={PHOTOS.storefront} alt="The Wishing Stones storefront on Big Tancook Island" caption="151 — you can't miss it" driftwood tilt={-1} style={{ width: "100%", maxWidth: 980 }} />
          <div style={{ position: "absolute", top: 16, right: "9%", zIndex: 3 }}><TapeLabel tone="sun" rotate={5}>painted by island hands</TapeLabel></div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div style={{ background: "var(--brand-green)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, padding: "12px 0", display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
        <span>✦ gallery</span><span>✦ museum</span><span>✦ library</span><span>✦ gift shop</span><span>✦ the ceiling map</span><span>✦ community hub</span>
      </div>

      {/* WANDER THE ROOMS — weathered yellow shingles, birdhouse and all */}
      <section className="shingle-wall" style={{ background: "var(--surface-butter)", padding: "var(--space-9) 0", position: "relative", overflow: "hidden" }}>
        <PropPeek src={PHOTOS.birdhouse} w={168} style={{ left: -30, bottom: 30 }} opacity={0.75} />
        <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "0 var(--gutter)", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-7)" }}>
            <Eyebrow>Under one funny old roof</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: "var(--sea-900)", margin: "0 0 10px", transform: "rotate(-0.5deg)" }}>A whole building to get lost in</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", color: "var(--text-muted)", maxWidth: "56ch", margin: "0 auto" }}>Push open the door and you'll find framed birds and driftwood, a hundred years of island keepsakes, walls of well-loved books, and armchairs pulled up to a warm wood stove.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)", alignItems: "start", marginBottom: "var(--space-7)" }}>
            {rooms.map(([src, cap, tilt, offset]) => (
              <div key={cap} style={{ marginTop: offset }}>
                <ImageFrame src={src} alt={cap} caption={cap} tilt={tilt} style={{ width: "100%" }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="secondary" onClick={() => go("Rooms")} style={{ whiteSpace: "nowrap" }}>Take the tour <Icon name="arrow-right" size={18} /></Button>
          </div>
        </div>
      </section>

      {/* AROUND THE BUILDING, LATELY — periwinkle siding, drop-in photo frames */}
      <section style={{ background: "var(--facade-blue-soft)", backgroundImage: "repeating-linear-gradient(90deg, rgba(47,58,94,0.07) 0 2px, rgba(0,0,0,0) 2px 64px)", position: "relative", overflow: "hidden", paddingBottom: "var(--space-9)" }}>
        <Scallop color="var(--facade-blue)" />
        <WhiteLights height={54} seed={23} />
        <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "var(--space-5) var(--gutter) 0", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: "var(--space-6)" }}>
            <div>
              <Scrawl rotate={-2} size={24} color="var(--facade-blue-deep)">no two visits look the same</Scrawl>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: "var(--sea-900)", margin: "4px 0 0", transform: "rotate(-0.6deg)" }}>Around the building, lately</h2>
            </div>
            <Scrawl rotate={1.5} size={20} color="var(--sea-700)">got a photo from your visit? drag it into a frame ↓</Scrawl>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "var(--space-5)", alignItems: "start" }}>
            <div style={{ gridColumn: "span 3", transform: "rotate(-1.2deg)", position: "relative" }}>
              <Driftwood w={170} rotate={-7} style={{ position: "absolute", top: -20, left: -24, zIndex: 4 }} />
              <div style={{ background: "var(--surface-card)", padding: 10, borderRadius: 4, boxShadow: "var(--shadow-md)", border: "1px solid var(--border-hairline)" }}>
                <image-slot id="slot-gathering" shape="rect" placeholder="a gathering by the stove" style={{ width: "100%", height: 320, display: "block" }}></image-slot>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--driftwood-700)", textAlign: "center", paddingTop: 8 }}>games night, most Fridays</div>
              </div>
            </div>
            <div style={{ gridColumn: "span 2", transform: "rotate(1.6deg)", marginTop: 30 }}>
              <div style={{ background: "var(--surface-card)", padding: 10, borderRadius: 4, boxShadow: "var(--shadow-md)", border: "1px solid var(--border-hairline)", position: "relative" }}>
                <image-slot id="slot-tarot" shape="rect" placeholder="the tarot spread" style={{ width: "100%", height: 300, display: "block" }}></image-slot>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--driftwood-700)", textAlign: "center", paddingTop: 8 }}>ask Hilary about the cards</div>
                <SeaGlass w={104} seed={31} n={4} style={{ position: "absolute", bottom: -26, right: -14 }} />
              </div>
            </div>
            <div style={{ gridColumn: "span 1", marginTop: 56, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
              <TapeLabel tone="washi" rotate={-4}>stones are free</TapeLabel>
              <TapeLabel tone="coral" rotate={3}>events all year</TapeLabel>
              <Scrawl rotate={-6} size={19} color="var(--sea-700)" style={{ textAlign: "center" }}>tea's usually on</Scrawl>
            </div>
            <div style={{ gridColumn: "2 / span 3", transform: "rotate(-0.8deg)", marginTop: -6 }}>
              <div style={{ background: "var(--surface-card)", padding: 10, borderRadius: 4, boxShadow: "var(--shadow-md)", border: "1px solid var(--border-hairline)" }}>
                <image-slot id="slot-lately" shape="rect" placeholder="something from this week" style={{ width: "100%", height: 240, display: "block" }}></image-slot>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--driftwood-700)", textAlign: "center", paddingTop: 8 }}>this week, probably</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE A LITTLE HOME */}
      <section className="shelf-top" style={{ background: "var(--floor-sage-soft)", padding: "var(--space-9) 0", position: "relative", overflow: "hidden" }}>
        <PropPeek src={PHOTOS.bookSpines} w={190} rotate={1.5} style={{ right: -40, top: "16%" }} opacity={0.6} />
        <div style={{ maxWidth: "var(--maxw-content)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-8)", alignItems: "center", position: "relative" }}>
        <div>
          <Eyebrow color="var(--accent)">Made & found on the island</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: "var(--sea-900)", margin: "0 0 16px", transform: "rotate(-0.5deg)" }}>Take a little of it home</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--text-body)", maxWidth: "46ch", marginBottom: 18 }}>Most of our treasures are one-of-a-kind and only found in person — but a handful of island-made things we're glad to send anywhere: Hilary's books, photo prints, Verta's hooked rugs, Tancook botanicals and more.</p>
          <Button variant="primary" onClick={() => go("Shop")}>Visit the shop <Icon name="arrow-right" size={18} /></Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ImageFrame src={PHOTOS.gamesNook} alt="Inside the shop" caption="found on the shelves" driftwood tilt={2} style={{ width: "100%", maxWidth: 380 }} />
        </div>
        </div>
      </section>

      {/* MEET HILARY */}
      <section style={{ background: "var(--wall-rose-soft)", padding: "var(--space-9) 0", position: "relative", overflow: "hidden" }}>
        <PropPeek src={PHOTOS.portraitCorner} w={132} style={{ left: 30, top: -30 }} opacity={0.5} mask="radial-gradient(120% 105% at 50% 0%, #000 42%, transparent 96%)" />
        <div style={{ maxWidth: "var(--maxw-content)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "var(--space-8)", alignItems: "center", position: "relative" }}>
          <ImageFrame src={stripe("portrait of Hilary — photo coming", 300, 360)} alt="Hilary" caption="Hilary, keeper of stories" tilt={2} style={{ width: 300 }} />
          <div>
            <Eyebrow color="var(--accent)">The heart of the place</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: "var(--sea-900)", margin: "0 0 16px", transform: "rotate(-0.5deg)" }}>Meet Hilary</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--text-body)", maxWidth: "48ch" }}>Hilary Dionne is the heart and soul of Wishing Stones. Every object on the shelves has a story, and she'll happily tell you every one of them. Her gift is turning a rustic old building into somewhere you never quite want to leave.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { Home });
