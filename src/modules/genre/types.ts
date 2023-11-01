import { Genre } from "../movie/types.ts";
import { Movies } from "../movie/types.ts";
export interface Genres {
  genres: Genre[];
}
export interface GenreState {
  genres: Genres | null;
  movies: Movies | null;
}
