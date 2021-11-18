import { Fragment } from "react";

import SEO from "@/components/SEO";
import GlobalStyles from "../GlobalStyles";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <SEO title="Ableton Clone" pathname="/ableton" />
      {children}
      <GlobalStyles />
    </Fragment>
  );
};

export default Layout;
