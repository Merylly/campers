import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, loadMoreAdverts } from "./operations";

const INITIAL_STATE = {
  items: [],
  currentPage: 1,
  hasMore: true,
  isLoading: false,
  isError: null,
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
      })
      .addCase(loadMoreAdverts.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(loadMoreAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(loadMoreAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      }),
});

export const { incrementPage, resetState } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
