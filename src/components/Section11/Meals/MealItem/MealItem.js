import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../../store/Section11/cart-context";

const MealItem = props => {
  const cartContext = useContext(CartContext)
  const price = props.price.toFixed(2);

  const cartAddHandler = amount => {
    const item = {
      id: props.id,
      name: props.name,
      price,
      amount
    }
    cartContext.addItemHandler(item)
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div>
        <MealItemForm onCartAdd={cartAddHandler} id={props.id}/>
      </div>
    </li>
  )
}

export default MealItem