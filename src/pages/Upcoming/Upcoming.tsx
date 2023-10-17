import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Box from "@mui/material/Box";
import { fetchUpcomingMovies } from "../../modules/movie/actions.ts";
import {
  selectUpcomingMovies,
  selectUpcomingMoviesTotalPages,
  selectUpcomingMoviesTotalResults,
} from "../../modules/movie/selectors.ts";
import { Movies } from "../../ui/Movies";
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
      <Movies movies={upcomingMovies} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onHandleChangePage={handleChangePage}
      />
    </Box>
  );
};
