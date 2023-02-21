import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if(index >= 0) {
        const existedItem = state.items[index]
        existedItem.quantity++
        existedItem.total += existedItem.price
        state.items[index] = existedItem
      } else {
        const newItem = {...action.payload, total: action.payload.price, quantity: 1}
        state.items.push(newItem)
      }
    },
    removeItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if(index >= 0) {
        state.items[index].quantity--
        if(!state.items[index].quantity) {
          state.items.splice(index, 1)
        }
      } else {
        throw new Error('Tried to remove non existing item')
      }
    }
  }
})

export const cartActions = cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer