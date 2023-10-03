import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { MovieState, Movie } from "./types";

const initialState: MovieState = {
  upcomingMovies: null,
  topRatedMovies: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchUpcomingMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.upcomingMovies = action.payload;
    },
    fetchTopRatedMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { fetchUpcomingMoviesSuccess, fetchTopRatedMoviesSuccess } =
  movieSlice.actions;
export default movieSlice.reducer;
