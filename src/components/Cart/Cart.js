import styles from './Cart.module.css'

import CartItem from "./CartItem";
import Checkout from "./Checkout/Checkout";
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import ModalContext from "../../store/modal-context";
import CartContext from "../../store/CartContext/cart-context";

const Cart = props => {
  const cartContext = useContext(CartContext)
  const modalContext = useContext(ModalContext)
  const cartItemList = cartContext.items.map(item => <CartItem key={item.id} {...item} />)
  const price = cartContext.totalPrice.toFixed(2);

  return (
    <Modal>
      {cartItemList}
      <div className={styles.total}>
        <span>Total Price</span>
        <span>{price}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={modalContext.hideModalHandler} className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
      {/*<Checkout />*/}

      {/*<p>Your order has been submitted successfully</p>
      <small>Please, check your email</small>
      <div className={styles.actions}>
        <button onClick={modalContext.hideModalHandler} className={styles['button--alt']}>Close</button>
      </div>*/}
    </Modal>
  )
}

export default Cart