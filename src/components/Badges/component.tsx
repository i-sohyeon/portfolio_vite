import type { BadgesProps } from "./types";
import styles from "./styles.module.scss";

export const Badges = ({ children, className, ...props }: BadgesProps) => {
  const classes = [styles.badges, styles["project-badges"], className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

Badges.displayName = "Badges";
