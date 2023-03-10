import styles from "./CartItem.module.css";
import React, { MouseEventHandler, useCallback } from "react";
import Meal from "../../modeles/meal";
import { useAppDispatch } from "../../redux/hooks";
import { cartActions } from "../../redux/cart";

const CartItem: React.FC<{ meal: Meal; amount: number }> = ({
  meal,
  amount,
}) => {
  const dispatch = useAppDispatch();
  const price = meal.price.toFixed(2);

  const removeItemHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(cartActions.remove(meal.id));
    },
    [dispatch]
  );

  const addItemHandler: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    dispatch(cartActions.add({ meal, amount: 1 }));
  }, []);

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{meal.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
