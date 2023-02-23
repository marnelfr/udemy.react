import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "./events";

const store = configureStore({
  reducer: {
    event: eventReducer
  }
})

export default store