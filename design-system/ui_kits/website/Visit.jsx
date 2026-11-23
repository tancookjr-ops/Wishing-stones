// Visit screen
function Visit({ go }) {
  const { Card, TapeLabel, Button, Input, Badge } = WS;
  const hours = [["Sunday – Friday", "11 – 4"], ["Saturday", "2 – 5"]];
  const steps = [
    ["Drive to Chester", "Follow the signs to the government wharf and park — the crossing is on foot."],
    ["Board the Tancook ferry", "The William G. Ernst leaves from Chester and stops at Little Tancook on the way to Big Tancook. About 50 minutes across the bay (the early-morning run is a direct 30–35)."],
    ["Walk up from the wharf", "From the Big Tancook wharf it's a lovely 30-minute walk across the island to our door — or rent a bike right at the wharf and coast over."],
  ];
  return (
    <div style={{ maxWidth: "var(--maxw-wide)", margin: "0 auto", padding: "var(--space-8) var(--gutter) var(--space-9)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
        <Eyebrow>Big Tancook Island · Nova Scotia</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--fs-h1)", color: "var(--sea-900)", margin: 0 }}>Plan your visit</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", color: "var(--text-muted)", maxWidth: "46ch", margin: "12px auto 0" }}>A short drive, a ferry across the bay, and a walk worth every minute. Here's how to find us.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-6)", marginBottom: "var(--space-6)", alignItems: "start" }}>
        {/* Hours */}
        <Card style={{ padding: "var(--space-6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}><Icon name="clock" color="var(--brand-green)" /><h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--sea-900)", margin: 0 }}>Hours</h3></div>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--accent)", marginBottom: 14 }}>summer season</div>
          {hours.map(([d, h]) => (
            <div key={d} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "12px 0", borderBottom: "1px solid var(--border-hairline)", fontFamily: "var(--font-body)", fontSize: 17 }}>
              <span style={{ color: "var(--text-strong)" }}>{d}</span><span style={{ color: "var(--text-muted)" }}>{h}</span>
            </div>
          ))}
          <div style={{ marginTop: 18, fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)" }}>
            The rest of the year we open our doors for <strong style={{ color: "var(--text-strong)" }}>scheduled events</strong> — daytime and evening — right through the seasons. Follow along on Facebook to see what's on.
          </div>
        </Card>

        {/* Getting here */}
        <Card style={{ padding: "var(--space-6)", background: "var(--surface-hearth)", color: "var(--text-on-hearth)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}><Icon name="sailboat" color="var(--lamp-amber)" /><h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: 0 }}>Getting here</h3></div>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, counterReset: "step" }}>
            {steps.map(([t, d], i) => (
              <li key={t} style={{ display: "flex", gap: 14, paddingBottom: i < steps.length - 1 ? 18 : 0, marginBottom: i < steps.length - 1 ? 18 : 0, borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
                <span style={{ flex: "0 0 auto", width: 30, height: 30, borderRadius: "50%", background: "var(--lamp-amber)", color: "var(--hearth-900)", fontFamily: "var(--font-display)", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{i + 1}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.55, color: "var(--text-on-hearth-muted)" }}>{d}</div>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      {/* Ferry good-to-knows */}
      <Card style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)" }}>
            {[["ticket", "Round trip $7", "under 12 & bikes ride free"], ["users", "4 sailings weekdays", "2 on weekends, +2 Fri evenings"], ["alarm-clock", "Arrive 15 min early", "sailings fill on summer days"], ["phone", "Ferry info", "902-275-7885"]].map(([ic, a, b]) => (
              <div key={a} style={{ display: "flex", gap: 10, alignItems: "flex-start", maxWidth: 200 }}>
                <span style={{ color: "var(--brand-green)", marginTop: 2 }}><Icon name={ic} size={20} /></span>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--sea-900)" }}>{a}</div><div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>{b}</div></div>
              </div>
            ))}
          </div>
          <Button as="a" href="https://novascotia.ca/tran/hottopics/tancook.htm" target="_blank" rel="noopener" variant="outline" size="sm">Official sailing times <Icon name="external-link" size={16} /></Button>
        </div>
        <div style={{ marginTop: 16, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-faint)", fontStyle: "italic" }}>Sailing times shift with the season — always check the day's schedule before you set out.</div>
      </Card>

      {/* The walk — and the sign that says you've made it */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "var(--space-6)", alignItems: "stretch", marginBottom: "var(--space-7)" }}>
      <Card style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ padding: "var(--space-6) var(--space-7)", height: "100%", display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-5)", alignContent: "center", background: "linear-gradient(120deg, var(--floor-sage-soft), var(--seaglass-200))" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><Icon name="footprints" color="var(--sea-900)" /><span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--sea-900)" }}>From the wharf, on foot</span></div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--text-body)", maxWidth: "54ch", margin: 0 }}>The gallery sits across the island from the wharf — a gentle 30-minute walk along the road, past gardens, sheds and sea views. Wear comfy shoes, take your time, and say hello to whoever you pass. In a hurry? Bike rentals wait right at the end of Wharf Road.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-hand)", fontWeight: 700, color: "var(--sea-900)", whiteSpace: "nowrap" }}>
            <span style={{ textAlign: "center" }}><Icon name="anchor" size={22} /><div style={{ fontSize: 17 }}>wharf</div></span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.1em", color: "var(--text-muted)" }}>· · 30 min · ·</span>
            <span style={{ textAlign: "center" }}><Icon name="home" size={22} /><div style={{ fontSize: 17 }}>us</div></span>
          </div>
        </div>
      </Card>
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <WS.ImageFrame src={PHOTOS.signCrate} alt="The wooden Wishing Stones sign in its crate" caption="you'll know it when you see it" driftwood tilt={2} style={{ width: "100%", maxWidth: 300 }} />
        <div style={{ position: "absolute", top: -12, left: -8 }}><TapeLabel tone="washi" rotate={-6}>the sign out front</TapeLabel></div>
      </div>
      </div>

      {/* Newsletter */}
      <Card style={{ padding: "var(--space-7)", textAlign: "center", background: "var(--surface-butter)" }}>
        <Badge tone="accent">Postcards, not spam</Badge>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-h3)", color: "var(--sea-900)", margin: "12px 0 18px" }}>Get island news &amp; what's on, now and then</h3>
        <div style={{ display: "flex", gap: 10, maxWidth: 460, margin: "0 auto", alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}><Input label="Your email" placeholder="you@island.ca" /></div>
          <Button variant="primary">Sign up</Button>
        </div>
      </Card>
    </div>
  );
}
Object.assign(window, { Visit });
