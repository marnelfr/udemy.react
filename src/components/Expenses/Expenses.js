import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList items={items} />
    </Card>
  )
}

export default Expenses