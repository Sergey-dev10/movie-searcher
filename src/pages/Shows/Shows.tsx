import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  selectShows,
  selectShowsTotalPages,
  selectShowsTotalResults,
} from "../../modules/show/selectors.ts";
import { fetchShows } from "../../modules/show/actions.ts";
import { Movies } from "../../ui/Movies";
import { Pagination } from "../../ui/Pagination";
import { Year, Genre, Sort } from "../Discover/Discover.styles.ts";
import {
  yearList,
  genresShows,
  sortMethods,
} from "../../constants/filterConstants.ts";

export const Shows = () => {
  const dispatch = useAppDispatch();
  const shows = useAppSelector(selectShows);
  const totalPages = useAppSelector(selectShowsTotalPages);
  const totalResults = useAppSelector(selectShowsTotalResults);
  const [page, setPage] = useState(1);
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState(0);
  const [sortBy, setSortBy] = useState("");

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  const handleChangeYear = (
    event: React.SyntheticEvent<HTMLInputElement>,
    value: { label: string; value: number },
  ) => {
    if (value === null) {
      setYear(0);
      return;
    }
    setYear(value.value);
  };

  const handleChangeGenre = (
    event: React.SyntheticEvent<HTMLInputElement>,
    value: { label: string; value: number },
  ) => {
    if (value === null) {
      setGenre(0);
      return;
    }
    setGenre(value.value);
  };

  const handleChangeSortBy = (
    event: React.SyntheticEvent<HTMLInputElement>,
    value: { label: string; value: string },
  ) => {
    if (value === null) {
      setSortBy("");
      return;
    }
    setSortBy(value.value);
  };

  useEffect(() => {
    dispatch(fetchShows(page, year, genre, sortBy));
  }, [page, year, genre, sortBy]);

  useEffect(() => {
    setPage(1);
  }, [year, genre, sortBy]);

  return (
    <Box sx={{ mb: 10, flexGrow: 1 }}>
      <h2>TV Shows</h2>
      <span>
        {totalResults && !Array.isArray(totalResults) ? totalResults : 0} Movies
      </span>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: 5,
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Year
          disablePortal
          id="combo-box-demo"
          options={yearList}
          isOptionEqualToValue={(
            option: { label: string; value: number },
            value: { label: string; value: number },
          ) => option.value === value.value}
          renderInput={(params) => <TextField {...params} placeholder="Year" />}
          onChange={handleChangeYear}
        />
        <Genre
          disablePortal
          id="combo-box-demo"
          options={genresShows}
          isOptionEqualToValue={(
            option: { label: string; value: number },
            value: { label: string; value: number },
          ) => option.value === value.value}
          renderInput={(params) => (
            <TextField {...params} placeholder="Genre" />
          )}
          onChange={handleChangeGenre}
        />
        <Sort
          disablePortal
          id="combo-box-demo"
          options={sortMethods}
          isOptionEqualToValue={(
            option: { label: string; value: string },
            value: { label: string; value: string },
          ) => option.value === value.value}
          renderInput={(params) => (
            <TextField {...params} placeholder="Sort By" />
          )}
          onChange={handleChangeSortBy}
        />
      </Box>

      <Movies movies={shows} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onHandleChangePage={handleChangePage}
      />
    </Box>
  );
};
