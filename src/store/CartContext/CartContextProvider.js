import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultState = {items: [], totalPrice: 0};

const getTotalPrice = items => {
  return items.reduce((prevValue, item) => {
    return prevValue + item.price * item.amount
  }, 0)
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const index = state.items.findIndex(item => item.id === action.item.id)
    let items = [...state.items]

    if(index >= 0) {
      const existedItem = items[index]
      const totalAmount = existedItem.amount + action.item.amount
      items[index] = {...existedItem, amount: totalAmount}
    } else {
      items = items.concat(action.item)
    }

    return {items, totalPrice: getTotalPrice(items)}
  }

  if(action.type === 'REMOVE') {
    const items = [...state.items]
    const index = items.findIndex(item => item.id === action.id)
    const item = items[index]
    const amount = item.amount - 1

    if(amount === 0) {
      items.splice(index, 1)
    } else {
      items[index] = {...item, amount}
    }

    return {items, totalPrice: getTotalPrice(items)}
  }

  return defaultState
}
/*items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {}
  */
const CartContextProvider = props => {
  const [state, dispath] = useReducer(cartReducer, defaultState)

  const addItem = item => dispath({type: 'ADD', item})

  const removeItem = id => dispath({type: 'REMOVE', id})

  const resetAll = () => dispath({type: 'RESET'})

  const providerValue = {
    items: state.items,
    totalPrice: state.totalPrice,
    addItem,
    removeItem,
    resetAll
  }

  return (
    <CartContext.Provider value={providerValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider