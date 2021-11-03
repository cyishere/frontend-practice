import styled from "styled-components";

import { ISSUES } from "data/backstagetalks";
import { QUERIES } from "../constants";

const TableOfContent: React.FC = () => {
  return (
    <Wrapper>
      {ISSUES.map((issue) => (
        <BookMarker key={issue.id} href={`#issue${issue.title.slice(-1)}`}>
          {issue.title}
        </BookMarker>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;

  @media ${QUERIES.tabletAndLarger} {
    display: block;
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
`;

const BookMarker = styled.a`
  display: block;
  font-size: var(--fs-base);
  line-height: 1.6;
`;

export default TableOfContent;
