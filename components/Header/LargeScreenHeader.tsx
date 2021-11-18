import styled from "styled-components";
import Link from "next/link";

import { BREAKPOINTS, QUERIES } from "@/styles/constants";
import { TextLink } from "../Link";
import { LargeScreenNavbar } from "../Navbar";

const LargeScreenHeader: React.FC = () => {
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
  margin-bottom: 2rem;

  @media ${QUERIES.largerThanTablet} {
    display: block;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${BREAKPOINTS.laptop / 16}rem;
  padding: 1rem 1.5rem;
  margin: 0 auto;

  @media ${QUERIES.largerThanLaptop} {
    padding-left: 0;
    padding-right: 0;
  }
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
