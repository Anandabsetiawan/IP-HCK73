import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./feature/addorder/orderSlice";

export const store = configureStore({
  reducer: {

    order: orderReducer,
  },
});