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
    add(state, action) {},
    remove(state, action) {},
    reset(state) {},
  },
});

export const cartActions = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
