import styled from "styled-components";
import Link from "next/link";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/deplace-maison" passHref>
            <ItemLink>Shop</ItemLink>
          </Link>
        </li>
        <li>
          <Link href="/deplace-maison" passHref>
            <ItemLink>Collections</ItemLink>
          </Link>
        </li>
        <li>
          <Link href="/deplace-maison" passHref>
            <ItemLink>About</ItemLink>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  left: 1.5vw;
  bottom: 1.5vw;
`;

const ItemLink = styled.a`
  display: block;
  padding-top: 0.5rem;
  text-transform: uppercase;
`;

export default Navbar;
