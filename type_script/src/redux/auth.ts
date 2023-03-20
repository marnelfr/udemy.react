import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  email: "";
  name: "";
  token: "";
  refreshToken: "";
};

const initialState: initialStateType = {
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
      const payload = action.payload;
      state.email = payload.email;
      state.name = payload.name;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    logout(state, action) {
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
