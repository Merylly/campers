import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66b382857fba54a5b7ed3cec.mockapi.io/",
});

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/advert");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const loadMoreAdverts = createAsyncThunk(
//   "adverts/loadMore",
//   async ({ page = 2, limit = 4 }, thunkAPI) => {
//     try {
//       const { data } = await instance.get("/advert", {
//         params: { page, limit },
//       });
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
