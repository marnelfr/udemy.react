import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducers/products";

const store = configureStore({
  reducer: {shop: productReducer}
})

export default store