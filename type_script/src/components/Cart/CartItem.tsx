import styles from "./CartItem.module.css";
import React from "react";

const CartItem: React.FC = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>Sushi</h2>
        <div className={styles.summary}>
          <span className={styles.price}>15,55</span>
          <span className={styles.amount}>x 2</span>
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
