import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { MovieState, UpcomingMovies, TopRatedMovies } from "./types";

const initialState: MovieState = {
  upcomingMovies: null,
  topRatedMovies: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchUpcomingMoviesSuccess(state, action: PayloadAction<UpcomingMovies>) {
      state.upcomingMovies = action.payload;
    },
    fetchTopRatedMoviesSuccess(state, action: PayloadAction<TopRatedMovies>) {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { fetchUpcomingMoviesSuccess, fetchTopRatedMoviesSuccess } =
  movieSlice.actions;
export default movieSlice.reducer;
