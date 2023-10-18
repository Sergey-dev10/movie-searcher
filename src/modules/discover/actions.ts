import { createAction } from "@reduxjs/toolkit";
import { FETCH_DISCOVER_MOVIES } from "../../constants/actionType.ts";

export const fetchDiscoveredMovies = createAction(
  FETCH_DISCOVER_MOVIES,
  (page: number, year?: number, genre?: number, sortBy?: string) => ({
    payload: {
      page,
      year,
      genre,
      sortBy,
    },
  }),
);
