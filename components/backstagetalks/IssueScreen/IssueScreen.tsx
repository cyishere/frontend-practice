import styled from "styled-components";
import Image from "next/image";

import { IssueType } from "../types";

interface IssueScreenProps {
  issue: IssueType;
}

const IssueScreen: React.FC<IssueScreenProps> = ({ issue }) => {
  return (
    <Wrapper>
      <IssueInfo>
        <CoverWrapper>
          <Image
            src={issue.cover}
            alt={issue.title + "cover"}
            width={840}
            height={1064}
            layout="responsive"
          />
        </CoverWrapper>
        <Title>{issue.title}</Title>
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
      </IssueInfo>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-weight: var(--fw-bold);
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
`;

const IssueInfo = styled.div`
  width: 420px;
`;

const CoverWrapper = styled.div`
  max-width: 420px;
  max-height: 532px;
`;

const Title = styled.h2``;

const BuyLinkWrapper = styled.p`
  font-size: var(--fs-base);
  text-transform: uppercase;
`;

const StoreWrapper = styled.p`
  font-size: var(--fs-small);
`;

const Link = styled.a`
  color: var(--clr-white);
`;

export default IssueScreen;
