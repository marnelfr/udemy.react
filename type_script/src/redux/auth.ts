import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  isLoggedIn: boolean;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
  loginError: boolean;
};

const initialState: StateType = {
  isLoggedIn: false,
  name: "",
  email: "",
  token: "",
  refreshToken: "",
  loginError: false,
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
      state.loginError = false;
    },
    loginFailed(state) {
      state.loginError = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
      state.token = "";
      state.refreshToken = "";
      state.loginError = false;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
