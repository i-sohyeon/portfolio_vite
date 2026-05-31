import React from 'react';
import type { UIButtonProps } from "./types";
// import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';

// export const Text: React.FC<UIButtonProps> = ({ 
//   variant,
//   className,
//   children,
//   to="/",
//   as: UIButton = "button", 
//   ...rest

//  }) => {

//   const classes = [
//     styles["ui-button"],
//     styles[`ui-button-${variant}`],
//     className
//   ]
//   .filter(Boolean)
//   .join(" ");

//   // const linkTo = to ?? "/"; 
//   // to가 undefined일 경우 "/"로 설정

//   return (
//     // <Link to={linkTo}>
//     //   <button type='button'>{children}</button>
//     // </Link>

//     // <Link to={to} className={className}>
//     //   <button>{children}</button>
//     // </Link>
    
//   );
// };


export const Text: React.FC<UIButtonProps> = ({ to, children, className }) => {
  if (!children) {
    return null;
  }

  if (to) {
    return (
      <Link to={to}>
        <button className={className}>{children}</button>
      </Link>
    );
  }

  return (
    <button className={className}>{children}</button>
  );
};

const UIButton = {
  Text,
}

UIButton.Text.displayName = "UIButton.Text";

export {UIButton}

