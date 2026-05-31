import { ReactNode } from "react";

export type UITextVariant =
  | "mainTitle"
  | "contentTitle"
  | "h1"
  | "h2"
  | "h3"
  | "p"
  | "span"
  | "caption";

export type UITextSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type UITextWeight = "normal" | "bold";
export type UITextStyle = "tenada" | "bagel";
export type UITextColor = "white" | "blue";
export type UIDisplay = "block" | "inline" | "inline-block";
export type UITextAlign = "left" | "center" | "right";
export type UITextHeaderSize = "xxl" | "xl" | "lg" | "md" | "sm";
export type UITextOpacity =
  | "10"
  | "20"
  | "30"
  | "40"
  | "50"
  | "60"
  | "70"
  | "80";

export interface UITextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextVariant;
  align?:UITextAlign,
  size?: UITextSize;
  weight?: UITextWeight;
  color?: UITextColor;
  font?: UITextStyle;
  display?: UIDisplay;
  opacity?: UITextOpacity;
  as?: React.ElementType;
}

export interface UITextHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextVariant;
  size?: UITextHeaderSize;
  align?: UITextAlign;
  weight?: UITextWeight;
  font?: UITextStyle;
  color?: UITextColor;
  button?: string;
  as?: React.ElementType;
  linkTo?: string;
  children?: ReactNode;
}
