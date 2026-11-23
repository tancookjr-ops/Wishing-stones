// Shop screen — in-person first, with a small selection we can ship
function Shop({ go }) {
  const { Card, Badge, Button, Tag, TapeLabel, ImageFrame } = WS;
  const cats = ["All", "Books", "Prints", "Rugs", "Botanicals", "Woodwork", "Merch"];
  const [active, setActive] = React.useState(0);
  const [basket, setBasket] = React.useState({});
  // [name, category, price, badgeTone, badge, blurb]
  const items = [
    ["The Gallery Mouse", "Books", 18, "sun", "print on demand", "Hilary's children's book"],
    ["Birds & Island Life", "Books", 32, "sun", "print on demand", "Her own photography"],
    ["Island photo print", "Prints", 24, "glass", "ships anywhere", "Choose your size"],
    ["Verta's hooked rug", "Rugs", 140, "accent", "made to order", "A Tancook tradition"],
    ["Botanical finishing salt", "Botanicals", 12, "glass", "ships anywhere", "Tancook Island Botanicals"],
    ["Wild island syrup", "Botanicals", 16, "glass", "ships anywhere", "Small-batch & foraged"],
    ["Garden soap", "Botanicals", 9, "glass", "ships anywhere", "Tancook Island Botanicals"],
    ["Dave's serving board", "Woodwork", 58, "accent", "made to order", "Turned & finished by hand"],
    ["A bag of wishing stones", "Merch", 8, "accent", "ships anywhere", "Make a wish"],
    ["Tancook Island tee", "Merch", 34, "ink", "ships anywhere", "Wear the island"],
    ["Tancook tote", "Merch", 22, "ink", "ships anywhere", "For the ferry & back"],
  ];
  const add = (t) => setBasket((b) => ({ ...b, [t]: (b[t] || 0) + 1 }));
  const count = Object.values(basket).reduce((a, b) => a + b, 0);
  const shown = items.filter((i) => active === 0 || i[1] === cats[active]);

  return (
    <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "var(--space-8) var(--gutter) var(--space-9)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-7)", flexWrap: "wrap", gap: 16 }}>
        <div><Eyebrow>Made &amp; found on the island</Eyebrow><h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--fs-h1)", color: "var(--sea-900)", margin: 0 }}>The shop</h1></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--sea-900)" }}>
          <Icon name="shopping-bag" color="var(--accent)" /> {count === 0 ? "Basket empty" : `${count} in basket`}
        </div>
      </div>

      {/* In-person first */}
      <Card style={{ overflow: "hidden", marginBottom: "var(--space-8)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", alignItems: "stretch" }}>
          <div style={{ padding: "var(--space-7)", background: "var(--surface-hearth)", color: "var(--text-on-hearth)", position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: -60, left: -40, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(231,178,102,0.16), transparent 70%)" }}></div>
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--lamp-amber)", transform: "rotate(-2deg)", marginBottom: 8 }}>the good stuff can't be catalogued</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", margin: "0 0 14px" }}>Most of it, you'll only find in person</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--text-on-hearth-muted)", maxWidth: "46ch", marginBottom: 22 }}>Driftwood, sea glass, curiosities and one-of-a-kind finds arrive and leave with whoever loves them. They can't really be listed or shipped — which is rather the point. The best way to shop is to come wander the shelves yourself.</p>
              <Button variant="primary" size="lg" onClick={() => go("Visit")}><Icon name="anchor" size={20} /> Plan your visit</Button>
            </div>
          </div>
          <div style={{ background: `url(${PHOTOS.giftShop}) center/cover` }}></div>
        </div>
      </Card>

      {/* Ships anywhere */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
        <Eyebrow color="var(--accent)">A little island, delivered</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h2)", color: "var(--sea-900)", margin: "0 0 10px" }}>A few things we can send anywhere</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", color: "var(--text-muted)", maxWidth: "52ch", margin: "0 auto" }}>Hilary's books and prints, Verta's hooked rugs, Tancook botanicals, Dave's woodwork and a bit of island merch — made to order or ready to post.</p>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: "var(--space-7)" }}>
        {cats.map((c, i) => <Tag key={c} active={active === i} onClick={() => setActive(i)}>{c}</Tag>)}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
        {shown.map(([t, cat, price, tone, badge, blurb]) => (
          <Card key={t}>
            <div style={{ height: 210, background: `url("${stripe(t.toLowerCase(), 380, 300)}") center/cover`, position: "relative" }}>
              <div style={{ position: "absolute", top: 12, left: 12 }}><Badge tone={tone}>{badge}</Badge></div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--sea-900)", margin: "0 0 2px" }}>{t}</h3>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--text-faint)", margin: "0 0 14px", fontSize: 14 }}>{blurb}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: 26, color: "var(--coral-600)" }}>${price}</span>
                <Button size="sm" variant={basket[t] ? "secondary" : "primary"} onClick={() => add(t)}>{basket[t] ? `Added ×${basket[t]}` : "Add to basket"}</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "var(--space-8)", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <TapeLabel tone="kraft" rotate={-2}>everything here is made, found, or dreamed up on the island</TapeLabel>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-faint)", fontStyle: "italic" }}>Prices shown are placeholders — Hilary to confirm before the shop goes live.</div>
      </div>
    </div>
  );
}
Object.assign(window, { Shop });
