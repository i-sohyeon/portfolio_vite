export type UIPopupVariant = "solid" | "line";
export type UIPopupBgColor = "navy" | "pink";
export type UIPopupSize = "sm" | "md";

export interface UIPopupProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  message: string;
  
  variant?: UIPopupVariant;
  bgColor?: UIPopupBgColor;
  size?: UIPopupSize;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}

// interface PopupContent {
  
// }

// interface PopupProps {
//   content: PopupContent | null;
//   onClose: () => void;
// }