import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title, amount, date: new Date(date)
    }
    props.onNewExpense(expenseData)

    setTitle('')
    setDate('')
    setAmount('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} value={title} type="text"/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={amountChangeHandler} value={amount} type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={dateChangeHandler} type="date" value={date} min="2022-12-01" max="2024-12-01"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>New Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm