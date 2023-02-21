import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existedItemIndex = state.items.findIndex(item => item.id === action.payload.id)
      if(existedItemIndex >= 0) {
        const existedItem = state.items[existedItemIndex]
        existedItem.quantity++
        existedItem.total += existedItem.price
        state.items[existedItemIndex] = existedItem
      } else {
        const newItem = {...action.payload, total: action.payload.price, quantity: 1}
        state.items.push(newItem)
      }
    },
    removeItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload)
      state.items.slice(index, 1)
    }
  }
})

export const cartActions = cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer