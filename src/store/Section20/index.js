import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "./events-slice";

const store = configureStore({
  reducer: {
    event: eventReducer
  }
})

export default store