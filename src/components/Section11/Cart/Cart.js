import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import ModalContext from "../../../store/Modal/modal-context";

const Cart = props => {
  const { hideModalHandler } = useContext(ModalContext)
  const cartItems = [{id: 'c1', name: 'Sushi', amount: 3, price: 12.33}].map(item => <li key={item.id}>{item.name}</li>)

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={styles.actions}>
        <button onClick={ hideModalHandler } className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;