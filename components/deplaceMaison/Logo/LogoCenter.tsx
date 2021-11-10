import styled from "styled-components";
import Image from "next/image";

interface LogoCenterProps {}

const LogoCenter: React.FC<LogoCenterProps> = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Image
          src="/images/deplace-maison/unisex-label-revert.svg"
          alt=""
          layout="responsive"
          width={54}
          height={18}
        />
      </LogoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.span`
  display: inline-block;
  width: 4.5vw;
  height: auto;

  & img {
    width: 100%;
    height: auto;
  }
`;

export default LogoCenter;
