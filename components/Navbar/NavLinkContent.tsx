import { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

import { TextLink } from "../Link";
import { COLORS } from "@/styles/constants";

interface NavLinkProps {
  active?: boolean;
}

const NavLinkContent: React.FC = () => {
  return (
    <Fragment>
      <li>
        <Link href="https://cyishere.dev" passHref>
          <NavLink>home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://cyishere.dev/portfolio" passHref>
          <NavLink active={true}>portfolio</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://cyishere.dev/blog" passHref>
          <NavLink>blog</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://cyishere.dev/about" passHref>
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Fragment>
  );
};

const NavLink = styled(TextLink)<NavLinkProps>`
  background: none;
  box-shadow: ${(p) =>
    p.active
      ? `inset 0 -0.125em 0 0 var(--clr-white), inset 0 -0.375em 0 0 hsl(${COLORS.green[500]} / 0.8)`
      : "none"};

  &:hover {
    text-decoration: none;
  }
`;

export default NavLinkContent;
