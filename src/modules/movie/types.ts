export interface MovieState {
  upcomingMovies?: UpcomingMovies | null;
  topRatedMovies?: TopRatedMovies | null;
}

export interface UpcomingMovies {
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface TopRatedMovies {
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}
