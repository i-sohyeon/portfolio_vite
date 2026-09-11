export type UITextListVariant = "circle" | "number" | "check";
export type UITextListSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type UITextListWeight = "normal" | "bold";
export type UITextListStyle = "tenada" | "petendard";
export type UITextListColor = "black" | "white";
export type UITextListAlign = "left" | "center";

export interface UITextListCheckProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextListVariant;
  size?: UITextListSize;
  weight?: UITextListWeight;
  color?: string;
  font?: UITextListStyle;
  as?: React.ElementType;
  checkItems: string[];
}

export interface NestedItem {
  id: number | string;
  name: string;
  children?: NestedItem[];
}

export interface UITextListNestedProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextListVariant;
  size?: UITextListSize;
  weight?: UITextListWeight;
  color?: UITextListColor;
  align?: UITextListAlign;
  font?: UITextListStyle;
  style?: React.CSSProperties;
  as?: React.ElementType;
  nestedItems: NestedItem[];
}

export interface ItemData {
  id?: number;
  number?: number;
  title?: string;
  subText?: string;
}

export interface UITextListCircleProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextListVariant;
  size?: UITextListSize;
  weight?: UITextListWeight;
  color?: string;
  font?: UITextListStyle;
  as?: React.ElementType;
  data: ItemData[];
}