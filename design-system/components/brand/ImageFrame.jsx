import React from "react";

/**
 * Wishing Stones — ImageFrame
 * A gallery frame with a warm mat border for artwork & photos.
 * `driftwood` gives a thick weathered-wood edge.
 */
export function ImageFrame({ src, alt = "", caption, driftwood = false, tilt = 0, style, ...rest }) {
  return (
    <figure
      style={{
        margin: 0,
        display: "inline-block",
        background: driftwood ? "var(--driftwood-500)" : "var(--sand-50)",
        padding: driftwood ? "14px" : "10px",
        borderRadius: driftwood ? "4px" : "var(--radius-sm)",
        boxShadow: "var(--shadow-lg)",
        border: driftwood ? "1px solid var(--driftwood-700)" : "1px solid var(--border-hairline)",
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        ...style,
      }}
      {...rest}
    >
      <div style={{ background: "#fff", padding: driftwood ? "10px" : "8px", borderRadius: "2px" }}>
        <img src={src} alt={alt} style={{ display: "block", width: "100%", height: "auto", borderRadius: "1px" }} />
      </div>
      {caption && (
        <figcaption
          style={{
            fontFamily: "var(--font-hand)",
            fontWeight: 600,
            fontSize: "1.25rem",
            color: driftwood ? "var(--sand-100)" : "var(--text-muted)",
            textAlign: "center",
            paddingTop: "8px",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
