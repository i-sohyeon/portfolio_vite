export type UIBoxVariant = "content" | "flex" | "card" | "outlineCard" | "archiveGrid" | "archiveCard" | "archiveTop" | "archiveIcon" | "archiveFooter";
export type UIBoxTextAlign = "left" | "center" | "right";
export type UIBoxDisplay = "flex" | "block" | "inline-block" | "grid";
export type UIBoxjustifyContent = "space-between";
export type UIBoxAItems = "top" | "middle" | "bottom";
export type UIBoxScroll = "scroll"

export interface UIBoxProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBoxVariant;
  align?: UIBoxTextAlign;
  display?: UIBoxDisplay;
  columns?: 2 | 3;
  jContent?: UIBoxjustifyContent;
  aItems?: UIBoxAItems;
  scroll?: UIBoxScroll;
  imgSrc?:string;
  href?:string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  as?: React.ElementType;
}

// type UIBoxContent = {

// }

// type UIBoxDiv = {

// }
