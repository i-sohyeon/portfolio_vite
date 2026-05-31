export type UIDividerVariant = "type1" | "type2";

export interface UIDividerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIDividerVariant;
  className?: string;
  margin: number | string;
  children?: React.ReactNode;
  as?: React.ElementType;
}
