import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1; // Increment the counter by 1
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + Number(action.payload);
      console.log(action.type);
    },
    decrementByAmount: () => {},
  },
});

// SLICE
//       ->NAME ->  counter
//       -> INITIALSTATE -> VALUE :0
//       -> REDUCERS -> INCREMENT,DECREMENT,RESET

export default counterSlice.reducer;

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

// IN CONCLUSION FEATURE KAMID FEATURES OO APPLICATION-KAAGA YEELANAAYO

// SLICE - COUNTER
// SLICE - CART
// SLICE - PRODUCTS
// SLICE - ORDERS
// SLICE - USER
// SLICE - AUTH
