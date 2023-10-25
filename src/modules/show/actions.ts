import { createAction } from "@reduxjs/toolkit";
import {FETCH_DISCOVER_SHOWS} from "../../constants/actionType.ts";
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
