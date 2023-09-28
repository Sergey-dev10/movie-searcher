import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { SearchBarWrapper, SearchInput, SearchIconWrapper } from "./SearchBar.styles.ts";
export const SearchBar = () => {
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClear = (): void => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  return (
    <SearchBarWrapper sx={{ width: { xs: "60%", md: "25%" } }}>
      <SearchInput
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          placeholder: "Search",
          startAdornment: (
            <SearchIconWrapper position="start">
              <SearchIcon />
            </SearchIconWrapper>
          ),
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
    </SearchBarWrapper>
  );
};
