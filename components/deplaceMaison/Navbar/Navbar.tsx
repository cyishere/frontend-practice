import styled from "styled-components";
import Link from "next/link";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/deplace-maison">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/deplace-maison">
            <a>Collections</a>
          </Link>
        </li>
        <li>
          <Link href="/deplace-maison">
            <a>About</a>
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

export default Navbar;
