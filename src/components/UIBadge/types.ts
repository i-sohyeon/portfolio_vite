export type UIBadgeVariant = "solid" | "line";
export type UIBadgeBgColor = "navy" | "pink";
export type UIBadgeSize = "sm" | "md";

export interface UIBadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBadgeVariant;
  bgColor?: UIBadgeBgColor;
  size?: UIBadgeSize;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}
