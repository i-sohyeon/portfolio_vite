import React from "react";
import type { UIParagraphProps } from "./types";
import styles from "./styles.module.scss";

export const UIParagraph: React.FC<UIParagraphProps> = ({
  variant,
  children,
  title,
  period,
  subTitle,
  desc,
  className,
}) => {
  const classes = [
    styles["ui-paragraph"],
    styles[`ui-badge-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${classes} ${styles.paragraph}`}>
      <h3 className={styles["paragraph-title"]}>{title}</h3>
      <span className={styles["paragraph-period"]}>{period}</span>
      <p className={styles["paragraph-subtitle"]}>{subTitle}</p>
      <p className={styles["paragraph-desc"]}>{desc}</p>
      <div>{children}</div>
    </div>
  );
};
