import styles from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import {useCallback, useContext, useState} from "react";
import ModalContext from "../../../store/Section11/modal-context";
import CartContext from "../../../store/Section11/cart-context";
import CartItem from "./CartItem";
import Form from "./Form/Form";
import useFetch from "../hooks/use-fetch";

const Cart = props => {
  const cartContext = useContext(CartContext)
  const modalContext = useContext(ModalContext)
  const [showForm, setShowForm] = useState(false)
  const {isLoading, error, sendRequest} = useFetch()

  const totalAmount = cartContext.cart.totalAmount.toFixed(2);
  const hasItems = cartContext.cart.items.length > 0;

  const removeItemHandler = item => {
    const amount = --item.amount;
    if(amount <= 0) {
      cartContext.removeItemHandler(item.id)
      return
    }
    const newItem = {...item, amount: amount}
    cartContext.addItemHandler(newItem)
  }

  const addItemHandler = item => {
    const amount = ++item.amount;
    if(amount >= 5) {
      return
    }
    const newItem = {...item, amount: amount}
    cartContext.addItemHandler(newItem)
  }

  const startOrderHandler = useCallback(event => {
    event.preventDefault()
    setShowForm(true)
  }, [])

  const cancelOrderHandler = useCallback(event => {
    event.preventDefault()
    setShowForm(false)
  }, [])

  const getter = (response) => {

  }
  const orderSubmittedHandler = useCallback(customer => {
    const data = {
      ...customer,
      order: {
        items: cartContext.cart.items,
        totalAmount
      }
    }
    sendRequest('https://udemy-react-a7270-default-rtdb.firebaseio.com/meals/orders.json', getter, 'POST', data)
  }, [cartContext.cart.items, totalAmount, sendRequest])

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.cart.items.map(
        item => <CartItem key={item.id} onRemove={removeItemHandler.bind(null, item)} onAdd={addItemHandler.bind(null, item)} price={item.price} name={item.name} amount={item.amount} />
      )}
    </ul>
  )

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!showForm && (
        <div className={styles.actions}>
          <button onClick={modalContext.hideModalHandler} className={styles['button--alt']}>Close</button>
          {hasItems && <button onClick={startOrderHandler} className={styles.button}>Order</button>}
        </div>
      )}
      {showForm && <Form onOrderSubmitted ={orderSubmittedHandler} onCancel={cancelOrderHandler} />}
    </Modal>
  )
}

export default Cart