import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import {useContext, useEffect, useState} from "react";
import ModalContext from "../../store/modal-context";
import CartContext from "../../store/CartContext/cart-context";

const HeaderCartButton = props => {
  const { showModalHandler } = useContext(ModalContext)
  const { items } = useContext(CartContext)
  const [isAnimated, setIsAnimated] = useState(false)
  const totalItem = items.reduce((prevValue, item) => prevValue + item.amount, 0)
  let btnClasses = `${styles.button} ${styles.bump}`

  useEffect(() => {
    setIsAnimated(true)
    const timer = setTimeout(() => {
      setIsAnimated(false)
    }, 300)
    return () => {}
  }, [totalItem])

  if(!isAnimated) {
    btnClasses = styles.button
  }

  return (
    <button onClick={showModalHandler} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItem}</span>
    </button>
  );
};

export default HeaderCartButton;