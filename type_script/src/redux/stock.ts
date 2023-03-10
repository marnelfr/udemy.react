import { createSlice } from "@reduxjs/toolkit";
import Meal from "../modeles/meal";

type StateType = {
  meals: Meal[];
};

const initialState: StateType = {
  meals: [
    {
      id: 1234123,
      name: "Overnight oats",
      description:
        "Easy breakfast option that requires no prep time in the morning. Plus, they’re made with basic ingredients that won’t break the bank.",
      price: 13.34,
    },
    {
      id: 2354325,
      name: "Loaded avocado toast",
      description:
        "Avocado toast can be a nutritious breakfast, as avocados are a good source of healthy fats and very filling.",
      price: 15.45,
    },
    {
      id: 3453453,
      name: "Veggie quesadillas",
      description:
        "They are one of the easiest recipes to make, and they’re a good way to get kids to eat more veggies. Eating vegetables is linked to a lower risk of disease and longer life",
      price: 14.99,
    },
  ],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    create(state, action) {},
    update(state, action) {},
    delete(state, action) {},
  },
});

export const stockActions = stockSlice.actions;

const stockReducer = stockSlice.reducer;
export default stockReducer;
