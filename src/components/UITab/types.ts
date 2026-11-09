import type { HTMLAttributes, ReactNode } from "react";

export interface UITabItem<T extends string = string> {
  value: T;
  label: ReactNode;
  /** 탭 옆에 보여 줄 콘텐츠 개수 (없으면 표시 안 함) */
  count?: number;
}

export interface UITabProps<T extends string = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> {
  items: readonly UITabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  "aria-label": string;
}
