import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: Yantramanav,Helvetica,Arial,sans-serif;
    color: #ffffff;
    line-height: 1.55;
    background-color: #0b0c0e;
  }
`;
