import { RootState } from "../index.ts";

export const selectGenres = ({ genre }: RootState) => genre.genres?.genres;
export const selectMoviesByGenre = ({ genre }: RootState) => genre.movies?.results;
export const selectTotalPages = ({ genre }: RootState) => genre.movies?.total_pages;
export const selectTotalResults = ({ genre }: RootState) => genre.movies?.total_results;