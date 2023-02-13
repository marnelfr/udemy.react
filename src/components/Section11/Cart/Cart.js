import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import ModalContext from "../../../store/Modal/modal-context";
import CartContext from "../../../store/Cart/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = props => {
  const { items, totalPrice } = useContext(CartContext)
  const { hideModalHandler } = useContext(ModalContext)
  const cartItems = items.map(item => <CartItem key={item.id} price={item.price} name={item.name} amount={item.amount} />)

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={ hideModalHandler } className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;