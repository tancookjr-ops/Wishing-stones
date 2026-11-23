import React from "react";

/**
 * Wishing Stones — Card
 * A warm paper surface for gallery pieces, shop goods, or info.
 * `tilt` gives it a hand-propped, makeshift lean.
 */
export function Card({ tilt = false, elevation = "md", children, style, ...rest }) {
  const shadow = { sm: "var(--shadow-sm)", md: "var(--shadow-md)", lg: "var(--shadow-lg)" }[elevation];
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        boxShadow: shadow,
        overflow: "hidden",
        transform: tilt ? "rotate(-1.4deg)" : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
