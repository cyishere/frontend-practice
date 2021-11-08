import { CSSProperties } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Logo } from "../Assets";

interface PrimaryLogoProps {
  stateColor: string;
}

const PrimaryLogo: React.FC<PrimaryLogoProps> = ({ stateColor }) => {
  return (
    <Link href="/" passHref>
      <LogoWrapper
        style={{ color: "var(--clr-" + stateColor + ")" } as CSSProperties}
      >
        <Logo />
      </LogoWrapper>
    </Link>
  );
};

const LogoWrapper = styled.a`
  svg {
    width: 60px;
    height: 28px;
  }
`;

export default PrimaryLogo;
