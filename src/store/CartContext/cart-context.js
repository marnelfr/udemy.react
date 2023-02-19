import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  resetAll: () => {}
})

export default CartContext