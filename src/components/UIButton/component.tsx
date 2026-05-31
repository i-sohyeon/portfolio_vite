import React from 'react';
import type { UIButtonProps } from "./types";
// import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';

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

