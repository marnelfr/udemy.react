import { createSlice } from "@reduxjs/toolkit";
import Meal from "../modeles/meal";

type StateItemType = {
  meal: Meal;
  amount: number;
};

type InitialStateType = {
  items: StateItemType[];
  total: number;
};

const initialState: InitialStateType = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.items.find(
        (item) => item.meal.id === action.payload.meal.id
      );

      if (existingItem) {
        existingItem.amount += action.payload.amount;
      } else {
        state.items.push(action.payload);
      }

      state.total += action.payload.amount;
    },
    remove(state, action) {},
    reset(state) {},
  },
});

export const cartActions = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
