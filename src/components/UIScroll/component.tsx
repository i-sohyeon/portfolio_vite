import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { UIScrollButtonProps, UIScrollToTopProps } from './types';


//  페이지 전환될때 페이지가 상단에 위치하게
export const ToTop: React.FC<UIScrollToTopProps> = ({
  className,
  ...rest
}) => {
  const { pathname } = useLocation();

  // 라우트 변경마다 스크롤 최상단
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  const classes = [className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...rest} />
  );
};


// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };



export const TopButton: React.FC<UIScrollButtonProps> = ({
  className,
  threshold = 300,
  style,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const classes = [className].filter(Boolean).join(" ");

  if (!visible) return null;

  return (
    <button
      className={classes}
      style={{
        position: "fixed",
        right: 24,
        bottom: 80,
        padding: "10px 12px",
        borderRadius: "12px",
        backgroundColor: "#3f89e6",
        border: "1px solid #fff",
        color: "#fff",
        cursor: "pointer",
        fontSize: 22,
        zIndex: 1000,
        ...style,
      }}
      onClick={scrollToTop}
      {...rest}
      aria-label="Scroll to top"
    >
      ▲
    </button>
  );
};


const UIScroll = {
  ToTop, TopButton
};

// UIScroll.ToTop.displayName = "UIScroll.ToTop";
UIScroll.TopButton.displayName = "UIScroll.TopButton";

export {UIScroll};
