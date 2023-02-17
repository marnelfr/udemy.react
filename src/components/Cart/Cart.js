import styles from './Cart.module.css'

import CartItem from "./CartItem";
import Checkout from "./Checkout/Checkout";
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import ModalContext from "../../store/modal-context";

const Cart = props => {
  const modalContext = useContext(ModalContext)

  return (
    <Modal>
      <CartItem/>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>31,10</span>
      </div>
      <div className={styles.actions}>
        <button onClick={modalContext.hideModalHandler} className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
      <Checkout />

      <p>Your order has been submitted successfully</p>
      <small>Please, check your email</small>
      <div className={styles.actions}>
        <button onClick={modalContext.hideModalHandler} className={styles['button--alt']}>Close</button>
      </div>
    </Modal>
  )
}

export default Cart