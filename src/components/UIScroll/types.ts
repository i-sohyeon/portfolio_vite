
export interface UIScrollToTopProps extends React.HTMLAttributes<HTMLElement>{
  className?: string;
}

export interface UIScrollButtonProps {
  className?: string;
  threshold?: number; // 버튼 노출 기준 스크롤 위치(px)
  style?: React.CSSProperties;
}