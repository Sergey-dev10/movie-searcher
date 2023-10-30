import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ShowState, Shows, ShowDetails } from "./types";
const initialState: ShowState = {
  shows: null,
  show: null,
};

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    fetchShowsSuccess: (state, action: PayloadAction<Shows>) => {
      state.shows = action.payload;
    },
    fetchShowSuccess: (state, action: PayloadAction<ShowDetails>) => {
      state.show = action.payload;
    },
  },
});

export const { fetchShowsSuccess, fetchShowSuccess } = showSlice.actions;
export default showSlice.reducer;
