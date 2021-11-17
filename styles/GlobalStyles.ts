import { createGlobalStyle } from "styled-components";

import { COLORS, FONTS } from "./constants";

const GlobalStyles = createGlobalStyle`
  html {
    --clr-white: hsl(${COLORS.white});
    --clr-black: hsl(${COLORS.black});
    --clr-orange: hsl(${COLORS.orange});
    --clr-green-50: hsl(${COLORS.green[50]});
    --clr-green-300: hsl(${COLORS.green[300]});
    --clr-green-500: hsl(${COLORS.green[500]});

    --ff-primary: ${FONTS.primary};
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
`;

export default GlobalStyles;
