import styled from "styled-components";
import Image from "next/image";
import { QUERIES } from "../constants";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>
        <Image
          src="/images/backstagetalks/logo.png"
          alt="Backstage Talks Logo"
          width={260}
          height={30}
          layout="responsive"
        />
      </Logo>

      <Email href="mailto:info@backstagetalks.com">
        info@backstagetalks.com
      </Email>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  width: 160px;
  height: 18px;

  @media ${QUERIES.tabletAndLarger} {
    width: 260px;
    height: 30px;
  }
`;

const Email = styled.a`
  display: none;
  font-size: var(--fs-base);
  font-weight: var(--fw-bold);

  @media ${QUERIES.desktopAndLarger} {
    display: inline-block;
  }
`;

export default Header;
