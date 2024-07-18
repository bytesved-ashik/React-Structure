import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "../Slices/LoginSlices";
import { thunk } from "redux-thunk";

// Configure the store
const store = configureStore({
  reducer: {
    loginSlice: LoginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
