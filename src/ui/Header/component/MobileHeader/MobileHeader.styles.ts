import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


export const MobileMenuWrapper = styled(Menu)`
  .MuiPaper-root {
    width: 100% !important;
    max-width: none !important;
    margin-top: 0.5rem;
    left: 0 !important;
    right: 0 !important;
    background-color: #131519;
    color: #ffffff !important;
    opacity: 0.7;
  }
`;

export const MobileMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    justify-content: center;
  }
  .MuiTypography-root {
    font-weight: 700;
  }
`;
