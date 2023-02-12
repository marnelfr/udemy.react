import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import {useContext, useEffect, useState} from "react";
import ModalContext from "../../../store/Section11/modal-context";
import CartContext from "../../../store/Section11/cart-context";

const HeaderCartButton = props => {
  const modalContext = useContext(ModalContext)
  const cartContext = useContext(CartContext)
  const [isAnimated, setIsAnimated] = useState(false)

  const btnClasses = `${styles.button} ${isAnimated ? styles.bump : ''}`

  const totalItemsInTheCart = cartContext.cart.items.length;
  useEffect(() => {
    if(totalItemsInTheCart === 0) {
      return
    }

    setIsAnimated(true)
    const timer = setTimeout(() => {
      setIsAnimated(false)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [totalItemsInTheCart])

  return (
    <button onClick={modalContext.showModalHandler} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItemsInTheCart}</span>
    </button>
  );
};

export default HeaderCartButton;