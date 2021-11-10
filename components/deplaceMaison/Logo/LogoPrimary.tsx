import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

interface LogoPrimaryProps {}

const LogoPrimary: React.FC<LogoPrimaryProps> = () => {
  return (
    <Link href="/" passHref>
      <Wrapper>
        <Image
          src="/images/deplace-maison/de-logotype-vert.svg"
          alt="Logo of Déplacé Maison"
          layout="responsive"
          width={40}
          height={125}
        />
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  position: fixed;
  top: 1.5vw;
  left: 1.5vw;
  width: 3.2vw;
  height: auto;

  & img {
    width: 100%;
    height: auto;
  }
`;

export default LogoPrimary;
