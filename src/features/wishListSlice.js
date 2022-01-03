import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",

  initialState: {
    wishList: [],
  },

  reducers: {
    wishListList: (state, action) => {
      state.wishList = action.payload;
    },
  },
});

export const { wishListList } = wishListSlice.actions;

export const selectWishList = (state) => state.wishList.wishList;

export default wishListSlice.reducer;
