import styled from "styled-components";

import { QUERIES } from "@/styles/constants";
import NavLink from "./NavLink";

const DesktopNavbar: React.FC = () => {
  return (
    <Wrapper>
      <NavLink />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;

  @media ${QUERIES.largerThanTablet} {
    display: block;
  }
`;

export default DesktopNavbar;
