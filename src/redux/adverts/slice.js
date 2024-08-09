import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

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
  redusers: {
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
    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      if (action.payload.length === 0) {
        state.hasMore = false;
      } else {
        state.items = [...state.items, ...action.payload];
      }
      state.isLoading = false;
      state.isError = null;
    }),
});


export const { incrementPage, resetState } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
