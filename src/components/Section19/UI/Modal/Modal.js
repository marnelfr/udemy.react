import styles from './Modal.module.css'

const Backdrop = props => <div className={styles.backdrop}/>

const ModalContent = props => {
  return (
    <div className={styles.modal}>
      {props.children}
    </div>
  )
}

const Modal = props => {
  return (
    <>
      <Backdrop/>
      <ModalContent>{props.children}</ModalContent>
    </>
  )
}

export default Modal