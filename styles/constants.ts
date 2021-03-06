export const COLORS = {
  white: "0deg 0% 100%",
  black: "216.9deg 19.1% 26.7%",
  orange: "37.7deg 92.1% 50.2%",
  pink: "330deg 81% 60%",
  green: {
    50: "155.3deg 81% 95.9%",
    300: "149.3deg 80.4% 90%",
    500: "186.2deg 93.5% 81.8%",
  },
  yellow: "54deg 99% 62%",
  blue: "200deg 100% 34%",
  gray: {
    100: "0deg 0% 96.5%",
  },
  khakiLight: "0deg 0% 98%",
  textPrimary: "240deg 2% 30%",
  purplePrimary: "248.4deg 74.2% 47.1%",
  purpleLight: "246deg 62.5% 96.9%",
  cyan: "170.2deg 42.7% 72%",
};

export const FONTS = {
  primary: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji`,
  main: `'Poppins', sans-serif;`,
  heading: `"Barlow", sans-serif`,
  logo: `'Aref Ruqaa', serif`,
};

export const FONT_SIZES = {
  sm: `${14 / 16}rem`,
  base: `${16 / 16}rem`,
  md: `${18 / 16}rem`,
  lg: `${24 / 16}rem`,
  xl: `${28 / 16}rem`,
  xxl: `${32 / 16}rem`,
  xxxl: `${36 / 16}rem`,
  big: `${48 / 16}rem`,
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
