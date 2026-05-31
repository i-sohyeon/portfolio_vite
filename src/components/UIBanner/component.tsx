// UIBanner.tsx
import React, { createContext, useContext } from "react";
import type { UIBannerProps } from "./types";
import styles from "./styles.module.scss";

// useInView.ts
import { useEffect, useRef, useState } from "react";

// threshold: 가시성 퍼센트 (default: 0.5)
export function useInView(threshold = 0.5) {
  const ref = useRef<HTMLLIElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}


// Context
const BannerContext = createContext<{ animateOnScroll?: boolean }>({});

// 단일 배너 리스트 아이템
const List: React.FC<UIBannerProps> = ({
  icon,
  number,
  title,
  des,
  variant,
  bgColor,
  jContent,
  className,
  align,
  ...rest
}) => {
  const { animateOnScroll } = useContext(BannerContext);
  const { ref, isVisible } = useInView();

  const classes = [
    styles["ui-banner"],
    icon && styles[`ui-banner-${icon}`],
    variant && styles[`ui-banner-${variant}`],
    bgColor && styles[`ui-banner-${bgColor}`],
    jContent && styles[`ui-banner-${jContent}`],
    align && styles[`ui-banner-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li
      ref={animateOnScroll ? ref : null}
      className={`${classes} ${
        animateOnScroll && isVisible ? styles.show : ""
      }`}
      {...rest}
    >
      <span>{number}</span>
      <div>
        <i className="icon"></i>
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
    </li>
  );
};

// 배너 리스트 래퍼
interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  animateOnScroll?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  animateOnScroll,
}) => {
  return (
    <BannerContext.Provider value={{ animateOnScroll }}>
      <ul className={`${styles.bannerWrapper} ${className || ""}`}>
        {children}
      </ul>
    </BannerContext.Provider>
  );
};

export const UIBanner = {
  Wrapper,
  List,
};

UIBanner.List.displayName = "UIBanner.List";
UIBanner.Wrapper.displayName = "UIBanner.Wrapper";
