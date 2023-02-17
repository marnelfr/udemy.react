import React, {useReducer} from "react";

const CartContext = React.createContext({
  cart: {
    items: [
      {id: '', name: '', price: 0, amount: 0}
    ],
    totalAmount: 0
  },
  addItemHandler: () => {},
  removeItemHandler: () => {},
  resetCart: () => {}
})

const initialState = {items: [], totalAmount: 0};

const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM') {
    const filteredItems = state.items.filter(item => item.id !== action.item.id)
    const items = [...filteredItems, action.item]

    const totalAmount = items.reduce((total, item) => {
      return total + (item.price * item.amount)
    }, 0)

    return {items, totalAmount}
  }

  if(action.type === 'REMOVE_ITEM') {
    const items = state.items.filter(item => item.id !== action.id)

    const totalAmount = items.reduce((total, item) => {
      return total + (item.price * item.amount)
    }, 0)

    return {items, totalAmount}
  }

  return initialState
}

export const CartContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItemHandler = (item) => {
    dispatch({type: 'ADD_ITEM', item})
  }

  const removeItemHandler = (id) => {
    dispatch({type: 'REMOVE_ITEM', id})
  }

  const resetCart = () => {
    dispatch({type: 'RESET'})
  }

  return (
    <CartContext.Provider value={{cart: state, addItemHandler, removeItemHandler, resetCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext