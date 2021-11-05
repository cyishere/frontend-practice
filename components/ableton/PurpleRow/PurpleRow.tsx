import styled from "styled-components";
import Image from "next/image";

import { UNIT } from "../constants";

const PurpleRow: React.FC = () => {
  return (
    <Wrapper>
      <LeftImage>
        <Image
          src="/images/ableton/photo-6.jpeg"
          alt=""
          width={524}
          height={393}
          layout="responsive"
        />
      </LeftImage>
      <RightImage>
        <Image
          src="/images/ableton/photo-7.jpeg"
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
  grid-template-rows: repeat(7, ${UNIT});
  position: relative;

  &::before {
    content: "";
    background-color: var(--clr-light-purple);
    grid-column: 3 / -3;
    grid-row: 1 / -1;
  }
`;

const LeftImage = styled.div`
  grid-column: 2 / 6;
  grid-row: 3 / 6;
`;

const RightImage = styled.div`
  grid-column: 8 / 13;
  grid-row: 2 / 7;
`;

export default PurpleRow;
