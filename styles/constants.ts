export const COLORS = {
  white: "0deg 0% 100%",
  black: "216.9deg 19.1% 26.7%",
  orange: "37.7deg 92.1% 50.2%",
  green: {
    50: "155.3deg 81% 95.9%",
    300: "149.3deg 80.4% 90%",
    500: "186.2deg 93.5% 81.8%",
  },
};

export const FONTS = {
  primary: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji`,
};

export const BREAKPOINTS = {
  phone: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

export const QUERIES = {
  largerThanPhone: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
  largerThanTablet: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  largerThanLaptop: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
  largerThanDesktop: `(min-width: ${BREAKPOINTS.desktop / 16}rem)`,
};
