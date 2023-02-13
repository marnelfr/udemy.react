import styles from './MealItemFrom.module.css'
import Input from "../../UI/Input/Input";
import {useRef} from "react";

const MealItemForm = props => {
  const inpRef = useRef()
  const submitHandler = (event) => {
    event.preventDefault()
    const amount = inpRef.current.value;
    props.onNewItem(amount)
  }
  
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inpRef}
        id={`meal-${props.id}`}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm