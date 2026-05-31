import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const UIPopup: React.FC<{ content: string | React.ReactNode; onClose: () => void }> = ({
  content,
  onClose,
}) => {

  useEffect(() => {
    // 팝업 열리면 스크롤 막기
    document.body.style.overflow = "hidden";

    // 팝업 닫히면 원래대로 복구
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={`${styles.popupOverlay}`} onClick={onClose}>
      <div className={`${styles.popupContent}`} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={`${styles.popupbutton}`}>
        </button>
        <div className={`${styles.content}`}>
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
  
      </div>
    </div>
  );
};

export default UIPopup;
