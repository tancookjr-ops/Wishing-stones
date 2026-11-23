import React from "react";

/**
 * Wishing Stones — Input
 * Text field with an optional label. Underlined, paper-warm.
 */
export function Input({ label, hint, id, style, ...rest }) {
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--fs-caption)",
            textTransform: "uppercase",
            letterSpacing: "var(--ls-label)",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-body)",
          color: "var(--text-strong)",
          background: "var(--sand-50)",
          border: "1px solid var(--border-hairline)",
          borderBottom: "2px solid var(--driftwood-500)",
          borderRadius: "var(--radius-sm)",
          padding: "11px 14px",
          outline: "none",
          transition: "border-color var(--dur-fast) var(--ease-tide)",
          ...style,
        }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
        onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--driftwood-500)")}
        {...rest}
      />
      {hint && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}>
          {hint}
        </span>
      )}
    </div>
  );
}
