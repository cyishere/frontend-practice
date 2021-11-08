import styled from "styled-components";

import { QUERIES } from "../constants";

const Link = styled.a`
  font-weight: var(--fw-bold);
  color: inherit;
`;

export const PrimaryNavLink = styled(Link)`
  font-size: ${20 / 16}rem;
`;

export const SecondaryNavLink = styled(Link)`
  font-size: ${16 / 16}rem;

  @media ${QUERIES.desktopAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;
