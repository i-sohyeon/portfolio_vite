import React from "react";
import type { UIDividerProps } from "./types";
import styles from "./styles.module.scss";

export const UIDivider: React.FC<UIDividerProps> = ({
  variant,
  children,
  className,
  margin,
}) => {
  const classes = [
    styles["ui-divider"],
    variant && styles[`ui-divider-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // margin 스타일 객체 생성
  const style = margin
    ? {
        margin: typeof margin === "number" ? `${margin}px` : margin,
      }
    : undefined;

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

