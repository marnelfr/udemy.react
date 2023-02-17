import styles from './CartItem.module.css'
import {useContext} from "react";
import CartContext from "../../store/CartContext/cart-context";

const CartItem = ({id, name, price, amount}) => {
  const cartContext = useContext(CartContext)
  price = price.toFixed(2)

  const addItemHandler = event => {
    event.preventDefault()
    const maxAmount = 20;
    if(amount >= maxAmount) {
      return
    }
    cartContext.addItem({id, name, price, amount: 1})
  }

  const removeItemHandler = event => {
    event.preventDefault()
    cartContext.removeItem(id)
  }



  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  )
}

export default CartItem