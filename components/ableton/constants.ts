export const UNIT = `minmax(3.75vw, 8.33vw)`;

export const BREAKPOINTS = {
  xl: 1265,
  lg: 1110,
  md: 750,
};

export const QUERIES = {
  underLarge: `(max-width: ${BREAKPOINTS.xl / 16}rem)`,
  desktopAndSmaller: `(max-width: ${BREAKPOINTS.lg / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.md / 16}rem)`,
};
