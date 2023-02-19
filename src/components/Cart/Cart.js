import styles from './Cart.module.css'

import CartItem from "./CartItem";
import Checkout from "./Checkout/Checkout";
import Modal from "../UI/Modal/Modal";
import {useContext, useState} from "react";
import ModalContext from "../../store/modal-context";
import CartContext from "../../store/CartContext/cart-context";

const Cart = props => {
  const cartContext = useContext(CartContext)
  const modalContext = useContext(ModalContext)
  const [showForm, setShowForm] = useState(false)
  const cartItemList = cartContext.items.map(item => <CartItem key={item.id} {...item} />)
  const price = cartContext.totalPrice.toFixed(2);
  const hasItem = cartContext.items.length !== 0

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [didSubmit, setDidSubmit] = useState(false)

  const showFormHandler = event => {
    event.preventDefault()
    setShowForm(true)
  }

  const hideFormHandler = event => {
    event.preventDefault()
    setShowForm(false)
  }

  const hideModalHandler = event => {
    setDidSubmit(false)
    modalContext.hideModalHandler(event)
  }

  const checkoutSubmitHandler = customer => {
    const data = {
      customer,
      items: cartContext.items,
      totalPrice: price
    }
    setIsLoading(true)
    fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/meals/orders.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if(response.ok) {
        cartContext.resetAll()
      }
    }).catch(error => {
      setError('Error while saving the order information')
    }).finally(() => {
      setIsLoading(false)
      setShowForm(false)
      setDidSubmit(true)
    })
  }

  return (
    <Modal>
      {!didSubmit && (
        <>
          <div className={styles['cart-items']}>
            {cartItemList}
          </div>
          <div className={styles.total}>
            <span>Total Price</span>
            <span>{price}</span>
          </div>
        </>
      )}

      {didSubmit && !error && (
        <>
          <p>Your order has been submitted successfully</p>
          <small>Please, check your email</small>
        </>
      )}

      {didSubmit && error && (
        <>
          <p className={styles.invalid}>{error}</p>
        </>
      )}

      {!showForm && (
        <div className={styles.actions}>
          <button onClick={hideModalHandler} className={styles['button--alt']}>Close</button>
          {hasItem && !didSubmit && <button onClick={showFormHandler} className={styles.button}>Order</button>}
        </div>
      )}

      {showForm && (
        <div className={styles['cart-items']}>
          <Checkout isLoading={isLoading} onSubmit={checkoutSubmitHandler} onHideForm={hideFormHandler} />
        </div>
      )}
    </Modal>
  )
}

export default Cart