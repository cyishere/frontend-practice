import type { AppProps } from "next/app";
import { Fragment } from "react";

import Reset from "@/styles/Reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Reset />
    </Fragment>
  );
}

export default MyApp;
