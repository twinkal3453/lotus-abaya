import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import carouselSlice from "../features/carouselSlice";
import categorySlice from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    carousel: carouselSlice,
    category: categorySlice,
  },
});
