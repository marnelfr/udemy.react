import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {modalActions} from "../../../store/Section19/modal";

const CartButton = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const totalItem = items.reduce((prevVal, item) => prevVal + item.quantity, 0)

  const clickHandler = useCallback(event => {
    event.preventDefault()
    dispatch(modalActions.show())
  }, [dispatch])

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
