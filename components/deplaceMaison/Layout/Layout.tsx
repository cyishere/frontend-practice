import { Fragment } from "react";

import SEO from "@/components/SEO";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import Cursor from "../Cursor";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <SEO title="Déplacé Maison" pathname="/deplace-maison" />
      <Wrapper>{children}</Wrapper>
      <Cursor />
      <GlobalStyles />
    </Fragment>
  );
};

const Wrapper = styled.div`
  padding-top: 1.5vw;
`;

export default Layout;
