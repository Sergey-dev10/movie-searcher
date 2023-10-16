import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "./types";

const initialState: SearchState = {
  query: "",
  movies: null,
  shows: null,
  people: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMoviesSuccess(state, action: PayloadAction<SearchState>) {
      state.query = action.payload.query;
      state.movies = action.payload.movies;
      state.shows = action.payload.shows;
      state.people = action.payload.people;
    },
  },
});

export const { searchMoviesSuccess } = searchSlice.actions;
export default searchSlice.reducer;
