import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
  expiration: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      const expiration = new Date();

      state.token = action.payload;
      state.isLoggedIn = true;

      expiration.setHours(expiration.getHours() + 1);
      state.expiration = expiration.toISOString();
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
