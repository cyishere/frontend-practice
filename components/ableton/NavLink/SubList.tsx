import { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

import { PrimaryNavLink, SecondaryNavLink } from ".";
import { QUERIES } from "../constants";

const SubList: React.FC = () => {
  return (
    <Fragment>
      <li>
        <Link href="/ableton" passHref>
          <PrimaryNavLinkCallout>Try live for free</PrimaryNavLinkCallout>
        </Link>
      </li>
      <li>
        <Link href="/ableton" passHref>
          <SecondaryNavLink>Log in or register</SecondaryNavLink>
        </Link>
      </li>
    </Fragment>
  );
};

const PrimaryNavLinkCallout = styled(PrimaryNavLink)`
  color: var(--clr-blue);

  @media ${QUERIES.desktopAndSmaller} {
    color: inherit;
  }
`;

export default SubList;
