import styled from "styled-components";

import NavLinkContent from "./NavLinkContent";

const LargeScreenNavbar: React.FC = () => {
  return (
    <nav>
      <List>
        <NavLinkContent />
      </List>
    </nav>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: ${18 / 16}rem;
`;

export default LargeScreenNavbar;
