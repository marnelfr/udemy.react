import React from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const ModalBackdrop = props => {
  return <div onClick={props.onConfirm} className={styles.backdrop}></div>
}

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        title
      </div>
      <div className={styles.body}>
        {props.message}
      </div>
      <div className={styles.footer}>
        <button onClick={props.onConfirm}>Ok</button>
      </div>
    </div>
  )
}

const Modal = ({message, onClose}) => {
  const clickHandler = () => onClose()

  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop onConfirm={clickHandler} />, document.body)}
      {ReactDOM.createPortal(<ModalOverlay message={message} onConfirm={clickHandler}/>, document.body)}
    </>
  )
}

export default Modal