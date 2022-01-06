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
    --clr-pink: hsl(${COLORS.pink});
    --clr-gray-100: hsl(${COLORS.gray[100]});
    --clr-khaki-light: hsl(${COLORS.khakiLight});
    --clr-text-primary: hsl(${COLORS.textPrimary});
    --clr-purple-primary: hsl(${COLORS.purplePrimary});

    --ff-primary: ${FONTS.primary};
    --ff-heading: ${FONTS.heading};
    --ff-star-wars: "StarJedi SE", sans-serif;

    --shadow-color: 0deg 0% 63%;
    --shadow-elevation-medium:
      0px 0.5px 0.6px hsl(var(--shadow-color) / 0.36),
      0px 1.8px 2px -0.8px hsl(var(--shadow-color) / 0.36),
      0.1px 4.4px 5px -1.7px hsl(var(--shadow-color) / 0.36),
      0.2px 10.8px 12.2px -2.5px hsl(var(--shadow-color) / 0.36);
  }

  body {
    font-size: 16px;
    font-family: var(--ff-primary);
    background-color: var(--clr-khaki-light);
    color: var(--clr-text-primary);
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
