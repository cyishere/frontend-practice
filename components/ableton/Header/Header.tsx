import { CSSProperties, useState } from "react";
import styled from "styled-components";

import { MainList, SubList } from "../NavLink";
import Flex from "../Flex";
import { QUERIES } from "../constants";
import MobileNav from "./MobileNav";
import PrimaryLogo from "../PrimaryLogo";
import MenuButton from "../MenuButton";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  const stateColor = isMobile ? "white" : "black";
  const stateRotate = isMobile ? "rotate(180deg)" : "rotate(0deg)";

  const toggleMobileMode = () => setIsMobile(!isMobile);

  if (isMobile) {
    return (
      <MobileNav
        isOpen={isMobile}
        onDismiss={toggleMobileMode}
        stateColor={stateColor}
        stateRotate={stateRotate}
      />
    );
  }

  return (
    <Wrapper>
      <MainNavWrapper>
        <PrimaryLogo stateColor={stateColor} />

        <nav>
          <MainListWrapper as="ul">
            <MainList />
          </MainListWrapper>

          <MenuButton
            stateColor={stateColor}
            stateRotate={stateRotate}
            toggleMobileMode={toggleMobileMode}
          />
        </nav>
      </MainNavWrapper>

      <SubListWrapper as="ul">
        <SubList />
      </SubListWrapper>
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
  align-items: center;
`;

const MainListWrapper = styled(Flex)`
  --gap: 44px;

  @media ${QUERIES.desktopAndSmaller} {
    display: none;
  }
`;

const SubListWrapper = styled(Flex)`
  --gap: 32px;

  @media ${QUERIES.desktopAndSmaller} {
    display: none;
  }
`;

export default Header;
