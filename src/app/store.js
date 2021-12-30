import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import carouselSlice from "../features/carouselSlice";
import categorySlice from "../features/categorySlice";
import productSlice from "../features/productSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    carousel: carouselSlice,
    category: categorySlice,
    product: productSlice,
    cart: cartSlice,
  },
});
