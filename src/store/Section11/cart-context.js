import React, {useReducer} from "react";

const CartContext = React.createContext({
  cart: {
    items: [
      {id: '', name: '', price: 0, amount: 0}
    ],
    totalAmount: 0
  },
  addItemHandler: () => {},
  removeItemHandler: () => {}
})

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
}

export const CartContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, {items: [], totalAmount: 0})

  const addItemHandler = (item) => {
    dispatch({type: 'ADD_ITEM', item})
  }

  const removeItemHandler = (id) => {
    dispatch({type: 'REMOVE_ITEM', id})
  }

  return (
    <CartContext.Provider value={{cart: state, addItemHandler, removeItemHandler}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext