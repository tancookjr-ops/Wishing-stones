import * as React from "react";

/** Circular icon-only button (menu, close, cart). */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "soft" */
  variant?: "soft" | "solid" | "accent";
  /** Diameter in px. @default 44 */
  size?: number;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
