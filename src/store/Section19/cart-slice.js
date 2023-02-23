import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceState(state, action) {
      state.items = [...action.payload]
    },
    addItem(state, action) {
      state.changed = true
      const existedItem = state.items.find(item => item.id === action.payload.id)
      if(existedItem) {
        existedItem.quantity++
        existedItem.total += existedItem.price
      } else {
        const newItem = {...action.payload, total: action.payload.price, quantity: 1}
        state.items.push(newItem)
      }
    },
    removeItem(state, action) {
      state.changed = true
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if(index >= 0) {
        const existedItem = state.items[index]
        existedItem.quantity--
        existedItem.total -= existedItem.price
        if(!existedItem.quantity) {
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