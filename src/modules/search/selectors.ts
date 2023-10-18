import { RootState } from "../index.ts";

export const selectSearchQuery = ({ search }: RootState) => search.query;
export const selectSearchedMovies = ({ search }: RootState) =>
  search.movies?.results;
export const selectSearchedMoviesTotalPages = ({ search }: RootState) =>
  search.movies?.total_pages;
export const selectSearchedMoviesTotalResults = ({ search }: RootState) =>
  search.movies?.total_results;
export const selectSearchedShows = ({ search }: RootState) =>
  search.shows?.results;
export const selectSearchedShowsTotalPages = ({ search }: RootState) =>
  search.shows?.total_pages;
export const selectSearchedShowsTotalResults = ({ search }: RootState) =>
  search.shows?.total_results;
export const selectSearchedPeople = ({ search }: RootState) =>
  search.people?.results;
export const selectSearchedPeopleTotalPages = ({ search }: RootState) =>
  search.people?.total_pages;
export const selectSearchedPeopleTotalResults = ({ search }: RootState) =>
  search.people?.total_results;
