import React, { useState, useEffect } from "react";
import type { UIHeaderProps } from "./types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { UIIcon } from "../UIIcon";

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

  function Logo({ as: Component = "h1", children }: { as?: React.ElementType; children: React.ReactNode }) {
    return <Component className={styles.logo}>{children}</Component>;
  }
  function Items({ children }: { children: React.ReactNode }) {
    return <ul className={styles.items}>{children}</ul>;
  }
  function Item({ children }: { children: React.ReactNode }) {
    return <li className={styles.item}>{children}</li>;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 반응형일때 토글 메뉴로
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

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
      <Logo>
        <Link to="/">{children}</Link>
      </Logo>
      <button
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={isOpen ? styles.open : styles.nav}>
        <Items>
          <Item>
            <Link to="http://github.com/i-sohyeon" target="_blank">
              <UIIcon variant="github" size="lg" />
              <span className="sr-only">깃허브 바로가기</span>
            </Link>
          </Item>
          <Item>
            <Link to="https://s-notee.tistory.com/" target="_blank">
              <UIIcon variant="tistory" size="lg" />
              <span className="sr-only">티스토리 바로가기</span>
            </Link>
          </Item>
          <Item>
            <Link to="https://codepen.io/sohyeon403" target="_blank">
              <UIIcon variant="codepen" size="lg" />
              <span className="sr-only">코드펜 바로가기</span>
            </Link>
          </Item>
        </Items>
      </nav>
   
    </UIHeader>
  );
};
