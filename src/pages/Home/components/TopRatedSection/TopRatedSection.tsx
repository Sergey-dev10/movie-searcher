import { useAppSelector } from "../../../../hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Movie } from "../../../../modules/movie/types.ts";
import { MovieCard } from "../../../../ui/MovieCard";
import { selectTopRatedMovies } from "../../../../modules/movie/selectors.ts";
import { nanoid } from "@reduxjs/toolkit";
export const TopRatedSection = () => {
  const topRatedMovies = useAppSelector(selectTopRatedMovies);

  return (
    <Box sx={{ mb: 10 }}>
      <h2>Top Rated Movies</h2>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        {topRatedMovies
          ? topRatedMovies.slice(0, 10).map((movie: Movie) => (
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
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Button variant="contained" href="top-rated">
          View All Top Rated Movies
        </Button>
      </Box>
    </Box>
  );
};
