import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
  name: "carousel",

  initialState: {
    carousel: [],
  },
  reducers: {
    carouselList: (state, action) => {
      state.carousel = action.payload;
    },
  },
});

export const { carouselList } = carouselSlice.actions;

export const selectCarousel = (state) => state.carousel.carousel;

export default carouselSlice.reducer;
