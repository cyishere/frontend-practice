import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* ================== */
  /* Custom Properties  */
  /* ================== */
  html {
    /* colors */
    --clr-cyan: #00c1b5;
    --clr-yellow: #ffbe00;
    --clr-red: #e30512;
    --clr-orange: #ff651a;
    --clr-blue: #1d3fbb;
    --clr-black: #251d20;
    --clr-white: #ffffff;
    
    /* font families */
    --ff-primary: 'Roboto', sans-serif;

    /* font sizes */
    --fs-smaller: ${12 / 16}rem;
    --fs-small: ${15 / 16}rem;
    --fs-base: ${18 / 16}rem;
    
    /* font weights */
    --fw-normal: 400;
    --fw-bold: 700;

    /* Official styles (Firefox) */
    scrollbar-color: hsl(0deg 0% 0% / 0) hsl(0deg 0% 0% / 0);
    scrollbar-width: none;
    -ms-overflow-style: none; /* For IE */
  }

  /* ================== */
  /* Global Styles      */
  /* ================== */
  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-normal);
    color: var(--clr-black);
  }

  /* Vendor prefix for other browsers */
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  

  a {
    color: var(--clr-black);
    text-decoration: none;
  }

  a:hover {
    text-decoration: revert;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
`;

export default GlobalStyles;
