import ReactDOM from "react-dom"

import styles from './Modal.module.css'
import {useContext} from "react";
import ModalContext from "../../../../store/Section11/modal-context";

const ModalBackdrop = props => {
  return <div onClick={props.onClose} className={styles.backdrop} />
}

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const Modal = props => {
  const context = useContext(ModalContext)

  return (
    <>
      {context.show && ReactDOM.createPortal(<ModalBackdrop onClose={context.hideModalHandler} />, document.body)}
      {context.show && ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.body)}
    </>
  )
}

export default Modal