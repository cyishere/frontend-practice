import styled from "styled-components";
import Image from "next/image";

import { IssueType } from "../types";

interface IssueScreenProps {
  issue: IssueType;
}

const IssueScreen: React.FC<IssueScreenProps> = ({ issue }) => {
  return (
    <Wrapper>
      <CoverWrapper>
        <Image
          src={issue.cover}
          alt={issue.title + "cover"}
          width={840}
          height={1064}
          layout="responsive"
          priority={issue.id === 1 ? true : undefined}
        />
      </CoverWrapper>
      <Title>
        {issue.title}
        {issue.soldOut ? " is sold out." : ""}
      </Title>
      <BuyLinkWrapper>
        <Link href={issue.link}>buy here</Link>
      </BuyLinkWrapper>
      <StoreWrapper>
        or in{" "}
        <Link href="http://backstagetalks.com/stocklist.php">
          selected stores
        </Link>
        .
      </StoreWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 420px;
  width: 100%;
`;

const CoverWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  margin-bottom: 18px;
`;

const BuyLinkWrapper = styled.p`
  font-size: var(--fs-base);
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const StoreWrapper = styled.p`
  font-size: var(--fs-small);
`;

const Link = styled.a`
  color: var(--clr-white);
`;

export default IssueScreen;
