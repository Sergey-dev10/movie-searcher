import React, { useState } from "react";
import {useAppDispatch} from "../../../../hooks";
import {useNavigate} from "react-router";
import {searchMovies} from "../../../../modules/search/actions.ts";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  SearchBarWrapper,
  SearchInput,
  SearchIconWrapper,
} from "./SearchBar.styles.ts";
import { SearchButton } from "./SearchBar.styles.ts";

export const SearchBar = () => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [query, setQuery] = useState("")
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClear = (): void => {
    setQuery("");
    setShowClearIcon("none");
  };

    const handleSearch = (): void => {
        dispatch(searchMovies(query));
        setQuery("");
        setShowClearIcon("none");
        navigate(`/movie-searcher/search/${query}`);
    }

  return (
    <SearchBarWrapper sx={{ width: { xs: "60%", md: "25%" } }}>
      <SearchInput
        size="small"
        fullWidth
        variant="outlined"
        value={query}
        onChange={handleChange}
        InputProps={{
          placeholder: "Search",
          endAdornment: (
            <SearchIconWrapper
              position="end"
              style={{ display: showClearIcon }}
              onClick={handleClear}
            >
              <ClearIcon />
            </SearchIconWrapper>
          ),
        }}
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon />
      </SearchButton>
    </SearchBarWrapper>
  );
};
