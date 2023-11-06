import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Box from "@mui/material/Box";
import { fetchTopRatedMovies } from "../../modules/movie/actions.ts";
import {
  selectTopRatedMovies,
  selectTopRatedMoviesTotalPages,
  selectTopRatedMoviesTotalResults,
} from "../../modules/movie/selectors.ts";
import { Movies } from "../../ui/Movies";
import { Pagination } from "../../ui/Pagination";
import { TotalResult } from "../../ui/TotalResult/TotalResult.tsx";
export const TopRated = () => {
  const dispatch = useAppDispatch();
  const topRatedMovies = useAppSelector(selectTopRatedMovies);
  const totalPages = useAppSelector(selectTopRatedMoviesTotalPages);
  const totalResults = useAppSelector(selectTopRatedMoviesTotalResults);
  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchTopRatedMovies(page));
  }, [page]);
  return (
    <Box sx={{ mb: 10, flexGrow: 1 }}>
      <h2>Top Rated Movies</h2>
      {totalResults ? <TotalResult totalResults={totalResults} type="movie"/> : ""}
      <Movies movies={topRatedMovies} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onHandleChangePage={handleChangePage}
      />
    </Box>
  );
};
