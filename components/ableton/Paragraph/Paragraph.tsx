import styled from "styled-components";
import { QUERIES } from "../constants";

const Paragraph: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-normal);
  line-height: 1.5;

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }

  @media ${QUERIES.desktopAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export default Paragraph;
