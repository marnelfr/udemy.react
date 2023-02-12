import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import ModalContext from "../../../store/Section11/modal-context";
import CartContext from "../../../store/Section11/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
  const cartContext = useContext(CartContext)
  const modalContext = useContext(ModalContext)

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.cart.items.map(
        item => <CartItem price={item.price} name={item.name} amount={item.amount} />
      )}
    </ul>
  )

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartContext.cart.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={modalContext.hideModalHandler} className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart