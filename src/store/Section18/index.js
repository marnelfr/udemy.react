import { createStore } from 'redux'
import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.step
    },
    decrement(state) {
      state.counter--
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    }
  }
})

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
})


export default store