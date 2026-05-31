import type { ReactNode } from "react";
import styles from "./styles.module.scss";
import type { UITableProps } from "./types";

export const Default: React.FC<UITableProps> = ({
  variant,
  size,
  align,
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-table"],
    styles[`ui-table-${variant}`],
    styles[`ui-table-${size}`],
    styles[`ui-table-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

const UITable = {
  Default,
};

export { UITable };
