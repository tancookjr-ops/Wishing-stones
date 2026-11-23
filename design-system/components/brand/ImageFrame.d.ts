import * as React from "react";

/** Matted gallery frame for artwork/photos, with optional handwritten caption. */
export interface ImageFrameProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  /** Handwritten caption below (Caveat). */
  caption?: string;
  /** Thick weathered-wood edge instead of paper mat. @default false */
  driftwood?: boolean;
  /** Rotation in degrees. @default 0 */
  tilt?: number;
}
export declare function ImageFrame(props: ImageFrameProps): JSX.Element;
