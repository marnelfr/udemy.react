import React, { MouseEventHandler } from "react";

import CartItem from "./CartItem";
import Checkout from "./Checkout/Checkout";
import Modal from "../UI/Modal/Modal";

import styles from "./Cart.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { modalActions } from "../../redux/modal";

const Cart: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const closeHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch(modalActions.hideModal());
  };

  return (
    <Modal>
      <CartItem />
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>31,10</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
      <Checkout />

      <p>Your order has been submitted successfully</p>
      <small>Please, check your email</small>
      <div className={styles.actions}>
        <button onClick={closeHandler} className={styles["button--alt"]}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
