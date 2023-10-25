import {RootState} from "../index.ts";

export const selectShows = ({show}: RootState) => show.shows?.results;
export const selectShowsTotalPages = ({show}: RootState) => show.shows?.total_pages;
export const selectShowsTotalResults = ({show}: RootState) => show.shows?.total_results;