import { configureStore } from "@reduxjs/toolkit";
//This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
