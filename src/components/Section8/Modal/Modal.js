import React from "react";
import styles from './Modal.module.css'

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          title
        </div>
        <div className={styles.body}>
          The content of the modal
        </div>
        <div className={styles.footer}>
          <button>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default Modal