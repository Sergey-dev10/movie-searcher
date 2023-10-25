import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { ButtonWrapper } from "./DesktopHeader.styles.ts";
export const DesktopHeader = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <ButtonWrapper
          key={nanoid()}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"/"}
        >
          Home
        </ButtonWrapper>
        <ButtonWrapper
          key={nanoid()}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"trending"}
        >
          Trending
        </ButtonWrapper>
        <ButtonWrapper
          key={nanoid()}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"discover"}
        >
          Discover
        </ButtonWrapper>
        <ButtonWrapper
          key={nanoid()}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"shows"}
        >
          TV Shows
        </ButtonWrapper>
        <ButtonWrapper
          key={nanoid()}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"people"}
        >
          People
        </ButtonWrapper>
        <ButtonWrapper
          key={nanoid()}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"genres"}
        >
          Genres
        </ButtonWrapper>
        <ButtonWrapper
          key={nanoid()}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"favorites"}
        >
          Favorites
        </ButtonWrapper>
      </Box>
    </>
  );
};
