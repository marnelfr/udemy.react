import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import ModalContext from "../../../store/Section11/modal-context";
import CartContext from "../../../store/Section11/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
  const cartContext = useContext(CartContext)
  const modalContext = useContext(ModalContext)
  const totalAmount = cartContext.cart.totalAmount.toFixed(2);
  const hasItems = cartContext.cart.items.length > 0;

  const removeItemHandler = item => {
    const amount = --item.amount;
    if(amount <= 0) {
      cartContext.removeItemHandler(item.id)
      return
    }
    const newItem = {...item, amount: amount}
    cartContext.addItemHandler(newItem)
  }

  const addItemHandler = item => {
    const amount = ++item.amount;
    if(amount >= 5) {
      return
    }
    const newItem = {...item, amount: amount}
    cartContext.addItemHandler(newItem)
  }

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.cart.items.map(
        item => <CartItem key={item.id} onRemove={removeItemHandler.bind(null, item)} onAdd={addItemHandler.bind(null, item)} price={item.price} name={item.name} amount={item.amount} />
      )}
    </ul>
  )

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={modalContext.hideModalHandler} className={styles['button--alt']}>Close</button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart