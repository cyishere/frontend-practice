import { CSSProperties } from "react";
import styled from "styled-components";

import UnstyledButton from "@/components/UnstyledButton";
import { SmallArrow } from "../Assets";
import { QUERIES } from "../constants";

interface MenuButtonProps {
  stateColor: string;
  stateRotate: string;
  toggleMobileMode: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  stateColor,
  stateRotate,
  toggleMobileMode,
}) => {
  return (
    <Wrapper
      style={{ color: "var(--clr-" + stateColor + ")" } as CSSProperties}
      onClick={toggleMobileMode}
    >
      Menu
      <IconWrapper style={{ "--transform": stateRotate } as CSSProperties}>
        <SmallArrow />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-bold);
  padding: 18px;
  padding-left: 0;
  position: relative;
  display: none;

  @media ${QUERIES.desktopAndSmaller} {
    display: block;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 8px;
  margin: auto;
  pointer-events: none;
  transform: var(--transform);
  transition: transform 500ms;

  & svg {
    display: inherit;
    fill: inherit;
  }
`;

export default MenuButton;
