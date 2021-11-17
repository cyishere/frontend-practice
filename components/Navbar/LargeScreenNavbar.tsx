import styled from "styled-components";
import NavLinkContent from "./NavLinkContent";

interface LargeScreenNavbarProps {}

const LargeScreenNavbar: React.FC<LargeScreenNavbarProps> = () => {
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
