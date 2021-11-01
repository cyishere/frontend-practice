import styled from "styled-components";
import Link from "next/link";
import { Plus } from "react-feather";

import { Logo } from "../Assets";
import { PrimaryNavLink, SecondaryNavLink } from "../NavLink";
import Flex from "../Flex";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <MainNavWrapper>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <nav>
          <MainList as="ul">
            <li>
              <Link href="/ableton" passHref>
                <PrimaryNavLink>Live</PrimaryNavLink>
              </Link>
            </li>
            <li>
              <Link href="/ableton" passHref>
                <PrimaryNavLink>Push</PrimaryNavLink>
              </Link>
            </li>
            <li>
              <Link href="/ableton" passHref>
                <PrimaryNavLink>Link</PrimaryNavLink>
              </Link>
            </li>
            <li>
              <Link href="/ableton" passHref>
                <PrimaryNavLink>Shop</PrimaryNavLink>
              </Link>
            </li>
            <li>
              <Link href="/ableton" passHref>
                <PrimaryNavLink>Packs</PrimaryNavLink>
              </Link>
            </li>
            <li>
              <Link href="/ableton" passHref>
                <PrimaryNavLink>Help</PrimaryNavLink>
              </Link>
            </li>
            <li>
              <Link href="/ableton" passHref>
                <PrimaryNavLinkSpecial>
                  More
                  <IconWrapper>
                    <Plus />
                  </IconWrapper>
                </PrimaryNavLinkSpecial>
              </Link>
            </li>
          </MainList>
        </nav>
      </MainNavWrapper>

      <SubList as="ul">
        <li>
          <Link href="/ableton" passHref>
            <PrimaryNavLinkCallout>Try live for free</PrimaryNavLinkCallout>
          </Link>
        </li>
        <li>
          <Link href="/ableton" passHref>
            <SecondaryNavLink>Log in or register</SecondaryNavLink>
          </Link>
        </li>
      </SubList>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 5px solid var(--clr-light-gray);
`;

const MainNavWrapper = styled(Flex)`
  --gap: 40px;
`;

const MainList = styled(Flex)`
  --gap: 44px;
`;

const SubList = styled(Flex)`
  --gap: 32px;
`;

const PrimaryNavLinkSpecial = styled(PrimaryNavLink)`
  color: var(--clr-orange);
  padding-right: 2rem;
  position: relative;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: -3px;
  right: 0;
`;

const PrimaryNavLinkCallout = styled(PrimaryNavLink)`
  color: var(--clr-blue);
`;

export default Header;
