import { createAction } from "@reduxjs/toolkit";
import { SEARCH_MOVIES } from "../../constants/actionType.ts";

export const searchMovies = createAction(
  SEARCH_MOVIES,
  (query: string, page = 1) => ({
    payload: {
        query,
        page,
    },
  }),
);
