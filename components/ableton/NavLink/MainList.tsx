import { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Plus } from "react-feather";

import { PrimaryNavLink } from ".";
import { QUERIES } from "../constants";
import UnstyledButton from "@/components/UnstyledButton";

const MainList: React.FC = () => {
  return (
    <Fragment>
      <li>
        <Link href="/ableton" passHref>
          <PrimaryNavLink>Live</PrimaryNavLink>
        </Link>
      </li>
      <li>
        <Link href="/ableton" passHref>
          <PrimaryNavLink>Push</PrimaryNavLink>
        </Link>
      </li>
      <li>
        <Link href="/ableton" passHref>
          <PrimaryNavLink>Link</PrimaryNavLink>
        </Link>
      </li>
      <li>
        <Link href="/ableton" passHref>
          <PrimaryNavLink>Shop</PrimaryNavLink>
        </Link>
      </li>
      <li>
        <Link href="/ableton" passHref>
          <PrimaryNavLink>Packs</PrimaryNavLink>
        </Link>
      </li>
      <li>
        <Link href="/ableton" passHref>
          <PrimaryNavLink>Help</PrimaryNavLink>
        </Link>
      </li>
      <MoreItem>
        <MoreButton>
          More
          <IconWrapper>
            <Plus />
          </IconWrapper>
        </MoreButton>
      </MoreItem>
    </Fragment>
  );
};

const MoreItem = styled.li`
  @media ${QUERIES.desktopAndSmaller} {
    display: none;
  }
`;

const MoreButton = styled(UnstyledButton)`
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-bold);
  color: var(--clr-orange);
  padding-right: 2rem;
  position: relative;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: -3px;
  right: 0;
`;

export default MainList;
