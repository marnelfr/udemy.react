import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../modeles/auth";

type initialStateType = {
  isLoggedIn: boolean;
  email: string;
  name: string;
  token: string;
  refreshToken: string;
};

const initialState: initialStateType = {
  isLoggedIn: false,
  email: "",
  name: "",
  token: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const payload: Auth = action.payload;
      state.isLoggedIn = true;
      state.email = payload.data.email;
      state.name = payload.data.name;
      state.token = payload.token;
      state.refreshToken = payload.refresh_token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.email = "";
      state.name = "";
      state.token = "";
      state.refreshToken = "";
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
