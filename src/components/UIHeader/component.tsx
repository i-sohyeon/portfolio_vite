import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { UIHeaderProps } from "./types";
import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";

export const UIHeader: React.FC<UIHeaderProps> = ({
  variant = "div",
  size,
  color,
  as: UIHeader = "header",
  className,
  children,
  ...rest
}) => {

  const location = useLocation();
  const showNavigation = location.pathname === "/";
  const [mobile, setMobile] = useState(() => window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const [activeSection, setActiveSection] = useState("overview");
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "skills", label: "Skills & tool" },
    { id: "career", label: "Career" },
    { id: "projects", label: "Project Details" },
    { id: "archive", label: "Archive" },
  ];

  useEffect(() => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ block: "start", inline: "nearest", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-20% 0px -60% 0px" });
    ["overview", "skills", "career", "projects", "archive"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const classes = [
    styles["ui-header"],
    styles[`ui-header-${variant}`],
    styles[`ui-header-${size}`],
    styles[`ui-header-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const navigation = (
    <nav className={styles["anchor-nav"]} aria-label="포트폴리오 섹션">
        {sections.map(({ id, label }) => (
          <Link key={id} to={{ pathname: "/", hash: `#${id}` }}
            className={activeSection === id ? styles.active : undefined}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => {
              if (location.hash === `#${id}`) document.getElementById(id)?.scrollIntoView({ block: "start", inline: "nearest", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
            }}>{label}</Link>
        ))}
      </nav>
  );

  return (
    <>
    <UIHeader
      className={classes}
      {...rest}>
      <h1 className={styles.logo}>
        <Link to="/">{children}</Link>
      </h1>
      {showNavigation && !mobile && navigation}

      <a
        href="https://main--6a1c0e1b70232ec461f8711c.chromatic.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["storybook-link"]}
        aria-label="스토리북 보기 (새 창)"
      >
        <span className={styles["storybook-mark"]} aria-hidden="true">S</span>
        <span className={styles["storybook-name"]}>스토리북 보기<span className="sr-only"> (새 창)</span></span>
      </a>
    </UIHeader>
      {showNavigation && mobile && createPortal(navigation, document.body)}
    </>
  );
};
