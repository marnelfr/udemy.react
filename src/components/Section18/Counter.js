import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  const toggleCounterHandler = () => {};

  const incrementHandler = event => {
    event.preventDefault()
    dispatch({type: 'increment'})
  }

  const decrementHandler = event => {
    event.preventDefault()
    dispatch({type: 'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
