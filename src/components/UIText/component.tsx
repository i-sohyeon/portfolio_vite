import React, { useState } from "react";
import type { UITextProps, UITextHeaderProps } from "./types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Basic: React.FC<UITextProps> = ({
  variant = "span",
  size,
  weight = "normal",
  color,
  font,
  display,
  as: UIText = "span",
  className,
  children,
  opacity,

  ...rest
}) => {
  const classes = [
    styles["ui-text"],
    styles[`ui-text-${variant}`],
    styles[`ui-text-${size}`],
    styles[`ui-text-${weight}`],
    styles[`ui-text-${font}`],
    styles[`ui-text-${color}`],
    styles[`ui-text-${display}`],
    styles[`ui-text-${opacity}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIText className={classes} style={{}} {...rest}>
      {children}
    </UIText>
  );
};

export const Header: React.FC<UITextHeaderProps> = ({
  size,
  font,
  // variant,
  color,
  // as = "h2",
  className,
  children,
  button,
  linkTo,
  ...rest
}) => {
  const [useLink] = useState(true);

  const classes = [
    styles["ui-text-header"],
    styles[`ui-text-header-${size}`],
    styles[`ui-text-header-${font}`],
    styles[`ui-text-header-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${classes}`} {...rest}>
      <>{children}</>
      {useLink && linkTo && <Link to={linkTo}>{button}</Link>}
    </div>
  );
};

const UIText = {
  Basic,
  Header,
};

UIText.Basic.displayName = "UIText.Basic";
UIText.Header.displayName = "UIText.Header";

export { UIText };
