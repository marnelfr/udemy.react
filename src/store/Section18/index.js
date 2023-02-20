import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true
}

createSlice({
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

const counterReducer = (state = initialState, action) => {
  if(action.type === 'increment') {
    return {
      ...state,
      counter: state.counter + action.step
    }
  }
  if(action.type === 'decrement') {
    return {
      ...state,
      counter: state.counter - 1
    }
  }
  if(action.type === 'toggle-counter') {
    return {
      ...state,
      showCounter: !state.showCounter
    }
  }

  return state
}

const store = createStore(counterReducer)

export default store