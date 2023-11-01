import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { GenreState, Genres } from "./types";
import { Movies } from "../movie/types";

const initialState: GenreState = {
  genres: null,
  movies: null,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    fetchGenresSuccess: (state, action: PayloadAction<Genres>) => {
      state.genres = action.payload;
    },
    fetchMoviesByGenreSuccess: (state, action: PayloadAction<Movies>) => {
        state.movies = action.payload;
    },
  },
});

export const { fetchGenresSuccess, fetchMoviesByGenreSuccess } = genreSlice.actions;
export default genreSlice.reducer;
