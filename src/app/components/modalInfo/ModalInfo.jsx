import styles from "./styles.module.css"; // Agrega tu archivo de estilos del modal

const Modal = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen
    ? `${styles.modalOverlay} ${styles.modalOpen}`
    : styles.modalOverlay;

  return (
    <div className={modalClassName} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
