import { createAction } from "@reduxjs/toolkit";
import { FETCH_TRENDING_MOVIES } from "../../constants/actionType.ts";

export const fetchTrendingMovies = createAction(
  FETCH_TRENDING_MOVIES,
  (page = 1) => ({
    payload: page,
  }),
);
