import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_DISCOVER_SHOWS,
  FETCH_SHOW,
} from "../../constants/actionType.ts";
export const fetchShows = createAction(
  FETCH_DISCOVER_SHOWS,
  (page: number, year?: number, genre?: number, sortBy?: string) => ({
    payload: {
      page,
      year,
      genre,
      sortBy,
    },
  }),
);

export const fetchShow = createAction(FETCH_SHOW, (id: number) => ({
  payload: id,
}));
