import styled from "styled-components";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";


export const RatingWrapper = styled(Typography)`
  padding: 0.7rem 1rem;
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ff2e4f;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
`;

export const StarIconWrapper = styled(StarIcon)`
  font-size: 0.8rem;
`;

