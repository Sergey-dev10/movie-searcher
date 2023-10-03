import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_UPCOMING_MOVIES,
  FETCH_TOP_RATED_MOVIES,
} from "../../constants/actionType";

export const fetchUpcomingMovies = createAction(
  FETCH_UPCOMING_MOVIES,
  (page = 1) => ({ payload: page }),
);
export const fetchTopRatedMovies = createAction(
  FETCH_TOP_RATED_MOVIES,
  (page = 1) => ({ payload: page }),
);
