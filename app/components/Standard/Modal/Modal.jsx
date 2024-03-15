import React from "react";
import styles from "./modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen
    ? `${styles.modalOverlay} ${styles.open}`
    : styles.modalOverlay;

  return (
    <div className={modalClassName} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          X
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
