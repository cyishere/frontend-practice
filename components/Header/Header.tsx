import { useState } from "react";
import styled from "styled-components";
import { Menu } from "react-feather";

import { QUERIES } from "@/styles/constants";
import VisuallyHidden from "../VisuallyHidden";
import { MobileNavbar, DesktopNavbar } from "../Navbar";
import UnstyledButton from "../UnstyledButton";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Logo href="https://cyishere.dev">CY is here.</Logo>

        <DesktopNavbar />

        <MobileNavbar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />

        <MenuToggleButton
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={toggleMobileMenu}
        >
          <VisuallyHidden>Menu</VisuallyHidden>
          <Menu />
        </MenuToggleButton>
      </Wrapper>
    </MaxWidthWrapper>
  );
};

const MaxWidthWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.header`
  font-family: var(--ff-main);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 96px;

  @media ${QUERIES.largerThanTablet} {
    padding-top: 48px;
  }
`;

const Logo = styled.a`
  font-family: var(--ff-logo);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-big);
  color: var(--clr-text-primary);
  letter-spacing: 4px;
`;

const MenuToggleButton = styled(UnstyledButton)`
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media ${QUERIES.largerThanTablet} {
    display: none;
  }
`;

export default Header;
