import { createSlice } from "@reduxjs/toolkit";
import Meal from "../modeles/meal";

type StateItemType = {
  meal: Meal;
  amount: number;
};

type InitialStateType = {
  items: StateItemType[];
  totalItem: number;
  totalPrice: number;
};

const initialState: InitialStateType = {
  items: [],
  totalItem: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      newItem.amount = newItem.amount > 5 ? 5 : newItem.amount;
      const existingItem = state.items.find(
        (item) => item.meal.id === newItem.meal.id
      );

      if (existingItem) {
        existingItem.amount += newItem.amount;
        existingItem.amount = existingItem.amount > 5 ? 5 : existingItem.amount;
      } else {
        state.items.push(newItem);
      }

      state.totalItem += newItem.amount;
      state.totalPrice += newItem.meal.price * newItem.amount;
    },

    remove(state, action) {
      const exitingItem = state.items.find(
        (item) => item.meal.id === action.payload
      );
      if (exitingItem) {
        exitingItem.amount--;
        state.totalItem--;
        state.totalPrice -= exitingItem.meal.price;
      }
    },

    reset(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalItem = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export const MAX_ITEM_PER_MEAL = 5;

const cartReducer = cartSlice.reducer;
export default cartReducer;
