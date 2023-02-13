import ReactDOM from "react-dom";
import styles from './Modal.module.css'
import {useContext} from "react";
import ModalContext from "../../../../store/Modal/modal-context";

const Backdrop = props => <div onClick={props.onClose} className={styles.backdrop}/>

const ModalContent = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const Modal = props => {
  const { show: isModalShow, hideModalHandler } = useContext(ModalContext)

  return (
    <>
      { isModalShow && ReactDOM.createPortal(<ModalContent>{props.children}</ModalContent>, document.body) }
      { isModalShow && ReactDOM.createPortal(<Backdrop onClose={ hideModalHandler } />, document.body) }
    </>
  )
}

export default Modal;