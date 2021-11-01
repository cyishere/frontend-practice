import styled from "styled-components";

const Link = styled.a`
  font-weight: var(--fw-bold);
  color: var(--clr-black);
`;

export const PrimaryNavLink = styled(Link)`
  font-size: ${20 / 16}rem;
`;

export const SecondaryNavLink = styled(Link)`
  font-size: ${16 / 16}rem;
`;
