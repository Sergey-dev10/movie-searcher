export interface MovieState {
  upcomingMovies?: Movies | null;
  topRatedMovies?: Movies | null;
}

export interface Movies {
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
