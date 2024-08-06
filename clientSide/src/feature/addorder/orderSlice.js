import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({

  name: "order",
  
  initialState: {
    value: 0,
  },
  
  reducers: {
    increment: (state) => {

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      if (state.value < 0) {
        return state.value = 0
      }
    },
   
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = orderSlice.actions;

export default orderSlice.reducer;