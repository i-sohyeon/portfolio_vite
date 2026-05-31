import React from "react";
import type { UIBoxProps } from "./types";
import styles from "./styles.module.scss";

export const Article: React.FC<UIBoxProps> = ({
  variant,
  bgColor,
  bgPattern,
  as: UIBox = "article",
  align,
  display,
  jContent,
  aItems,
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-box-article"],
    styles[`ui-box-${variant}`],
    styles[`ui-box-${bgColor}`],
    styles[`ui-box-${align}`],
    styles[`ui-box-${display}`],
    styles[`ui-box-${jContent}`],
    styles[`ui-box-${aItems}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={`${classes}`} style={{}} {...rest}>
      {children}
    </article>
  );
};

export const Div: React.FC<UIBoxProps> = ({
  variant,
  bgColor,
  bgPattern,
  as: UIBox = "article",
  align,
  display,
  jContent,
  aItems,
  className,
  children,
  scroll,
  ...rest
}) => {
  const classes = [
    styles["ui-box-div"],
    styles[`ui-box-${variant}`],
    styles[`ui-box-${bgColor}`],
    styles[`ui-box-${align}`],
    styles[`ui-box-${display}`],
    styles[`ui-box-${jContent}`],
    styles[`ui-box-${aItems}`],
    styles[`ui-box-${scroll}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${classes}`} style={{}} {...rest}>
      {children}
    </div>
  );
};

export const Scroll: React.FC<UIBoxProps> = ({
  variant,
  bgColor,
  bgPattern,
  as: UIBox = "div",
  align,
  display,
  jContent,
  aItems,
  className,
  children,
  scroll,
  imgSrc,
  href,
  ...rest
}) => {
  const classes = [
    styles["ui-box-div"],
    styles[`ui-box-${variant}`],
    styles[`ui-box-${bgColor}`],
    styles[`ui-box-${align}`],
    styles[`ui-box-${display}`],
    styles[`ui-box-${jContent}`],
    styles[`ui-box-${aItems}`],
    styles[`ui-box-${scroll}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={`${classes}, ${styles.previewBox}`} style={{}} {...rest}>
        {children}
        <a href={href} target="_blank" rel="noreferrer">
          <img src={imgSrc} alt="" />
        </a>
      </div>
    </>
  );
};

const UIBox = {
  Article, Div, Scroll
}

export {UIBox}