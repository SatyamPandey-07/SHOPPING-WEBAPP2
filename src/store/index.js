import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in dev mode
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Allows future custom middleware
});

export default store;
