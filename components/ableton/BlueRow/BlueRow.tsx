import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather";

import { QUERIES } from "../constants";
import { HeadingOne } from "../Headings";

const BlueRow: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <Image
          src="/images/ableton/photo-8.jpeg"
          alt=""
          width={655}
          height={655}
          layout="responsive"
        />
      </Left>
      <Right>
        <HeadingOne>
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
          <Link href="/ableton" passHref>
            <Blocker>
              See latest jobs
              <IconWrapper>
                <ChevronRight />
              </IconWrapper>
            </Blocker>
          </Link>
        </HeadingOne>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 8.33vw;
  padding-right: 8.33vw;

  @media ${QUERIES.underLarge} {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  background-color: var(--clr-lighter-blue);
  padding: 8.33vw;
`;

const Blocker = styled.a`
  display: block;
  margin-top: ${30 / 16}rem;
`;

const IconWrapper = styled.span`
  margin-left: 0.25rem;
  transform: translateY(2px);
`;

export default BlueRow;
