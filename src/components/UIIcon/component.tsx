import React from "react";
import type { UIIconProps } from "./types";
import styles from "./styles.module.scss";

export const UIIcon: React.FC<UIIconProps> = ({
  variant,
  size,
  children,
  className,
  color,
}) => {
  const classes = [
    styles["ui-icon"],
    styles[`ui-icon-${variant}`],
    styles[`ui-icon-${size}`],
    styles[`ui-icon-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <i className={classes}>{children}</i>;
};
