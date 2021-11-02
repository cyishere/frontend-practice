export const BREAKPOINTS = {
  desktop: 990,
  tablet: 750,
  mobile: 540,
};

export const QUERIES = {
  mobileAndLarger: `(min-width: ${BREAKPOINTS.mobile / 16}rem)`,
  tabletAndLarger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  desktopAndLarger: `(min-width: ${BREAKPOINTS.desktop / 16}rem)`,
};
