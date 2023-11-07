import { useAppSelector } from "../../../../hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Movie } from "../../../../modules/movie/types.ts";
import { MovieCard } from "../../../../ui/MovieCard";
import { selectUpcomingMovies } from "../../../../modules/movie/selectors.ts";
import { nanoid } from "@reduxjs/toolkit";
import Button from "@mui/material/Button";
export const UpcomingSection = () => {
  const upcomingMovies = useAppSelector(selectUpcomingMovies);

  return (
    <Box sx={{ mb: 10, flexGrow: 1 }}>
      <h2>Upcoming Movies</h2>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        {upcomingMovies
          ? upcomingMovies.slice(0, 10).map((movie: Movie) => (
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
        <Button variant="contained" href="/movie-searcher/upcoming">
          View All Upcoming Movies
        </Button>
      </Box>
    </Box>
  );
};
