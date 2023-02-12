import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import ModalContext from "../../../store/Section11/modal-context";

const Cart = props => {
  const context = useContext(ModalContext)
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{id: 'c1', name: 'Soushi', amount: 3, price: 12.44}].map(
        item => <li key={item.id}>{item.name}</li>
      )}
    </ul>
  )
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>34.99</span>
      </div>
      <div className={styles.actions}>
        <button onClick={context.hideModalHandler} className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart