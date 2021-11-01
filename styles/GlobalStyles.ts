import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  a {
    color: deeppink;
    text-decoration: none;
  }

  a:hover {
    text-decoration: revert;
  }
`;

export default GlobalStyles;
