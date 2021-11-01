import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather";

import { UNIT } from "../constants";
import { HeadingOne } from "../Headings";

const BlueRow: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <Image
          src="/images/photo-8.jpeg"
          alt=""
          width={655}
          height={655}
          layout="responsive"
        />
      </Left>
      <Right>
        <HeadingWrapper>
          <HeadingOne>
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
            <Link href="/ableton" passHref>
              <Blocker>
                See latest jobs
                <IconWrapper>
                  <ChevronRight />
                </IconWrapper>
              </Blocker>
            </Link>
          </HeadingOne>
        </HeadingWrapper>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, ${UNIT});
  grid-template-rows: repeat(5, ${UNIT});
`;

const Left = styled.div`
  grid-column: 2 / 7;
  grid-row: 1 / 6;
`;

const Right = styled.div`
  grid-column: 7 / 12;
  grid-row: 1 / 6;
  background-color: var(--clr-lighter-blue);
  display: grid;
  place-content: center;
`;

const HeadingWrapper = styled.div`
  width: ${3 * 8.33}rem;
`;

const Blocker = styled.a`
  display: block;
  margin-top: 30px;
`;

const IconWrapper = styled.span`
  margin-left: 0.25rem;
  transform: translateY(2px);
`;

export default BlueRow;
