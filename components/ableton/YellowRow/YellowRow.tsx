import styled from "styled-components";
import Image from "next/image";

import { UNIT } from "../constants";

const YellowColumn: React.FC = () => {
  return (
    <Wrapper>
      <LeftImage>
        <Image
          src="/images/ableton/photo-1.jpeg"
          alt=""
          width={655}
          height={655}
          layout="responsive"
        />
      </LeftImage>

      <RightImage>
        <Image
          src="/images/ableton/photo-2.jpeg"
          alt=""
          width={524}
          height={393}
          layout="responsive"
        />
      </RightImage>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: repeat(7, ${UNIT});
  grid-template-columns: repeat(12, ${UNIT});

  &::before {
    content: "";
    background-color: var(--clr-light-yellow);
    grid-column: 6 / -1;
    grid-row: 1 / -1;
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
