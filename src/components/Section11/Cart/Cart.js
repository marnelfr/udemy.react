import styles from './Cart.modules.css'

const Cart = props => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{id: 'c1', name: 'Soushi', amount: 3, price: 12.44}].map(
        item => <li key={item.id}>{item.name}</li>
      )}
    </ul>
  )
  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>34.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  )
}

export default Cart