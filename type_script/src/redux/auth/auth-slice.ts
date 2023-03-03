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
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.expiration = action.payload.expiration;
    },
    logout(state) {
      state = { ...initialState };
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
