import { createSlice } from "@reduxjs/toolkit";

export interface AuthStateType {
  isLoggedIn: boolean;
  token: string;
  expiration: string;
}

const initialState: AuthStateType = {
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
    logout(state) {
      state = initialState;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
