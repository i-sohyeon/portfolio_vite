export type UIFooterVariant = "type1" | "type2";

export interface UIFooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIFooterVariant;
  className?: string;
  margin?: number | string;
  children?: React.ReactNode;
  as?: React.ElementType;
}
