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

  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedYear} onChange={filterChangeHandler} />

      {items.map(expense => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
      })}
    </Card>
  )
}

export default Expenses