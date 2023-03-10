import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state) {
      state.display = true;
    },
    hideModal(state) {
      state.display = false;
    },
  },
});

export const modalActions = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
