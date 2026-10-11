export type UIBadgeBgColor = "navy" | "pink" | "white" | "transparent";
export type UIBadgeColor = "black" | "white";
export type UIBadgeSize = "sm" | "md";
export type UIBadgeVariant = "solid" | "line";

export interface UIBadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBadgeVariant;
  bgColor?: UIBadgeBgColor;
  color?: UIBadgeColor;
  size?: UIBadgeSize;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}

export interface UIBadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "project" | "wrap";
  children: React.ReactNode;
}
