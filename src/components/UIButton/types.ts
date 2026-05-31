export type UIButtonVariant = 'text' | '';


export interface UIButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIButtonVariant;
  color?: string;
  to?:string;
  className?:string;
  children?: React.ReactNode;
  onClick?: () => void; // 클릭 시 호출될 함수 (상위에서 처리)
  as?: React.ElementType;
}

