
export type UIHeaderVariant = 'main';
export type UIHeaderSize =  'md' | 'lg'
export type UIHeaderIcon =  'bk' | 'wht'

export interface UIHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIHeaderVariant;
  size?: UIHeaderSize;
  color?: UIHeaderIcon;
  as?: React.ElementType;
}