import styled from "styled-components";
import Image from "next/image";

const YellowColumn: React.FC = () => {
  return (
    <Wrapper>
      <LeftImage>
        <Image
          src="/images/photo-1.jpeg"
          alt=""
          width={655}
          height={655}
          layout="responsive"
        />
      </LeftImage>

      <RightImage>
        <Image
          src="/images/photo-2.jpeg"
          alt=""
          width={524}
          height={393}
          layout="responsive"
        />
      </RightImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(7, 8.33rem);
  grid-template-columns: repeat(12, 8.33rem);

  &::before {
    content: "";
    background-color: var(--clr-light-yellow);
    width: ${7 * 8.33}rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

const LeftImage = styled.div`
  grid-column: 2 / 7;
  grid-row: 2 / 7;
`;

const RightImage = styled.div`
  grid-column: 8 / 12;
  grid-row: 3 / 6;
`;

export default YellowColumn;
