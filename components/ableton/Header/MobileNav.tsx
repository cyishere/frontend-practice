import styled, { keyframes } from "styled-components";
import { DialogOverlay } from "@reach/dialog";

import { MainList, SubList } from "../NavLink";
import PrimaryLogo from "../PrimaryLogo";
import MenuButton from "../MenuButton";
import Flex from "../Flex";

interface MobileNavProps {
  isOpen: boolean;
  onDismiss: () => void;
  stateColor: string;
  stateRotate: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onDismiss,
  stateColor,
  stateRotate,
}) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Header as="header">
        <PrimaryLogo stateColor={stateColor} />
        <MenuButton
          stateColor={stateColor}
          stateRotate={stateRotate}
          toggleMobileMode={onDismiss}
        />
      </Header>

      <Nav>
        <ListWrapper>
          <MainList />
          <SubList />
        </ListWrapper>
      </Nav>
    </Wrapper>
  );
};

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: var(--clr-blue);
  color: var(--clr-white);
  animation: ${slideDown} 500ms;
`;

const Header = styled(Flex)`
  --gap: 40px;
  align-items: center;
  padding: 20px 40px;
`;

const Nav = styled.nav`
  padding-left: 40px;
  padding-right: 40px;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default MobileNav;
