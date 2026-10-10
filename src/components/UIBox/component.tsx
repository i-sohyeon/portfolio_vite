import React from "react";
import type { ElementType } from "react";
import type { UIBoxProps } from "./types";
import styles from "./styles.module.scss";

export const Article: React.FC<UIBoxProps> = ({
  variant,
  as: Component = "article",
  align,
  display,
  jContent,
  aItems,
  className = "",
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-box-article"],
    variant && styles[`ui-box-${variant}`],
    align && styles[`ui-box-${align}`],
    display && styles[`ui-box-${display}`],
    jContent && styles[`ui-box-${jContent}`],
    aItems && styles[`ui-box-${aItems}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Tag = Component as ElementType;

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export const Div: React.FC<UIBoxProps> = ({
  variant,
  as: Component = "div",
  align,
  display,
  columns,
  jContent,
  aItems,
  className = "",
  children,
  scroll,
  ...rest
}) => {
  const classes = [
    styles["ui-box-div"],
    columns && styles[`ui-box-columns-${columns}`],
    variant && styles[`ui-box-${variant}`],
    align && styles[`ui-box-${align}`],
    display && styles[`ui-box-${display}`],
    jContent && styles[`ui-box-${jContent}`],
    aItems && styles[`ui-box-${aItems}`],
    scroll && styles[`ui-box-${scroll}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Tag = Component as ElementType;

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export const Scroll: React.FC<UIBoxProps> = ({
  variant,
  as: Component = "div",
  align,
  display,
  jContent,
  aItems,
  className = "",
  children,
  scroll,
  imgSrc,
  href,
  ...rest
}) => {
  const classes = [
    styles["ui-box-div"],
    variant && styles[`ui-box-${variant}`],
    align && styles[`ui-box-${align}`],
    display && styles[`ui-box-${display}`],
    jContent && styles[`ui-box-${jContent}`],
    aItems && styles[`ui-box-${aItems}`],
    scroll && styles[`ui-box-${scroll}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const UIBox = Component as ElementType;

  return (
    <UIBox className={`${classes} ${styles.previewBox}`} {...rest}>
      {children}
      {href && (
        <a href={href} target="_blank" rel="noreferrer">
          <img src={imgSrc} alt="" />
        </a>
      )}
    </UIBox>
  );
};

const UIBox = {
  Article,
  Div,
  Scroll,
};

export {UIBox}