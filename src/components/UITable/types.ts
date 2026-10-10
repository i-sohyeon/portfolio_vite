import type {
  HTMLAttributes,
  TableHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from "react";

export type UITableVariant = "type1" | "type2";
export type UITableSize = "sm" | "md";
export type UITableAlign = "left" | "center" | "right";

export interface UITableProps extends HTMLAttributes<HTMLDivElement> {
  variant?: UITableVariant;
  size?: UITableSize;
  align?: UITableAlign;
}

export type UITableTableProps = TableHTMLAttributes<HTMLTableElement>;
export type UITableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;
export type UITableSectionProps = HTMLAttributes<HTMLTableSectionElement>;
export type UITableTrProps = HTMLAttributes<HTMLTableRowElement>;
export type UITableThProps = ThHTMLAttributes<HTMLTableCellElement>;
export type UITableTdProps = TdHTMLAttributes<HTMLTableCellElement>;
