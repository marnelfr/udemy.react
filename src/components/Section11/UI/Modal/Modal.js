import ReactDOM from "react-dom"

import styles from './Modal.module.css'
import {useState} from "react";

const ModalBackdrop = props => {
  return <div className={styles.backdrop} />
}

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop />, document.body)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.body)}
    </>
  )
}

export default Modal