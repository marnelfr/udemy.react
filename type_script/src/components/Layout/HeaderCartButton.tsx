import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MouseEventHandler } from "react";
import { modalActions } from "../../redux/modal";

const HeaderCartButton: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.cart.total);

  const clickHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch(modalActions.showModal());
  };

  return (
    <button
      onClick={clickHandler}
      className={`${styles.button} ${styles.bump}`}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
