import styles from "./CartItem.module.css";
import React from "react";
import Meal from "../../modeles/meal";

const CartItem: React.FC<{ meal: Meal; amount: number }> = ({
  meal,
  amount,
}) => {
  const price = meal.price.toFixed(2);
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
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
