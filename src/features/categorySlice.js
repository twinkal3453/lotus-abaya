import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",

  initialState: {
    category: [],
  },
  reducers: {
    categoryList: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { categoryList } = categorySlice.actions;

export const selectCategory = (state) => state.category.category;

export default categorySlice.reducer;
