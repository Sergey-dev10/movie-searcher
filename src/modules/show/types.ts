import { Movie, Genre } from "../movie/types";
export interface ShowState {
  shows: Shows | null;
  show: ShowDetails | null;
}

export interface Show extends Movie {
  first_air_date: string;
}

export interface ShowDetails extends Show {
  genres: Genre[],
}
export interface Shows {
  results: Show[];
  total_pages: number;
  total_results: number;
}
