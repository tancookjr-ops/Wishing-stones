import React from "react";

/**
 * Wishing Stones — Button
 * Warm, tactile call-to-action. Pill by default; coral accent for primary.
 */
export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: "0.9375rem" },
    md: { padding: "12px 24px", fontSize: "1.0625rem" },
    lg: { padding: "16px 34px", fontSize: "1.1875rem" },
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "#fff",
      border: "2px solid var(--accent)",
    },
    secondary: {
      background: "var(--sea-900)",
      color: "var(--sand-100)",
      border: "2px solid var(--sea-900)",
    },
    outline: {
      background: "transparent",
      color: "var(--sea-900)",
      border: "2px solid var(--sea-900)",
    },
    ghost: {
      background: "transparent",
      color: "var(--sea-900)",
      border: "2px solid transparent",
    },
  };
  const Tag = as;
  return (
    <Tag
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        lineHeight: 1,
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        textDecoration: "none",
        transition: "transform var(--dur-fast) var(--ease-tide), background var(--dur-fast) var(--ease-tide), box-shadow var(--dur-fast) var(--ease-tide)",
        boxShadow: "var(--shadow-sm)",
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
