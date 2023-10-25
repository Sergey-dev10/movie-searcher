import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TvShowState } from "./types";
import { Movies } from "../movie/types.ts";

const initialState: TvShowState = {
  shows: null,
};

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    fetchShowsSuccess: (state, action: PayloadAction<Movies>) => {
      state.shows = action.payload;
    },
  },
});

export const { fetchShowsSuccess } = showSlice.actions;
export default showSlice.reducer;
