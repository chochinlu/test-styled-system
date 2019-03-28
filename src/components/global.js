import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;
    font-weight: inherit;
    font-family: "Lato", sans-serif;
    line-height: 1.5;
  }

  html {
    font-size: 62.5%;
    font-weight: 400;
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
