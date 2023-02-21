import classes from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {modalActions} from "../../../store/Section19/modal";

const CartButton = (props) => {
  const dispatch = useDispatch()

  const clickHandler = useCallback(event => {
    event.preventDefault()
    dispatch(modalActions.show())
  }, [dispatch])

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
