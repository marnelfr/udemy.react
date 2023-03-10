import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { MouseEventHandler } from "react";
import { modalActions } from "../../redux/modal";

const HeaderCartButton: React.FC = (props) => {
  const dispatch = useAppDispatch();

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
      <span className={styles.badge}>45</span>
    </button>
  );
};

export default HeaderCartButton;
