export type UIBoxVariant = "content" | "flex" | "card";
export type UIBoxBgColor = "gray" | "blue" | "pink";
export type UIBoxBgPattern = "check";
export type UIBoxTextAlign = "left" | "center" | "right";
export type UIBoxDisplay = "flex" | "block" | "inline-block" | "grid";
export type UIBoxjustifyContent = "space-between";
export type UIBoxAItems = "top" | "middle" | "bottom";
export type UIBoxScroll = "scroll"

export interface UIBoxProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBoxVariant;
  bgColor?: UIBoxBgColor;
  bgPattern?: UIBoxBgPattern;
  color?: string;
  align?: UIBoxTextAlign;
  display?: UIBoxDisplay;
  jContent?: UIBoxjustifyContent;
  aItems?: UIBoxAItems;
  scroll?: UIBoxScroll;
  imgSrc?:string;
  href?:string;
  as?: React.ElementType;
}

// type UIBoxContent = {

// }

// type UIBoxDiv = {

// }
