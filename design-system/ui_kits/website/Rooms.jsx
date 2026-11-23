// The Rooms screen — wander gallery, museum, library & hearth
function Rooms({ go }) {
  const { ImageFrame, TapeLabel, Button, Badge } = WS;

  function RoomRow({ eyebrow, title, body, aside, tone, img, img2, imgCap, img2Cap, driftwood, flip, dark, bg }) {
    const textCol = (
      <div>
        <Eyebrow color={dark ? "var(--lamp-amber)" : "var(--brand-green)"}>{eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: dark ? "var(--text-on-hearth)" : "var(--sea-900)", margin: "0 0 16px" }}>{title}</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.6, color: dark ? "var(--text-on-hearth-muted)" : "var(--text-body)", maxWidth: "44ch", marginBottom: 18 }}>{body}</p>
        <TapeLabel tone={tone} rotate={-3}>{aside}</TapeLabel>
      </div>
    );
    const imgCol = (
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <ImageFrame src={img} alt={title} caption={imgCap} driftwood={driftwood} tilt={flip ? 2 : -2} style={{ width: "100%", maxWidth: img2 ? 340 : 440, position: "relative", zIndex: 2 }} />
        {img2 && <ImageFrame src={img2} alt={title} caption={img2Cap} tilt={flip ? -3 : 3} style={{ width: 210, position: "absolute", bottom: -28, right: flip ? "auto" : -18, left: flip ? -18 : "auto", zIndex: 3 }} />}
      </div>
    );
    return (
      <section style={{ background: bg, padding: "var(--space-9) 0", position: "relative", overflow: "hidden" }}>
        {dark && <div aria-hidden="true" style={{ position: "absolute", top: "-20%", right: "8%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(231,178,102,0.18), transparent 70%)", pointerEvents: "none" }}></div>}
        <div style={{ maxWidth: "var(--maxw-content)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "center", position: "relative" }}>
          {flip ? <>{imgCol}{textCol}</> : <>{textCol}{imgCol}</>}
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Intro */}
      <section style={{ maxWidth: "var(--maxw-content)", margin: "0 auto", padding: "var(--space-8) var(--gutter) var(--space-7)", textAlign: "center" }}>
        <Eyebrow>Gallery · Museum · Library · Hearth</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--fs-h1)", color: "var(--sea-900)", margin: "0 0 12px" }}>Wander the rooms</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", color: "var(--text-muted)", maxWidth: "54ch", margin: "0 auto" }}>There's no set path and nothing behind glass you can't lean in to look at. Follow your nose from room to room — every corner holds something someone loved.</p>
      </section>
      <StringLights />

      <RoomRow
        eyebrow="On the walls"
        title="The gallery"
        body="Framed birds, driftwood finds, watercolours and photographs — island light in every frame. New work goes up whenever it arrives, so the walls are never quite the same twice."
        aside="new work, all the time"
        tone="washi"
        img={PHOTOS.giftShop}
        imgCap="salt air & driftwood"
        bg="var(--surface-butter)"
      />

      <RoomRow
        eyebrow="A hundred years of island life"
        title="The museum"
        body="Wander into rooms set just as they were — a Victorian dress on the hook, the good striped china laid for supper, a doctor's bag by the bed. Everyday things islanders kept, saved and handed down."
        aside="every object has a story — just ask"
        tone="coral"
        img={PHOTOS.museumBedroom}
        imgCap="the back bedroom"
        img2={PHOTOS.museumTable}
        img2Cap="supper's on"
        flip
        bg="var(--surface-page)"
      />

      <RoomRow
        eyebrow="Help yourself"
        title="The library"
        body="Walls and walls of well-loved books, a soft chair, and all afternoon if you want it. Borrow whatever catches your eye — just bring it back someday, or leave one of your own in its place."
        aside="borrow one · bring it back someday"
        tone="washi"
        img={PHOTOS.library}
        imgCap="mind the good chair"
        driftwood
        bg="var(--floor-sage-soft)"
      />

      <RoomRow
        eyebrow="Pull up a chair"
        title="The games room & hearth"
        body="A wood stove ticking away, shelves of board games and puzzles, red velvet chairs and a marble table scattered with pencils. This is the community's living room — where a quick visit turns into a whole afternoon."
        aside="stay as long as you like"
        tone="coral"
        img={PHOTOS.hearthRoom}
        imgCap="fire's lit"
        img2={PHOTOS.gamesNook}
        img2Cap="whose turn?"
        flip
        dark
        bg="var(--surface-hearth)"
      />

      {/* Closing CTA */}
      <section style={{ background: "var(--wall-rose-soft)", padding: "var(--space-9) var(--gutter)", textAlign: "center" }}>
        <Scrawl rotate={-2} size={28} style={{ marginBottom: 8 }}>the only way to really see it</Scrawl>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: "var(--sea-900)", margin: "0 0 18px" }}>is to come wander it yourself</h2>
        <Button variant="primary" size="lg" onClick={() => go("Visit")}><Icon name="anchor" size={20} /> Plan your visit</Button>
      </section>
    </div>
  );
}
Object.assign(window, { Rooms });
