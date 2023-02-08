import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('')
  let items = props.items

  const filterChangeHandler = (newSelectedYear) => {
    setSelectedYear(newSelectedYear)
  }

  if(selectedYear !== '') {
      items = props.items.filter(expense => expense.date.getFullYear().toString() === selectedYear)
  }

  let expensesContent = <p>No expenses found.</p>
  if(items.length) {
      expensesContent = items.map(expense => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
      })
  }

  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedYear} onChange={filterChangeHandler} />
      {expensesContent}
    </Card>
  )
}

export default Expenses