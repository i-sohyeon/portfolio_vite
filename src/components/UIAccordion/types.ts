export type UIAccordionVariant = "line" | "box";
export type UIAccordionBgColor = "navy" | "pink";
export type UIAccordionSize = "sm" | "md";

export interface UIAccordionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIAccordionVariant;
  bgColor?: UIAccordionBgColor;
  size?: UIAccordionSize;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  id: string;
  title: string;
  defaultOpen?: boolean;
}
