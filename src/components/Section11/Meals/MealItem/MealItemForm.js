import styles from './MealItemFrom.module.css'
import Input from "../../UI/Input/Input";

const MealItemForm = props => {
  return (
    <form className={styles.form}>
      <Input
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