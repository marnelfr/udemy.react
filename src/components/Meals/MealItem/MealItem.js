import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/CartContext/cart-context";

const MealItem = ({id, name, description, price}) => {
  const cartContext = useContext(CartContext)
  const index = cartContext.items.findIndex(item => item.id === id)

  const amount = index >= 0 ? cartContext.items[index].amount : 0

  const addItemHandler = amount => {
    cartContext.addItem({id, name, price, amount})
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={addItemHandler} amount={amount} id={id}/>
      </div>
    </li>
  )
}

export default MealItem