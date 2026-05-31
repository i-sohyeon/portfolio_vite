export type UIParagraphVariant = "solid" | "line";
// export type UIBadgeVariant = "success" | "info" | "warning" | "error"; // 실제 정의를 맞춰주세요


export interface UIParagraphProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIParagraphVariant;
  // badges?:UIBadgeVariant;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  period?: string;
  subTitle?: string;
  desc?: string;
  as?: React.ElementType;
}