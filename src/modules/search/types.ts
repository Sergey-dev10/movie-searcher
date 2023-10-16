import { Movie } from "../movie/types";
export interface SearchState {
  query: string;
  movies?: SearchedMovies | null;
  shows?: SearchedMovies | null;
  people?: SearchedPeople | null;
}

export interface SearchedMovies {
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface SearchedPeople {
  results: Person[];
  total_pages: number;
  total_results: number;
}
export interface Person {
  id: number;
  name: string;
  profile_path: string;
}
