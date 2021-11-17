import styled from "styled-components";
import Link from "next/link";

import { BREAKPOINTS, QUERIES } from "@/styles/constants";
import { TextLink } from "../Link";
import { LargeScreenNavbar } from "../Navbar";

interface LargeScreenHeaderProps {}

const LargeScreenHeader: React.FC<LargeScreenHeaderProps> = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link href="/" passHref>
            <TextLink>cyishere</TextLink>
          </Link>
        </Logo>

        <LargeScreenNavbar />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: none;
  margin: 0 auto 5rem auto;
  max-width: 66.666667%;

  @media ${QUERIES.largerThanTablet} {
    display: block;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${QUERIES.largerThanLaptop} {
    padding-left: 0;
    padding-right: 0;
  }

  @media ${QUERIES.largerThanDesktop} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${BREAKPOINTS.laptop / 16}rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: var(--clr-orange);
  font-family: var(--ff-primary);
  font-size: 1.25rem;
  font-weight: 900;
  line-height: 1.75rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: currentColor;

  @media ${QUERIES.largerThanLaptop} {
    font-size: 3rem;
    line-height: 1;
  }
`;

export default LargeScreenHeader;
