import React from "react";

/**
 * Wishing Stones — Tag
 * Outlined filter/category chip. `active` fills it in.
 */
export function Tag({ active = false, children, style, ...rest }) {
  return (
    <button
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-small)",
        padding: "6px 14px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        transition: "all var(--dur-fast) var(--ease-tide)",
        border: "1.5px solid var(--driftwood-500)",
        background: active ? "var(--sea-900)" : "transparent",
        color: active ? "var(--sand-100)" : "var(--text-muted)",
        borderColor: active ? "var(--sea-900)" : "var(--driftwood-500)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
