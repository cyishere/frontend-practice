import styled from "styled-components";
import { DialogOverlay } from "@reach/dialog";
import { X } from "react-feather";

import UnstyledButton from "../UnstyledButton";
import NavLinkContent from "./NavLinkContent";

interface SmallScreenNavbarProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const SmallScreenNavbar: React.FC<SmallScreenNavbarProps> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Wrapper isOpen={isOpen}>
      <nav>
        <List>
          <NavLinkContent />
        </List>
      </nav>

      <CloseButton onClick={onDismiss}>
        <X size={40} />
      </CloseButton>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--clr-green-50);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const List = styled.ul`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: var(--clr-black);
`;

export default SmallScreenNavbar;
