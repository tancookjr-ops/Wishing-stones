import React from "react";

/**
 * Wishing Stones — TapeLabel
 * A strip of masking tape with a handwritten note. Quirky, makeshift signage —
 * prices, "found on the beach!", hours scrawled by hand.
 */
export function TapeLabel({ tone = "kraft", rotate = -3, children, style, ...rest }) {
  const tones = {
    kraft: { background: "#E8D9B8", color: "var(--driftwood-900)" },
    washi: { background: "var(--seaglass-200)", color: "var(--sea-900)" },
    coral: { background: "var(--accent-soft)", color: "var(--coral-600)" },
  };
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-hand)",
        fontWeight: 700,
        fontSize: "var(--fs-hand)",
        lineHeight: 1.05,
        padding: "6px 18px",
        transform: `rotate(${rotate}deg)`,
        boxShadow: "var(--shadow-prop)",
        // torn-tape edges
        clipPath: "polygon(2% 8%, 12% 0, 30% 6%, 52% 0, 74% 7%, 92% 0, 100% 10%, 98% 88%, 88% 100%, 66% 93%, 44% 100%, 22% 92%, 6% 100%, 0 86%)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
