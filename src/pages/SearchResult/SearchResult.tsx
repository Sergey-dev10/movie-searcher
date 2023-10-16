import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { TabWrapper, TabListWrapper } from "./SearchResult.styles.ts";
import {
  selectSearchQuery,
  selectSearchedMovies,
  selectSearchedMoviesTotalPages,
  selectSearchedMoviesTotalResults,
  selectSearchedShows,
  selectSearchedShowsTotalPages,
  selectSearchedShowsTotalResults,
  selectSearchedPeople,
  selectSearchedPeopleTotalPages,
  selectSearchedPeopleTotalResults,
} from "../../modules/search/selectors.ts";
import { Pagination } from "../../ui/Pagination";
import { Movies } from "../../ui/Movies";
import {People} from "../../ui/People";
import { searchMovies } from "../../modules/search/actions.ts";
export const SearchResult = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("1");
  const [page, setPage] = useState(1);

  const query = useAppSelector(selectSearchQuery);
  const movies = useAppSelector(selectSearchedMovies);
  const moviesTotalPages = useAppSelector(selectSearchedMoviesTotalPages);
  const moviesTotalResults = useAppSelector(selectSearchedMoviesTotalResults);
  const shows = useAppSelector(selectSearchedShows);
  const showsTotalPages = useAppSelector(selectSearchedShowsTotalPages);
  const showsTotalResults = useAppSelector(selectSearchedShowsTotalResults);
  const people = useAppSelector(selectSearchedPeople);
  const peopleTotalPages = useAppSelector(selectSearchedPeopleTotalPages);
  const peopleTotalResults = useAppSelector(selectSearchedPeopleTotalResults);
  const totalResults = moviesTotalResults + showsTotalResults + peopleTotalResults;

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(searchMovies(query, page));
  }, [page]);

  return (
    <div>
      <h1>Search Result</h1>
      {totalResults ? <span>{totalResults} Movies</span> : ""}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabListWrapper
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <TabWrapper label="Movies" value="1" />
              <TabWrapper label="TV Shows" value="2" />
              <TabWrapper label="People" value="3" />
            </TabListWrapper>
          </Box>
          <TabPanel value="1">
            <Movies movies={movies} />
            <Pagination
              page={page}
              totalPages={moviesTotalPages}
              onHandleChangePage={handleChangePage}
            />
          </TabPanel>
          <TabPanel value="2">
            <Movies movies={shows} />
            <Pagination
              page={page}
              totalPages={showsTotalPages}
              onHandleChangePage={handleChangePage}
            />
          </TabPanel>

          <TabPanel value="3">
            <People people={people} />
            <Pagination page={page} totalPages={peopleTotalPages} onHandleChangePage={handleChangePage}/>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
