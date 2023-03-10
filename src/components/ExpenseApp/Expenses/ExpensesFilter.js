import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const changeHandler = (event) => {
    props.onChange(event.target.value)
  }
  // todo: receive a props of years based on expenses years and update this component
  // todo: find the way to automatically switch to the year of a new added expense
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.year} onChange={changeHandler}>
          <option value=''>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;