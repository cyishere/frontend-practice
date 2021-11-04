import styled from "styled-components";

import { ISSUES } from "data/backstagetalks";
import { QUERIES } from "../constants";
import { CSSProperties } from "react";

interface TableOfContentProps {
  index: number;
}

const TableOfContent: React.FC<TableOfContentProps> = ({ index }) => {
  console.log("index:", index);

  return (
    <Wrapper>
      {ISSUES.map((issue, i) => (
        <BookMarker
          key={issue.id}
          href={`#issue${issue.title.slice(-1)}`}
          style={
            {
              "--fontWeight": i === index ? "700" : "400",
            } as CSSProperties
          }
        >
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
    z-index: 9999;
  }
`;

const BookMarker = styled.a`
  display: block;
  font-size: var(--fs-base);
  font-weight: var(--fontWeight);
  line-height: 1.6;
`;

export default TableOfContent;
