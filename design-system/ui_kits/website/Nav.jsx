// Nav + Footer for the Wishing Stones website
function Nav({ page, go }) {
  const { IconButton } = WS;
  const links = [["Home", "Home"], ["Visit", "Visit"], ["The Rooms", "Rooms"], ["The Map", "Map"], ["Shop", "Shop"]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(246,240,225,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "12px var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <button onClick={() => go("Home")} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", lineHeight: 1 }}>
          <div style={{ fontFamily: "var(--font-hand)", color: "var(--accent)", fontSize: 16, transform: "rotate(-3deg)", marginBottom: -6 }}>come wander</div>
          <div style={{ fontFamily: "var(--font-sign)", fontSize: 27, color: "var(--sea-900)", transform: "rotate(-2deg)", WebkitTextStroke: "0.4px var(--sea-900)" }}>Wishing Stones</div>
        </button>
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {links.map(([label, key]) => (
            <button key={key} onClick={() => go(key)} style={{ background: page === key ? "var(--wall-rose-soft)" : "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: page === key ? "var(--sea-900)" : "var(--text-muted)", padding: "8px 15px", borderRadius: "var(--radius-pill)" }}>{label}</button>
          ))}
          <IconButton variant="accent" aria-label="Basket" style={{ marginLeft: 8 }}><Icon name="shopping-bag" size={20} /></IconButton>
        </nav>
      </div>
    </header>
  );
}

function Footer({ go }) {
  const linkStyle = { fontFamily: "var(--font-body)", fontSize: 16, marginBottom: 8, opacity: 0.9, background: "none", border: "none", color: "inherit", padding: 0, cursor: "pointer", textAlign: "left", display: "block" };
  return (
    <footer style={{ background: "var(--surface-hearth)", color: "var(--text-on-hearth)", padding: "var(--space-9) var(--gutter) var(--space-7)", position: "relative", overflow: "hidden" }}>
      {/* warm lamplight glow, like a lit window at dusk */}
      <div aria-hidden="true" style={{ position: "absolute", top: -80, left: "12%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(231,178,102,0.16), transparent 70%)", pointerEvents: "none" }}></div>
      <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "var(--space-7)", position: "relative" }}>
        <div>
          <div style={{ fontFamily: "var(--font-hand)", color: "var(--lamp-amber)", fontSize: 24, transform: "rotate(-3deg)" }}>come find us</div>
          <div style={{ fontFamily: "var(--font-sign)", fontSize: 42, letterSpacing: "0", marginTop: 6, WebkitTextStroke: "0.5px var(--text-on-hearth)", transform: "rotate(-1.5deg)" }}>Wishing Stones</div>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--text-on-hearth-muted)", maxWidth: "40ch", lineHeight: 1.6 }}>A gallery, museum, library and gift shop all rolled into one happy building on Big Tancook Island.</p>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 12, color: "var(--text-on-hearth-muted)", marginBottom: 12 }}>Visit</div>
          {[["Getting here", "Visit"], ["Hours & events", "Visit"], ["The rooms", "Rooms"], ["The ceiling map", "Map"], ["The shop", "Shop"]].map(([x, k]) => <button key={x} onClick={() => go(k)} style={linkStyle}>{x}</button>)}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 12, color: "var(--text-on-hearth-muted)", marginBottom: 12 }}>Say hello</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, opacity: 0.9 }}><Icon name="map-pin" size={16} color="var(--lamp-amber)" /> Big Tancook Island, NS</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, opacity: 0.9 }}><Icon name="mail" size={16} color="var(--lamp-amber)" /> hello@wishingstones.ca</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, opacity: 0.9 }}><Icon name="facebook" size={16} color="var(--lamp-amber)" /> Wishing Stones Studio &amp; Gallery</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.9 }}><Icon name="instagram" size={16} color="var(--lamp-amber)" /> @wishingstones</div>
        </div>
      </div>
      <div style={{ maxWidth: "var(--maxw-wide)", margin: "var(--space-7) auto 0", paddingTop: "var(--space-5)", borderTop: "1px solid rgba(255,255,255,0.12)", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-on-hearth-muted)", position: "relative" }}>© Wishing Stones · Big Tancook Island, Nova Scotia · made with island magic</div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
