import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { MovieState, Movies, MovieDetails } from "./types";

const initialState: MovieState = {
  upcomingMovies: null,
  topRatedMovies: null,
  movie: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchUpcomingMoviesSuccess(state, action: PayloadAction<Movies>) {
      state.upcomingMovies = action.payload;
    },
    fetchTopRatedMoviesSuccess(state, action: PayloadAction<Movies>) {
      state.topRatedMovies = action.payload;
    },
    fetchMovieSuccess(state, action: PayloadAction<MovieDetails>) {
      state.movie = action.payload;
    },
  },
});

export const {
  fetchUpcomingMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchMovieSuccess,
} = movieSlice.actions;
export default movieSlice.reducer;
