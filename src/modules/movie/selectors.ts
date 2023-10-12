import {RootState} from "../index.ts";

export const selectUpcomingMovies = ({movie}: RootState) => movie.upcomingMovies?.results;
export const selectUpcomingMoviesTotalPages = ({movie}: RootState) => movie.upcomingMovies?.total_pages;
export const selectUpcomingMoviesTotalResults = ({movie}: RootState) => movie.upcomingMovies?.total_results;
export const selectTopRatedMovies = ({movie}: RootState) => movie.topRatedMovies?.results;
export const selectTopRatedMoviesTotalPages = ({movie}: RootState) => movie.topRatedMovies?.total_pages;
export const selectTopRatedMoviesTotalResults = ({movie}: RootState) => movie.topRatedMovies?.total_results;