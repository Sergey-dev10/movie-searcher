import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Box from "@mui/material/Box";
import { fetchTrendingMovies } from "../../modules/trending/actions.ts";
import {
  selectTrendingMovies,
  selectTrendingMoviesTotalPages,
  selectTrendingMoviesTotalResults,
} from "../../modules/trending/selectors.ts";
import { Movies } from "../../ui/Movies";
import { Pagination } from "../../ui/Pagination";
import { TotalResult } from "../../ui/TotalResult/TotalResult.tsx";
export const Trending = () => {
  const dispatch = useAppDispatch();
  const trendingMovies = useAppSelector(selectTrendingMovies);
  const totalPages = useAppSelector(selectTrendingMoviesTotalPages);
  const totalResults = useAppSelector(selectTrendingMoviesTotalResults);
  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchTrendingMovies(page));
  }, [page]);

  return (
    <Box sx={{ mb: 10, flexGrow: 1 }}>
      <h2>Trending Movies</h2>
      {totalResults ? <TotalResult totalResults={totalResults} type="movie"/> : ""}
      <Movies movies={trendingMovies} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onHandleChangePage={handleChangePage}
      />
    </Box>
  );
};
