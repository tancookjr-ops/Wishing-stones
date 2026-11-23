import React from "react";

/**
 * Wishing Stones — Badge
 * Small status/label pill. Sea-glass by default; accent for "new".
 */
export function Badge({ tone = "glass", children, style, ...rest }) {
  const tones = {
    glass: { background: "var(--seaglass-200)", color: "var(--sea-900)" },
    accent: { background: "var(--accent-soft)", color: "var(--coral-600)" },
    sun: { background: "#F7E7BE", color: "var(--driftwood-900)" },
    ink: { background: "var(--sea-900)", color: "var(--sand-100)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "0.75rem",
        letterSpacing: "0.02em",
        padding: "4px 11px",
        borderRadius: "var(--radius-pill)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
