import React, { useEffect, useState } from "react";
import {useMatch} from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Box from "@mui/material/Box";
import { fetchMoviesByGenre } from "../../modules/genre/actions.ts";
import {
  selectMoviesByGenre,
  selectTotalPages,
  selectTotalResults,
} from "../../modules/genre/selectors.ts";
import {getNameOfGenreFromURL} from "../../utils/getNameOfGenreFromURL.ts";
import { Movies } from "../../ui/Movies";
import { Pagination } from "../../ui/Pagination";
import {TotalResult} from "../../ui/TotalResult/TotalResult.tsx";

export const Genre = () => {
  const dispatch = useAppDispatch();
  const moviesByGenre = useAppSelector(selectMoviesByGenre);
  const totalPages = useAppSelector(selectTotalPages);
  const totalResults = useAppSelector(selectTotalResults);
  const match = useMatch("/movie-searcher/genres/:genre/:id");
  const [page, setPage] = useState(1);


  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchMoviesByGenre(page, Number(match?.params.id)));
  }, [page]);
  return (
    <Box sx={{ mb: 10, flexGrow: 1 }}>
      <h2>{match?.params.genre ? getNameOfGenreFromURL(match?.params.genre) : ""}</h2>
      {totalResults ? <TotalResult totalResults={totalResults} type="movie"/> : ""}
      <Movies movies={moviesByGenre} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onHandleChangePage={handleChangePage}
      />
    </Box>
  );
};
