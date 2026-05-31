import React from "react";
import type { UIFooterProps } from "./types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { UIIcon } from "../UIIcon";
import { UIDivider } from "../UIDivider";
import { UIText } from "../UIText";

export const UIFooter: React.FC<UIFooterProps> = ({
  variant,
  children,
  className,
  as: UIFooter = "footer",
}) => {
  function Items({ children }: { children: React.ReactNode }) {
      return <ul className={styles.items}>{children}</ul>;
    }
    function Item({ children }: { children: React.ReactNode }) {
      return <li className={styles.item}>{children}</li>;
    }
  
  const classes = [
    styles["ui-footer"],
    variant && styles[`ui-footer-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIFooter className={classes}>
      <div className={styles.footerWrap}>
        <div>
          <UIText.Basic size="md" font="bagel" className="mb-2 d-block">LEE SO HYEON</UIText.Basic>
          <div className={styles.iText}>
            <UIIcon variant="mail" size="sm" className="mr-2"/>
            <p>aprils6220@gmail.com</p>
          </div>
        </div>
        <nav>
          <Items>
              <Item>
                <Link to="https://github.com/i-sohyeon" target="_blank">
                  <UIIcon variant="github" size="md" />
                  <span className="sr-only">깃허브 바로가기</span>
                </Link>
              </Item>
              <Item>
                <Link to="https://s-notee.tistory.com/" target="_blank">
                  <UIIcon variant="tistory" size="md" />
                  <span className="sr-only">티스토리 바로가기</span>
                </Link>
              </Item>
              <Item>
                <Link to="https://codepen.io/sohyeon403" target="_blank">
                  <UIIcon variant="codepen" size="md" />
                  <span className="sr-only">코드펜 바로가기</span>
                </Link>
              </Item>
          </Items>
        </nav>
      </div>
      <UIDivider variant="type1" margin="24px 0"/>
      <div className={styles.copyText}>
        <p>&copy; 2026 i-sohyeon. All Rights Reserved.</p>
        <p>Designed & Built with React, Typescripts.</p>
      </div>
    </UIFooter>
  );
};

