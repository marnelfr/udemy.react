import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import {useContext} from "react";
import ModalContext from "../../../store/Modal/modal-context";

const HeaderCartButton = props => {
  const { showModalHandler } = useContext(ModalContext)

  return (
    <button onClick={ showModalHandler } className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;