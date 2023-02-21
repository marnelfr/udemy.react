import styles from './Modal.module.css'
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {modalActions} from "../../../../store/Section19/modal";

const Backdrop = props => {
  const dispatch = useDispatch()

  const clickHandler = useCallback(event => {
    event.preventDefault()
    dispatch(modalActions.hide())
  }, [dispatch])

  return (
    <div onClick={clickHandler} className={styles.backdrop}/>
  )
}

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