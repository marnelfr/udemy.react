import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";

const Cart = props => {
  const cartItems = [{id: 'c1', name: 'Sushi', amount: 3, price: 12.33}].map(item => <li>{item.name}</li>)

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;