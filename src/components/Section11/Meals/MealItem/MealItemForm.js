import {useRef} from "react";
import Input from "../../UI/Input/Input";

import styles from './MealItemFrom.module.css'

const MealItemForm = props => {
  const ref = useRef()

  const addCartHandler = event => {
    event.preventDefault()
    props.onCartAdd(ref.current.value)
  }

  return (
    <form className={styles.form}>
      <Input
        ref={ref}
        id={`meal-${props.id}`}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button onClick={addCartHandler}>+ Add</button>
    </form>
  )
}

export default MealItemForm