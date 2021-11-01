import styled from "styled-components";
import Image from "next/image";

import { Grid } from "../Grid";

interface YellowColumnProps {}

const YellowColumn: React.FC<YellowColumnProps> = () => {
  return (
    <RelativeGrid>
      <LeftImage>
        <Image
          src="/images/photo-1.jpeg"
          alt=""
          width={655}
          height={655}
          layout="responsive"
        />
      </LeftImage>
      <YellowBg>
        <RightImage>
          <Image
            src="/images/photo-2.jpeg"
            alt=""
            width={524}
            height={393}
            layout="responsive"
          />
        </RightImage>
      </YellowBg>
    </RelativeGrid>
  );
};

const RelativeGrid = styled(Grid)`
  position: relative;
`;

const LeftImage = styled.div`
  grid-column: 2 / 7;
  position: relative;
  z-index: 2;
`;

const YellowBg = styled.div`
  grid-column: 6 / 13;
  background-color: var(--clr-light-yellow);
  display: grid;
  grid-template-columns: repeat(7, 8.33rem);
  grid-template-rows: repeat(7, 8.33rem);
  position: relative;
  z-index: 1;
`;

const RightImage = styled.div`
  grid-column: 3 / 7;
  grid-row: 3 / 6;
`;

export default YellowColumn;
