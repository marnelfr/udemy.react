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
      const existingItem = state.items[existingItemIndex];

      //Updating the item
      const amount = existingItem.amount + action.item.amount
      console.log(existingItem.amount, action.item.amount, amount);
      const additionalPrice = action.item.amount * action.item.price;
      const price = existingItem.price + additionalPrice
      const updatedItem = {...existingItem, amount, price}

      //Updating the totalPrice
      const totalPrice = state.totalPrice + price

      //Updating the items
      state.items[existingItemIndex] = updatedItem
      const items = [...state.items]

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