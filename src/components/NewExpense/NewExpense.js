import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (expenseData) => {
    const newExpense = {...expenseData, id: Math.random().toString()}
    props.onNewExpense(newExpense)
    setIsEditing(false)
  }

  const startEditingHandler = (event) => {
    event.preventDefault()
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {
        isEditing
          ? <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>
          : <button onClick={startEditingHandler}>Add New Expense</button>
      }
    </div>
  )
}

export default NewExpense