import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  isLoggedIn: boolean;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
};

const initialState: StateType = {
  isLoggedIn: false,
  name: "",
  email: "",
  token: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const payload = action.payload;
      state.isLoggedIn = true;
      state.name = payload.name;
      state.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
      state.token = "";
      state.refreshToken = "";
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
