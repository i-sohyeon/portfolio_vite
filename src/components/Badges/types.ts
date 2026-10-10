import type { HTMLAttributes } from "react";

export interface BadgesProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "project" | "wrap";
  children: React.ReactNode;
}
