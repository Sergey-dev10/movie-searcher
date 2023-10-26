export interface MovieState {
  upcomingMovies?: Movies | null;
  topRatedMovies?: Movies | null;
  movie?: MovieDetails | null;
}

export interface Movies {
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
