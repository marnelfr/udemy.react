import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={props.onNewExpense} />
    </div>
  )
}

export default NewExpense