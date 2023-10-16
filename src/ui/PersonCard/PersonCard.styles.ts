import styled from "styled-components";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CardWrapper = styled(Card)`
  &.MuiCard-root {
    width: 11.25rem;
    height: 23.25rem;
    background-color: #0b0c0e;
    color: #ffffff;
  }
`;

export const Poster = styled(CardMedia)`
  &.MuiCardMedia-root {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
