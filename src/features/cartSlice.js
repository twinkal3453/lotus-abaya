import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
  },
  reducers: {
    cartList: (state, action) => {
      state.cart = action.payload;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (obj) => obj._id === action.payload._id
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex] -= 1;
      }
    },
  },
});

export const { cartList, removeFromCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
