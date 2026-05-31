export type UITableVariant = "type1" | "type2";
export type UITableSize = "sm" | "md";
export type UITableAlign = "left" | "center" |"right";

export interface UITableProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITableVariant;
  size?:UITableSize;
  align?:UITableAlign;
  // className?: string;
  // children?: React.ReactNode;
  // title?: string;
  // period?: string;
  // subTitle?: string;
  // desc?: string;
  // as?: React.ElementType;
}

