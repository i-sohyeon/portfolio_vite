import type { FC } from "react";
import styles from "./styles.module.scss";
import type {
  UITableProps,
  UITableTableProps,
  UITableCaptionProps,
  UITableSectionProps,
  UITableTrProps,
  UITableThProps,
  UITableTdProps,
} from "./types";

export const Default: FC<UITableProps> = ({
  variant,
  size,
  align,
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-table"],
    variant && styles[`ui-table-${variant}`],
    size && styles[`ui-table-${size}`],
    align && styles[`ui-table-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

Default.displayName = "UITable.Default";

export const Table: FC<UITableTableProps> = (props) => <table {...props} />;
export const Caption: FC<UITableCaptionProps> = (props) => <caption {...props} />;
export const Thead: FC<UITableSectionProps> = (props) => <thead {...props} />;
export const Tbody: FC<UITableSectionProps> = (props) => <tbody {...props} />;
export const Tfoot: FC<UITableSectionProps> = (props) => <tfoot {...props} />;
export const Tr: FC<UITableTrProps> = (props) => <tr {...props} />;
export const Th: FC<UITableThProps> = (props) => <th {...props} />;
export const Td: FC<UITableTdProps> = (props) => <td {...props} />;

Table.displayName = "UITable.Table";
Caption.displayName = "UITable.Caption";
Thead.displayName = "UITable.Thead";
Tbody.displayName = "UITable.Tbody";
Tfoot.displayName = "UITable.Tfoot";
Tr.displayName = "UITable.Tr";
Th.displayName = "UITable.Th";
Td.displayName = "UITable.Td";

const UITable = {
  Default,
  Table,
  Caption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
};

export { UITable };
