import styles from './Modal.module.css'
import {useContext} from "react";
import ModalContext from "../../../store/modal-context";

const Backdrop = props => <div onClick={props.onClose} className={styles.backdrop} />

const ModalContent = props => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  )
}

const Modal = props => {
  const {show, hideModalHandler} = useContext(ModalContext)
  return (
    <>
      { show && <Backdrop onClose={hideModalHandler} /> }
      { show && <ModalContent>{props.children}</ModalContent> }
    </>
  )
}

export default Modal