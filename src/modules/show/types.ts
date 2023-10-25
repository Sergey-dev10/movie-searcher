import {Movie} from "../movie/types";
export interface TvShowState {
  shows: Shows | null;
}

export interface Show extends Movie {
    first_air_date: string;
}

export interface Shows {
    results: Show[];
    total_pages: number;
    total_results: number;
}