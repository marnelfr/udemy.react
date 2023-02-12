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

    const totalAmount = items.reduce((item1, item2) => {
      const totalAmount1 = item1.price * item1.amount
      const totalAmount2 = item2.price * item2.amount

      const price = totalAmount1+totalAmount2;
      return {price, amount: 1}
    }, {price: 0, amount: 0})

    return {items, totalAmount: totalAmount.price}
  }

  if(action.type === 'REMOVE_ITEM') {
    let price = 0
    const items = state.items.filter(item => {
      if(item.meal.id === action.id) {
        price = item.meal.price
        return false
      }
      return true
    })
    const totalAmount = state.totalAmount - price
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