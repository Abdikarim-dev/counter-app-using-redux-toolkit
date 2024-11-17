import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

// root area

const store = configureStore({
  reducer: {
    // add your reducers here
    counter: counterReducer,
  },
});

export default store;


//  XOGTAAS (CENTRALIZED) 