import type { BadgesProps } from "./types";
import styles from "./styles.module.scss";

export const Badges = ({ children, className, variant = "project", ...props }: BadgesProps) => {
  const classes = [styles.badges, variant === "project" ? styles["project-badges"] : styles["badges-wrap"], className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

Badges.displayName = "Badges";
