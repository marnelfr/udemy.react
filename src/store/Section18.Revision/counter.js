import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    increase(state, action) {
      state.value += action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
    reset(state) {
      state.value = 0
    }
  }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer