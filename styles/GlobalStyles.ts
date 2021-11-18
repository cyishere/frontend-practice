import { createGlobalStyle } from "styled-components";

import { COLORS, FONTS } from "./constants";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "StarJedi SE";
    src: url("/fonts/StarJediSE.woff2") format('woff2'),
         url("/fonts/StarJediSE.woff") format('woff');
    font-weight: 400;
    font-style: normal;
  }

  html {
    --clr-white: hsl(${COLORS.white});
    --clr-black: hsl(${COLORS.black});
    --clr-orange: hsl(${COLORS.orange});
    --clr-green-50: hsl(${COLORS.green[50]});
    --clr-green-300: hsl(${COLORS.green[300]});
    --clr-green-500: hsl(${COLORS.green[500]});
    --clr-yellow: hsl(${COLORS.yellow});
    --clr-blue: hsl(${COLORS.blue});

    --ff-primary: ${FONTS.primary};
    --ff-star-wars: "StarJedi SE", sans-serif;
  }

  body {
    font-size: 16px;
    font-family: var(--ff-primary);
    color: var(--clr-black);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: revert;
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;

    /*
      Create a stacking context, without a z-index.
      This ensures that all portal content (modals and tooltips) will
      float above the app.
    */
    isolation: isolate;
  }
`;

export default GlobalStyles;
