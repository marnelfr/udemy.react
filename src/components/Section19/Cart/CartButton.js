import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {modalActions} from "../../../store/Section19/modal";

const CartButton = (props) => {
  const dispatch = useDispatch()
  const [isAnimated, setIsAnimated] = useState(false)
  const items = useSelector(state => state.cart.items)
  const totalItem = items.reduce((prevVal, item) => prevVal + item.quantity, 0)

  useEffect(() => {
    setIsAnimated(true)

    const timer = setTimeout(() => setIsAnimated(false), 300)

    return () => clearTimeout(timer)
  }, [totalItem])

  const clickHandler = useCallback(event => {
    event.preventDefault()
    dispatch(modalActions.show())
  }, [dispatch])

  const btnClasses = isAnimated ? classes.button + ' ' + classes.bump : classes.button

  return (
    <button onClick={clickHandler} className={btnClasses}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
