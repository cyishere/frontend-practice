import styled from "styled-components";
import { QUERIES } from "../constants";

const HeadingThree = styled.h3`
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-bold);
  line-height: 1.5;

  @media ${QUERIES.underLarge} {
    font-size: ${16 / 16}rem;
  }
`;

export default HeadingThree;
