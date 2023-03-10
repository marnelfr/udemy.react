import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import cartReducer from "./cart";
import stockReducer from "./stock";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    stock: stockReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
