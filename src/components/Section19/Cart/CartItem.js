import classes from './CartItem.module.css';
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/Section19/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, quantity, total, price } = props.item;

  const addItemHandler = useCallback(event => {
    event.preventDefault()
    dispatch(cartActions.addItem({id}))
  }, [dispatch])

  const removeItemHandler = useCallback(event => {
    event.preventDefault()
    dispatch(cartActions.removeItem({id}))
  }, [dispatch])

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
