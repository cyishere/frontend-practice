import styled from "styled-components";
import { QUERIES } from "../constants";

const HeadingOne = styled.h1`
  font-size: ${30 / 16}rem;
  font-weight: var(--fw-bold);
  line-height: 1.4;
  margin-bottom: 0.7em;

  @media ${QUERIES.desktopAndSmaller} {
    font-size: ${20 / 16}rem;
  }
`;

export default HeadingOne;
