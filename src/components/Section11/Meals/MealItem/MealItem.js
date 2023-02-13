import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../../store/Cart/cart-context";

const MealItem = props => {
  const { addItem } = useContext(CartContext)

  const newItemHandler = amount => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount
    }
    addItem(item)
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onNewItem={newItemHandler} id={props.id}/>
      </div>
    </li>
  )
}

export default MealItem