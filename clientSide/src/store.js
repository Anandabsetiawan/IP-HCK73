import { configureStore, createReducer } from "@reduxjs/toolkit";
import orderReducer from "./feature/addorder/orderSlice";
import menuReducer from "./feature/menu/menuSlice"
import cartReducer from "./feature/cart/cartSlice";

export const store = configureStore({
  reducer: {

    order: orderReducer,
    menu: menuReducer,
    cart: cartReducer
  },
});