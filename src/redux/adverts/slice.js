import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const INITIAL_STATE = {
  items: [],
  currentPage: 1,
  hasMore: true,
  isLoading: false,
  isError: null,
  favorites: [],
};

const advertSlice = createSlice({
  name: "advertsSlice",
  initialState: INITIAL_STATE,
  reducers: {
    incrementPage(state) {
      state.currentPage += 1;
    },
    resetState(state) {
      state.items = [];
      state.currentPage = 1;
      state.isLoading = false;
      state.isError = null;
      state.hasMore = true;
    },
    toggleFavorite: (state, action) => {
      const existingIndex = state.favorites.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      }),
  // .addCase(loadMoreAdverts.pending, (state) => {
  //   state.isLoading = true;
  //   state.isError = null;
  // })
  // .addCase(loadMoreAdverts.fulfilled, (state, action) => {
  //   state.items = [...state.items, action.payload];
  //   state.isLoading = false;
  //   state.isError = null;
  // })
  // .addCase(loadMoreAdverts.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.isError = action.error.message;
  // }),
});

export const { incrementPage, resetState, toggleFavorite } =
  advertSlice.actions;
export const advertReducer = advertSlice.reducer;
