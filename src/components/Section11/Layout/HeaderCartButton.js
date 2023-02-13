import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import {useContext} from "react";
import ModalContext from "../../../store/Modal/modal-context";
import CartContext from "../../../store/Cart/cart-context";

const HeaderCartButton = props => {
  const { showModalHandler } = useContext(ModalContext)
  const { items } = useContext(CartContext)
  const totalItemAdded = items.length

  return (
    <button onClick={ showModalHandler } className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{ totalItemAdded }</span>
    </button>
  );
};

export default HeaderCartButton;