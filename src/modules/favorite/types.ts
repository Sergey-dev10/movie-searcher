
export interface FavoriteState {
  favorites: FavoriteItem[] | [];
}

export interface FavoriteItem {
  id: number;
  name?: string;
  title?: string;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
}
