import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./feature/addorder/orderSlice";
import menuReducer from "./feature/menu/menuSlice"

export const store = configureStore({
  reducer: {

    order: orderReducer,
    menu: menuReducer
  },
});