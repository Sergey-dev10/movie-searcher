import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  TabWrapper,
  TabListWrapper,
  NoResult,
  NoResultIcon,
} from "./SearchResult.styles.ts";
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
import { People } from "../../ui/People";
import { searchMovies } from "../../modules/search/actions.ts";
import { TotalResult } from "../../ui/TotalResult/TotalResult.tsx";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas.ts";
import { FaFilm, FaTheaterMasks, FaUserFriends } from "react-icons/fa";

export const SearchResult = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("1");
  const [page, setPage] = useState(1);

  const query = useAppSelector(selectSearchQuery);
  const movies = useAppSelector(selectSearchedMovies);
  const moviesTotalPages = useAppSelector(selectSearchedMoviesTotalPages);
  const moviesTotalResults =
    useAppSelector(selectSearchedMoviesTotalResults) ?? 0;
  const shows = useAppSelector(selectSearchedShows);
  const showsTotalPages = useAppSelector(selectSearchedShowsTotalPages);
  const showsTotalResults =
    useAppSelector(selectSearchedShowsTotalResults) ?? 0;
  const people = useAppSelector(selectSearchedPeople);
  const peopleTotalPages = useAppSelector(selectSearchedPeopleTotalPages);
  const peopleTotalResults =
    useAppSelector(selectSearchedPeopleTotalResults) ?? 0;
  const totalResults =
    moviesTotalResults + showsTotalResults + peopleTotalResults;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
      <TotalResult totalResults={totalResults} type="search" />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabListWrapper
              onChange={handleChange}
              orientation={isMobile ? "vertical" : "horizontal"}
            >
              <TabWrapper
                label={`Movies ${formatNumberWithCommas(moviesTotalResults)}`}
                value="1"
              />
              <TabWrapper
                label={`TV Shows ${formatNumberWithCommas(showsTotalResults)}`}
                value="2"
              />
              <TabWrapper
                label={`People ${formatNumberWithCommas(peopleTotalResults)}`}
                value="3"
              />
            </TabListWrapper>
          </Box>
          <TabPanel value="1">
            {moviesTotalResults ? (
              <>
                <Movies movies={movies} />
                <Pagination
                  page={page}
                  totalPages={moviesTotalPages}
                  onHandleChangePage={handleChangePage}
                />
              </>
            ) : (
              <NoResult>
                <h5>No movies found.</h5>
                <FaFilm size={70} />
              </NoResult>
            )}
          </TabPanel>
          <TabPanel value="2">
            {showsTotalResults ? (
              <>
                <Movies movies={shows} />
                <Pagination
                  page={page}
                  totalPages={showsTotalPages}
                  onHandleChangePage={handleChangePage}
                />
              </>
            ) : (
              <NoResult>
                <h5>No shows found.</h5>
                <FaTheaterMasks size={70} />
              </NoResult>
            )}
          </TabPanel>
          <TabPanel value="3">
            {peopleTotalResults ? (
              <>
                <People people={people} />
                <Pagination
                  page={page}
                  totalPages={peopleTotalPages}
                  onHandleChangePage={handleChangePage}
                />
              </>
            ) : (
              <NoResult>
                <h5>No people found.</h5>
                <FaUserFriends size={70} />
              </NoResult>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
