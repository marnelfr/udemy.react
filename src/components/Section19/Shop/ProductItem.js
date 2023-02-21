import Card from '../UI/Card/Card';
import classes from './ProductItem.module.css';
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/Section19/cart";

const ProductItem = ({id, title, price, description }) => {
  const dispatch = useDispatch()
  const addToCartHandler = useCallback(event => {
    event.preventDefault()
    const item = {id, title, price}
    dispatch(cartActions.addItem(item))
  }, [dispatch, id, title, price])

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
