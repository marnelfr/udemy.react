import {useRef, useState} from "react";
import Input from "../../UI/Input/Input";

import styles from './MealItemFrom.module.css'

const MealItemForm = props => {
  const ref = useRef()
  const [isValid, setIsValid] = useState(true)

  const submitHandler = event => {
    event.preventDefault()
    const amount = ref.current.value;
    const amountDigit = +amount
    if(amount.trim().length === 0 || amountDigit < 1 || amountDigit > 5) {
      setIsValid(false)
      return
    }
    setIsValid(true)
    props.onCartAdd(amount)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
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
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount.</p>}
    </form>
  )
}

export default MealItemForm