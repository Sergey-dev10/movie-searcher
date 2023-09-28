import { nanoid } from "@reduxjs/toolkit";
import Box from "@mui/material/Box";
import { ButtonWrapper } from "./DesktopHeader.styles.ts";
export const DesktopHeader = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <ButtonWrapper key={nanoid()} sx={{ my: 2, color: "white", display: "block" }}>
          Home
        </ButtonWrapper>
        <ButtonWrapper key={nanoid()} sx={{ my: 2, color: "white", display: "block" }}>
          Trending
        </ButtonWrapper>
        <ButtonWrapper key={nanoid()} sx={{ my: 2, color: "white", display: "block" }}>
          Discover
        </ButtonWrapper>
        <ButtonWrapper key={nanoid()} sx={{ my: 2, color: "white", display: "block" }}>
          TV Shows
        </ButtonWrapper>
        <ButtonWrapper key={nanoid()} sx={{ my: 2, color: "white", display: "block" }}>
          People
        </ButtonWrapper>
        <ButtonWrapper key={nanoid()} sx={{ my: 2, color: "white", display: "block" }}>
          Genres
        </ButtonWrapper>
        <ButtonWrapper key={nanoid()} sx={{ my: 2, color: "white", display: "block" }}>
          Favorites
        </ButtonWrapper>
      </Box>
    </>
  );
};
