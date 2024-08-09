import { configureStore } from "@reduxjs/toolkit";

import { advertReducer } from "./adverts/slice";

export const store = configureStore({
  reducer: {
    adverts: advertReducer,
    // filters: filtersReducer,
  },
});
