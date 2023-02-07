import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = () => {
  // const [title, setTitle] = useState('')
  // const [amount, setAmount] = useState(0)
  // const [date, setDate] = useState('')
  const [userInput, setUserInput] = useState({
    title: '', amount: '', date: ''
  })

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value)
    setUserInput(prevState => {
      return {...prevState, title: event.target.value}
    })
  }

  const amountChangeHandler = (event) => {
    // setAmount(event.target.value)
    setUserInput(prevState => {
      return {...prevState, amount: event.target.value}
    })
  }

  const dateChangeHandler = (event) => {
    // setDate(event.target.value)
    setUserInput(prevState => {
      return {...prevState, date: event.target.value}
    })
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} value={userInput.title} type="text"/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={amountChangeHandler} value={userInput.amount} type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={dateChangeHandler} type="date" value={userInput.date} min="2022-12-01" max="2024-12-01"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>New Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm