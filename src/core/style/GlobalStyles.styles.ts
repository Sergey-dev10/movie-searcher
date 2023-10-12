import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    padding-top: 4.5rem;
    font-family: Yantramanav,Helvetica,Arial,sans-serif;
    color: #ffffff;
    line-height: 1.55;
    background-color: #0b0c0e;
  }
`;

export const ButtonWrapper = styled.button`
  background-color: #0086e0;
  border: 1px solid #0086e0;
  color: #ffffff;
  font-size: 1rem;
`;
