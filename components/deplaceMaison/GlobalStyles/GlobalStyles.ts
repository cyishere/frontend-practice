import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* ================== */
  /* Custom Properties  */
  /* ================== */
  html {
    /* colors */
    --clr-light-khaki: #FCF9EE;
    --clr-wheat: #E7D6C4;
    --clr-yellow: #DDC942;
    --clr-darkest-blue: #030611;
    --clr-black: #141414;
    
    /* font families */
    --ff-primary: 'Poppins', sans-serif;
    --ff-title: 'Rum Raisin', sans-serif;
    --ff-special: 'Ceviche One', cursive;
    
    /* font weights */
    --fw-normal: 400;
    --fw-bold: 700;
  }

  /* ================== */
  /* Global Styles      */
  /* ================== */
  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-normal);
    font-size: 0.85vw;
    line-height: 1;
    color: var(--clr-black);
    background-color: var(--clr-light-khaki);
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
