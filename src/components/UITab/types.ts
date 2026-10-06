import type { HTMLAttributes, ReactNode } from "react";

export interface UITabItem<T extends string = string> {
  value: T;
  label: ReactNode;
}

export interface UITabProps<T extends string = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> {
  items: readonly UITabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  "aria-label": string;
}
