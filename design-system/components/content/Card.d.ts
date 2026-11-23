import * as React from "react";

/** Warm paper card surface for gallery pieces, shop goods, info blocks. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hand-propped lean. @default false */
  tilt?: boolean;
  /** @default "md" */
  elevation?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
