import * as React from "react";
import { Link } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "../../assets/logo.svg?react";
import { MobileHeader } from "./component/MobileHeader";
import { DesktopHeader } from "./component/DesktopHeader";
import { SearchBar } from "./component/SearchBar";
import {HeaderWrapper} from "./Header.styles.ts";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HeaderWrapper>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SvgIcon fontSize="large">
            <Link to={"/"}>
              <Logo />
            </Link>
          </SvgIcon>
          <MobileHeader
            anchorElNav={anchorElNav}
            onHandleOpen={handleOpenNavMenu}
            onHandleClose={handleCloseNavMenu}
          />
          <DesktopHeader />
          <SearchBar />
        </Toolbar>
      </Container>
    </HeaderWrapper>
  );
};
