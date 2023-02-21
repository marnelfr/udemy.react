import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const email = action.payload.email.trim()
      const password = action.payload.password.trim()
      //check email and password

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

export default authSlice.reducer