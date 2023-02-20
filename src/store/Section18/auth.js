import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const email = action.payload.email
      const password = action.payload.password
      console.log(email, password);
      //check email & password
      state.isLoggedIn = true
      state.user.email = email
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = {}
    }
  }
})

export const authActions = authSlice.actions

export default authSlice