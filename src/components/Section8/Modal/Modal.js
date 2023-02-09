import React from "react";
import styles from './Modal.module.css'

const Modal = ({message, onClose}) => {
  const clickHandler = (event) => {
    event.preventDefault()
    onClose()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          title
        </div>
        <div className={styles.body}>
          {message}
        </div>
        <div className={styles.footer}>
          <button onClick={clickHandler}>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default Modal