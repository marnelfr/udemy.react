import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle-counter'})
  };

  const incrementHandler = event => {
    event.preventDefault()
    dispatch({type: 'increment', step: 1})
  }

  const incrementBy5Handler = event => {
    event.preventDefault()
    dispatch({type: 'increment', step: 5})
  }

  const decrementHandler = event => {
    event.preventDefault()
    dispatch({type: 'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
