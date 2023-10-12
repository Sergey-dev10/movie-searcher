import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export const PaginationWrapper = styled(Pagination)`
  .MuiPagination-ul {
    justify-content: center;
    margin-top: 1.5rem;
  }
  .MuiPaginationItem-root {
    background-color: #1b1e24;
    color: #ffffff;
  }
  .Mui-selected {
    background-color: #0086e0;
  }
`;
