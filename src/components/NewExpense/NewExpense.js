import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const handleSaveExpenseData = (expenseData) => {
    const newExpense = {...expenseData, id: Math.random().toString()}
    props.onNewExpense(newExpense)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData}/>
    </div>
  )
}

export default NewExpense