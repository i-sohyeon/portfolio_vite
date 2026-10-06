import React, { useState, useEffect } from "react";
import type { UIHeaderProps } from "./types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const UIHeader: React.FC<UIHeaderProps> = ({
  variant = "div",
  size,
  color,
  as: UIHeader = "header",
  className,
  children,
  ...rest
}) => {

  // 스크롤 시 메뉴 보이지 않게 애니메이션 효과
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 500) {
      setVisible(false);
    } else if (currentScrollPos < 500) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classes = [
    styles["ui-header"],
    styles[`ui-header-${variant}`],
    styles[`ui-header-${size}`],
    styles[`ui-header-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIHeader
      className={classes}
      style={{
        top: visible ? "0" : "-300px",
        transition: "top 0.5s ease-in-out",
      }}
      {...rest}>
      <h1 className={styles.logo}>
        <Link to="/">{children}</Link>
      </h1>
      <a
        href="https://main--6a1c0e1b70232ec461f8711c.chromatic.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["storybook-link"]}
      >
        <span className={styles["storybook-mark"]} aria-hidden="true">S</span>
        <span className={styles["storybook-name"]}>스토리북 보기<span className="sr-only"> (새 창)</span></span>
      </a>
    </UIHeader>
  );
};
