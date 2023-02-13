import CartContext from "./cart-context";
import {useReducer} from "react";

const providerDefaultValue = {
  items: [],
  totalPrice: 0
}

const cartReducer = (state, action) => {
  console.log("pl");
  if(action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    if(existingItemIndex >= 0) {
      //Updating the item
      const amount = state.items[existingItemIndex].amount + action.item.amount
      const updatedItem = {...state.items[existingItemIndex], amount}

      //Updating the totalPrice
      const totalPrice = state.totalPrice + action.item.price * action.item.amount

      //Updating the items
      const items = [...state.items]
      items[existingItemIndex] = updatedItem

      return {items, totalPrice}
    } else {
      const items = [...state.items, action.item]
      const totalPrice = state.totalPrice + (action.item.price * action.item.amount)

      return {items, totalPrice}
    }
  }

  if(action.type === 'REMOVE') {

  }

  return providerDefaultValue
}

const CartContextProvider = props => {
  const [state, dispatch] = useReducer(cartReducer, providerDefaultValue)

  const addItem = item => {
    dispatch({type: 'ADD', item})
  }

  const removeItem = id => {
    dispatch({type: 'REMOVE', id})
  }

  const providerDefinedValue = {
    items: state.items,
    totalPrice: state.totalPrice,
    addItem,
    removeItem
  }

  return (
    <CartContext.Provider value={providerDefinedValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider