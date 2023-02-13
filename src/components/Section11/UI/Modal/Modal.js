import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const Backdrop = props => <div className={styles.backdrop}/>

const ModalContent = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop/>, document.body)}
      {ReactDOM.createPortal(<ModalContent>{props.children}</ModalContent>, document.body)}
    </>
  )
}

export default Modal;