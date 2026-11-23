import React from "react";

/**
 * Wishing Stones — IconButton
 * Circular tactile button for a single glyph (menu, close, cart).
 */
export function IconButton({ variant = "soft", size = 44, children, style, ...rest }) {
  const variants = {
    soft: { background: "var(--sand-200)", color: "var(--sea-900)", border: "1px solid var(--border-hairline)" },
    solid: { background: "var(--sea-900)", color: "var(--sand-100)", border: "2px solid var(--sea-900)" },
    accent: { background: "var(--accent)", color: "#fff", border: "2px solid var(--accent)" },
  };
  return (
    <button
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        transition: "transform var(--dur-fast) var(--ease-tide)",
        ...variants[variant],
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.94)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      {...rest}
    >
      {children}
    </button>
  );
}
