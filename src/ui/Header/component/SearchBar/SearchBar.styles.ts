import styled from "styled-components";
import { FormControl, TextField, InputAdornment } from "@mui/material";


export const SearchBarWrapper = styled(FormControl)`
  border: 1px solid #1b1e24;
  border-radius: 0.25rem;
  background-color: #1b1e24;
`;
export const SearchInput = styled(TextField)`
  .MuiInputBase-input {
    color: #ffffff;
  }
`;

export const SearchIconWrapper = styled(InputAdornment)`
  .MuiSvgIcon-root  {
    color: #ffffff;
  }
`;
