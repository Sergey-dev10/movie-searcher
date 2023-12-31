import Grid from "@mui/material/Grid";
import { Movie } from "../../modules/movie/types.ts";
import { FavoriteItem } from "../../modules/favorite/types.ts";
import { nanoid } from "@reduxjs/toolkit";
import { MovieCard } from "../MovieCard";

interface MoviesProps {
  movies: Movie[] | FavoriteItem[] | undefined;
}
export const Movies = ({ movies }: MoviesProps) => {
  return (
    <Grid container spacing={2} sx={{ mt: 5 }}>
      {movies
        ? movies.map((movie: Movie | FavoriteItem) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={12 / 5}
              sx={{ display: "flex", justifyContent: "center" }}
              key={nanoid()}
            >
              <MovieCard {...movie} />
            </Grid>
          ))
        : ""}
    </Grid>
  );
};
