export type UIBannerVariant = 'text' | 'list' | 'card';
export type UIBannerBgColor = 'type1' | 'type2'| 'type3' | 'type4' | 'type5' | 'type6' ;
export type UIBannerBgPattern = 'check';
export type UITextListIcon = "study" | "company";
export type UIBannerjContent = "center"

export interface UIBannerProps {
  icon?: string;
  number?: number | string;
  title: string;
  des?: string;
  variant?: string;
  bgColor?: string;
  jContent?: string;
  className?: string;
  [key: string]: any; // 기타 props 허용
}


