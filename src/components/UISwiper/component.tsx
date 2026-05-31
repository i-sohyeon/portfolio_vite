import React, { useEffect, useRef } from "react";
import type { SwiperProps, SlideItemProps } from "./types";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Box: React.FC<SwiperProps> = ({
  variant,
  bgColor,
  children,
  className,
  titleColor,
}) => {
  // const swiperBoxRef = useRef<HTMLDivElement>(null);
  const swiperBoxRef = useRef<any>(null);

  const classes = [
    styles[`ui-swiper`],
    styles[`ui-swiper-${variant}`],
    styles[`ui-swiper-${bgColor}`],
    styles[`ui-swiper-${titleColor}`],
    className,
  ]

    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (swiperBoxRef.current) {
      // SwiperRef는 Swiper 인스턴스를 반환하므로, 직접적으로 $el에 접근할 수 없음
      // 대신, onSwiper 이벤트를 사용하여 Swiper 인스턴스 얻어야함
      // 하지만, 이 방법은 Swiper 인스턴스를 얻는 즉시 실행되므로, useEffect에서 사용하기보다는
      // onSwiper 이벤트에서 직접 처리
    }
  }, [swiperBoxRef]);

  const handleSwiper = (swiper: any) => {
    if (swiper) {
      const swiperElement = swiper.el;
      if (swiperElement) {
        swiperElement.style.overflow = "visible";
      }
    }
  };

  return (
    <Swiper
      ref={swiperBoxRef}
      onSwiper={handleSwiper}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1.5}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 1.5,
        },
        1280: {
          slidesPerView: 1.5,
        },
      }}
      navigation={false}
      className={`${styles.swiperBox} ${classes}`}
      // pagination={{ clickable: true }}
    >
      <div>{children}</div>
    </Swiper>
  );
};

export const SlideItem = ({
  title,
  titleColor,
  content,
  imgSrc,
  children,
  bgColor,
  onClick,
}: SlideItemProps & { onClick?: () => void }) => {
  const swiperContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperContentRef.current) {
      // Ref를 통해 스타일을 적용
      swiperContentRef.current.style.width = "auto";
    }
  }, []);

  const classes = [styles[`ui-swiper-${bgColor}`]].filter(Boolean).join(" ");
  const colorClass = titleColor ? styles[`ui-title-color-${titleColor}`] : "";

  return (
    <div ref={swiperContentRef} className={`${styles.slideItem} ${classes}`}>
      <button onClick={onClick}>
        <img src={imgSrc} alt="" /> 
      </button>
      
      <h3 className={`${colorClass} ${classes}`}>{title}</h3>
      {/* <p className={colorClass}>{content}</p> */}
      {content && <p className={colorClass}>{content}</p>}
      {children}
    </div>
  );
};

const UISwiper = {
  Box,
};

UISwiper.Box.displayName = "UISwiper.Box";
export { UISwiper };
