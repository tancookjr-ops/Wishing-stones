import * as React from "react";

/** Outlined filter/category chip; fills in when active. */
export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default false */
  active?: boolean;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
