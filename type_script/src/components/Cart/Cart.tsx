import React, { MouseEventHandler, useCallback, useState } from "react";

import CartItem from "./CartItem";
import Checkout from "./Checkout/Checkout";
import Modal from "../UI/Modal/Modal";

import styles from "./Cart.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { modalActions } from "../../redux/modal";
import OrderInfo from "../../modeles/order";

const Cart: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const totalItem = useAppSelector((state) => state.cart.totalItem);
  const [showCheckout, setShowCheckout] = useState(false);
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const CartItemList = items.map((item) => (
    <CartItem key={item.meal.id} meal={item.meal} amount={item.amount} />
  ));

  const closeHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(modalActions.hideModal());
    },
    [dispatch]
  );

  const displayCheckoutHandler: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    setShowCheckout(true);
  }, []);

  const cancelHandler: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    setShowCheckout(false);
  }, []);

  const orderHandler = useCallback((orderInfo: OrderInfo) => {
    const order = {
      ...orderInfo,
      items: items.slice(),
    };
    // todo: We'll send it to a backend
    console.log(order);
  }, []);

  return (
    <Modal>
      {CartItemList}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      {!showCheckout && (
        <div className={styles.actions}>
          <button onClick={closeHandler} className={styles["button--alt"]}>
            Close
          </button>
          {totalItem !== 0 && (
            <button onClick={displayCheckoutHandler} className={styles.button}>
              Order
            </button>
          )}
        </div>
      )}

      {showCheckout && (
        <Checkout onOrder={orderHandler} onCancel={cancelHandler} />
      )}

      {/*<p>Your order has been submitted successfully</p>
      <small>Please, check your email</small>
      <div className={styles.actions}>
        <button onClick={closeHandler} className={styles["button--alt"]}>
          Close
        </button>
      </div>*/}
    </Modal>
  );
};

export default Cart;
