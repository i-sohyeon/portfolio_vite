import React from "react";
import type { SlideItemProps, SwiperProps } from "./types";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types"; // 1. Swiper 타입 임포트
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
  onSwiper,
  pagination = false,
}) => {
  const classes = [
    styles[`ui-swiper`],
    styles[`ui-swiper-${variant}`],
    styles[`ui-swiper-${bgColor}`],
    styles[`ui-swiper-${titleColor}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // 2. SwiperClass 타입을 적용하여 any 제거
  const handleSwiper = (swiper: SwiperClass) => {
    if (swiper.el) {
      swiper.el.style.overflow = "visible";
    }
    onSwiper?.(swiper);
  };

  return (
    <Swiper
      onSwiper={handleSwiper}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1.5}
      breakpoints={{
        320: { slidesPerView: 1 },
        480: { slidesPerView: 1.5 },
        768: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 2 },
      }}
      navigation={false}
      pagination={pagination ? { clickable: true } : false}
      className={`${styles.swiperBox} ${classes}`}
    >
      {/* 주의: Swiper의 직계 자식은 SwiperSlide여야 합니다 */}
      {children}
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
  const classes = [styles[`ui-swiper-${bgColor}`]].filter(Boolean).join(" ");
  const colorClass = titleColor ? styles[`ui-title-color-${titleColor}`] : "";

  return (
    <div className={`${styles.slideItem} ${classes}`}>
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
