import { type PropsWithChildren, type ReactElement } from "react";

import styles from "./Modal.module.scss";

export interface ModalProps {
  onClose: () => void;
  title: string;
}

const Modal = ({
  children,
  onClose,
  title,
}: PropsWithChildren<ModalProps>): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Modal;
