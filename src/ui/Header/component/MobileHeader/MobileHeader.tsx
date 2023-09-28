import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { nanoid } from "@reduxjs/toolkit";
import Typography from "@mui/material/Typography";
import { MobileMenuWrapper, MobileMenuItem } from "./MobileHeader.styles.ts";
interface MobileHeaderProps {
  anchorElNav: null | HTMLElement;
  onHandleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onHandleClose: () => void;
}

export const MobileHeader = ({
  onHandleOpen,
  onHandleClose,
  anchorElNav,
}: MobileHeaderProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        justifyContent: "space-between",
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onHandleOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <MobileMenuWrapper
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={onHandleClose}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MobileMenuItem key={nanoid()} onClick={onHandleClose}>
          <Typography>Home</Typography>
        </MobileMenuItem>
        <MobileMenuItem key={nanoid()} onClick={onHandleClose}>
          <Typography>Trending</Typography>
        </MobileMenuItem>
        <MobileMenuItem key={nanoid()} onClick={onHandleClose}>
          <Typography>Discover</Typography>
        </MobileMenuItem>
        <MobileMenuItem key={nanoid()} onClick={onHandleClose}>
          <Typography>TV Shows</Typography>
        </MobileMenuItem>
        <MobileMenuItem key={nanoid()} onClick={onHandleClose}>
          <Typography>People</Typography>
        </MobileMenuItem>
        <MobileMenuItem key={nanoid()} onClick={onHandleClose}>
          <Typography>Genres</Typography>
        </MobileMenuItem>
        <MobileMenuItem key={nanoid()} onClick={onHandleClose}>
          <Typography>Favorites</Typography>
        </MobileMenuItem>
      </MobileMenuWrapper>
    </Box>
  );
};
