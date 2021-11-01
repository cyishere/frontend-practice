import styled from "styled-components";
import Image from "next/image";

import { UNIT } from "../constants";

const CyanRow: React.FC = () => {
  return (
    <Wrapper>
      <LeftImageTop>
        <Image
          src="/images/ableton/photo-3.jpeg"
          alt=""
          width={524}
          height={393}
          layout="responsive"
        />
      </LeftImageTop>
      <LeftImageBottom>
        <Image
          src="/images/ableton/photo-4.jpeg"
          alt=""
          width={524}
          height={393}
          layout="responsive"
        />
      </LeftImageBottom>
      <RightImage>
        <Image
          src="/images/ableton/photo-5.jpeg"
          alt=""
          width={655}
          height={655}
          layout="responsive"
        />
      </RightImage>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, ${UNIT});
  grid-template-rows: repeat(9, ${UNIT});
  position: relative;

  &::before {
    content: "";
    background-color: var(--clr-light-cyan);
    width: ${8 * 8.33}rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

const LeftImageTop = styled.div`
  grid-column: 2 / 6;
  grid-row: 2 / 5;
`;

const LeftImageBottom = styled.div`
  grid-column: 2 / 6;
  grid-row: 6 / 9;
`;

const RightImage = styled.div`
  grid-column: 7 / 12;
  grid-row: 3 / 8;
`;

export default CyanRow;
