import * as React from "react";

/** Paper-warm text input with optional uppercase label and hint. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase eyebrow label above the field. */
  label?: string;
  /** Small helper text below. */
  hint?: string;
}
export declare function Input(props: InputProps): JSX.Element;
