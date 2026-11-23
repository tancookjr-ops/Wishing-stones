import * as React from "react";

/** Small status/label pill (New, Sold, One of a kind). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "glass" */
  tone?: "glass" | "accent" | "sun" | "ink";
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
