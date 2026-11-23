import * as React from "react";

/** A strip of masking/washi tape with a handwritten note — makeshift island signage. */
export interface TapeLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tape color. @default "kraft" */
  tone?: "kraft" | "washi" | "coral";
  /** Rotation in degrees. @default -3 */
  rotate?: number;
  children?: React.ReactNode;
}
export declare function TapeLabel(props: TapeLabelProps): JSX.Element;
