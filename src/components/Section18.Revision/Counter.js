import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../../store/Section18.Revision/counter";
import {useCallback} from "react";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.value)
  const show = useSelector(state => state.counter.showCounter)
  
  const incrementHandler = useCallback(event => {
    event.preventDefault()
    dispatch(counterActions.increment())
  }, [dispatch])

  const toggleCounterHandler = useCallback(event => {
    event.preventDefault()
    dispatch(counterActions.toggle())
  }, [dispatch])

  const increaseHandler = useCallback(event => {
    event.preventDefault()
    dispatch(counterActions.increase(7))
  }, [dispatch])

  const decrementHandler = useCallback(event => {
    event.preventDefault()
    dispatch(counterActions.decrement())
  }, [dispatch])

  const resetHandler = useCallback(event => {
    event.preventDefault()
    dispatch(counterActions.reset())
  }, [dispatch])

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={`${classes.value} ${show ? classes.show : ''}`}>{ counter }</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 7</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
