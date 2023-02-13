import CartContext from "./cart-context";
import {useReducer} from "react";

const providerDefaultValue = {
  items: [],
  totalPrice: 0,
  addItem: item => {},
  removeItem: id => {}
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {

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