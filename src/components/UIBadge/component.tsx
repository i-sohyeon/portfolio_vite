import React from "react";
import type { UIBadgeProps } from "./types";
import styles from "./styles.module.scss";

export const UIBadge: React.FC<UIBadgeProps> = ({
  variant,
  bgColor,
  size,
  children,
  className,
}) => {
  const classes = [
    styles["ui-badge"],
    styles[`ui-badge-${variant}`],
    styles[`ui-badge-${bgColor}`],
    styles[`ui-badge-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};
