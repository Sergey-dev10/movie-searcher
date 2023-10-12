import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Movie } from "../../modules/movie/types.ts";
import { nanoid } from "@reduxjs/toolkit";
import { MovieCard } from "../../ui/MovieCard";
import { fetchUpcomingMovies } from "../../modules/movie/actions.ts";
import {
  selectUpcomingMovies,
  selectUpcomingMoviesTotalPages,
  selectUpcomingMoviesTotalResults,
} from "../../modules/movie/selectors.ts";
import { Pagination } from "../../ui/Pagination";
export const Upcoming = () => {
  const dispatch = useAppDispatch();
  const upcomingMovies = useAppSelector(selectUpcomingMovies);
  const totalPages = useAppSelector(selectUpcomingMoviesTotalPages);
  const totalResults = useAppSelector(selectUpcomingMoviesTotalResults);
  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchUpcomingMovies(page));
  }, [page]);
  return (
    <Box sx={{ mb: 10, flexGrow: 1 }}>
      <h2>Upcoming Movies</h2>
      {totalResults ? <span>{totalResults} Movies</span> : ""}
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
      <Pagination
        page={page}
        totalPages={totalPages}
        onHandleChangePage={handleChangePage}
      />
    </Box>
  );
};
