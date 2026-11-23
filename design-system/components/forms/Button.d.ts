import * as React from "react";

/** Primary call-to-action button. Coral pill by default. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a different element, e.g. "a". @default "button" */
  as?: "button" | "a";
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
