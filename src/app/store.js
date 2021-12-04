import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import carouselSlice from "../features/carouselSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    carousel: carouselSlice,
  },
});
