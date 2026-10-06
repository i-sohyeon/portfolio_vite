import type { UITabProps } from "./types";
import styles from "./styles.module.scss";

export function Filter<T extends string>({
  items,
  value,
  onChange,
  className,
  ...props
}: UITabProps<T>) {
  const classes = [styles["ui-tab"], className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes} role="group">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          className={[
            styles["ui-tab-button"],
            value === item.value && styles["ui-tab-button-active"],
          ].filter(Boolean).join(" ")}
          aria-pressed={value === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

Filter.displayName = "UITab.Filter";

const UITab = { Filter };

export { UITab };
