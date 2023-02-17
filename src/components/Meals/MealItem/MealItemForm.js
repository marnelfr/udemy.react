import styles from './MealItemFrom.module.css'
import {useRef, useState} from "react";

const MealItemForm = ({id, amount, onAddItem}) => {
  const [error, setError] = useState('')
  const inpRef = useRef()

  const submitHandler = event => {
    event.preventDefault()
    const newAmount = +inpRef.current.value
    if(newAmount < 1) {
      setError('Please enter a valid amount.')
      return
    }
    if(newAmount + amount > 20) {
      setError("Can't add more than 20 items")
      return
    }

    setError('')
    onAddItem(newAmount)
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor={'meal' + id}>Amount</label>
        <input ref={inpRef} type="number" id={'meal' + id} defaultValue="1" min="1" max="10" step="1" />
      </div>
      <button>+ Add</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default MealItemForm