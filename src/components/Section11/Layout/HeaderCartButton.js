import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import {useContext} from "react";
import ModalContext from "../../../store/Section11/modal-context";
import CartContext from "../../../store/Section11/cart-context";

const HeaderCartButton = props => {
  const modalContext = useContext(ModalContext)
  const cartContext = useContext(CartContext)

  return (
    <button onClick={modalContext.showModalHandler} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartContext.cart.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;