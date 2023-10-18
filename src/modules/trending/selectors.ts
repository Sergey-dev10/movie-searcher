import { RootState } from "../index.ts";

export const selectTrendingMovies = ({ trending }: RootState) =>
  trending.trending?.results;
export const selectTrendingMoviesTotalPages = ({ trending }: RootState) =>
  trending.trending?.total_pages;
export const selectTrendingMoviesTotalResults = ({ trending }: RootState) =>
  trending.trending?.total_results;
