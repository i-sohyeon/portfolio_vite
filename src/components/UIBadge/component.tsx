import React from "react";
import type { UIBadgeProps, UIBadgeGroupProps } from "./types";
import styles from "./styles.module.scss";

export const Badge: React.FC<UIBadgeProps> = ({
  variant,
  bgColor,
  children,
  color,
  size,
  className,
}) => {
  const classes = [
    styles["ui-badge"],
    styles[`ui-badge-${bgColor}`],
    styles[`ui-badge-color-${color}`],
    styles[`ui-badge-${size}`],
    styles[`ui-badge-${variant}`],


    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};

export const Group = ({ children, className, variant = "project", ...props }: UIBadgeGroupProps) => {
  const classes = [
    styles["ui-badge-group"],
    styles[`ui-badge-group-${variant}`],
    className,
  ].filter(Boolean).join(" ");

  return <div {...props} className={classes}>{children}</div>;
};

Group.displayName = "UIBadge.Group";

