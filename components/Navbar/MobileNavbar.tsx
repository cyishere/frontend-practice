import styled, { keyframes } from "styled-components";
import { DialogOverlay } from "@reach/dialog";
import { X } from "react-feather";

import { COLORS, QUERIES } from "@/styles/constants";
import VisuallyHidden from "../VisuallyHidden";
import NavLink from "./NavLink";
import UnstyledButton from "../UnstyledButton";

interface MobileNavbarProps {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  toggleMobileMenu,
}) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={toggleMobileMenu}>
      <NavLink />

      <MenuToggleButton
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={toggleMobileMenu}
      >
        <VisuallyHidden>Close</VisuallyHidden>
        <X />
      </MenuToggleButton>
    </Wrapper>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: hsl(${COLORS.purpleLight} / 0.7);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const MenuToggleButton = styled(UnstyledButton)`
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media ${QUERIES.largerThanTablet} {
    display: none;
  }
`;

export default MobileNavbar;
