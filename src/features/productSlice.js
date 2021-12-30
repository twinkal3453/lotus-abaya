import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",

  initialState: {
    product: [],
  },
  reducers: {
    productList: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { productList } = productSlice.actions;

export const selectProduct = (state) => state.product.product;

export default productSlice.reducer;
