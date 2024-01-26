"use client";
import clsx from "clsx";
import styles from "./styles.module.css";
const Modal = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen
    ? `${styles.modalOverlay} ${styles.modalOpen}`
    : styles.modalOverlay;

  return (
    <div
      className={modalClassName}
      onClick={onClose}
      data-testid="modalOverlay"
    >
      <div
        className={clsx(
          styles.modalContent,
          "relative text-[1.1rem] md:text-[1.5rem]"
        )}
        onClick={(e) => e.stopPropagation()}
        data-testid="modalContent"
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          data-testid="closeButton"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
