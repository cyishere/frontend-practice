import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* ================== */
  /* Custom Fonts       */
  /* ================== */
  @font-face {
    font-family: "futura-pt";
    src: url("/fonts/FuturaPT/book.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "futura-pt";
    src: url("/fonts/FuturaPT/bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  /* ================== */
  /* Custom Properties  */
  /* ================== */
  html {
    /* colors */
    --clr-white: #ffffff;
    --clr-light-gray: #F3F3F3;
    --clr-darker-light-gray: #EEEEEE;
    --clr-light-yellow: #FBFFA7;
    --clr-light-cyan: #B6FFC0;
    --clr-lighter-blue: #B1C5FF;
    --clr-light-purple: #D5B3FF;
    --clr-orange: #FF764D;
    --clr-light-blue: #2233FF;
    --clr-blue: #0000FF;
    --clr-black: #000000;

    /* font family */
    --ff-primary: futura-pt,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;

    /* font weight */
    --fw-normal: 400;
    --fw-bold: 700;
  }

  body {
    font-family: var(--ff-primary);
    background-color: var(--clr-light-gray);
  }

  a {
    color: var(--clr-blue);
    text-decoration: none;
  }
`;

export default GlobalStyles;
