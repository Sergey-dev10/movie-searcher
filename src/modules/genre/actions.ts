import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_GENRES,
  FETCH_MOVIES_BY_GENRE,
} from "../../constants/actionType.ts";
export const fetchGenres = createAction(FETCH_GENRES);
export const fetchMoviesByGenre = createAction(
  FETCH_MOVIES_BY_GENRE,
  (page, genre) => ({
    payload: { page, genre },
  }),
);
