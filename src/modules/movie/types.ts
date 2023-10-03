export interface MovieState {
  upcomingMovies?: Movie[] | null;
  topRatedMovies?: Movie[] | null;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
