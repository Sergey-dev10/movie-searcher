import styled from "styled-components";
import { FormControl, TextField, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";


export const SearchBarWrapper = styled(FormControl)`
  &.MuiFormControl-root {
    flex-direction: row;
    border-radius: 0.25rem;
    background-color: #1b1e24;
  }
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

export const SearchButton = styled(IconButton)`
    &.MuiIconButton-root {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0 0.25rem 0.25rem 0;
      background-color: #f7ef47;
    }
`;
