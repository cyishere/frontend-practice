import { Fragment, useState } from "react";
import styled from "styled-components";
import { Menu } from "react-feather";

import UnstyledButton from "../UnstyledButton";
import { QUERIES } from "@/styles/constants";
import { SmallScreenNavbar } from "../Navbar";

interface SmallScreenHeaderProps {}

const SmallScreenHeader: React.FC<SmallScreenHeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onDismiss = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Wrapper>
        <LogoText>cyishere</LogoText>
        <UnstyledButton onClick={onDismiss}>
          <Menu size={40} />
        </UnstyledButton>
      </Wrapper>

      <SmallScreenNavbar isOpen={isOpen} onDismiss={onDismiss} />
    </Fragment>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2.5rem;

  @media ${QUERIES.largerThanTablet} {
    display: none;
  }
`;

const LogoText = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

export default SmallScreenHeader;
