import styled from "styled-components";
import Link from "next/link";

import Flex from "../Flex";
import { SecondaryNavLink } from "../NavLink";

const SubHeader = () => {
  return (
    <Wrapper>
      <List as="ul">
        <li>
          <Link href="/ableton" passHref>
            <SecondaryNavLinkSpecial>About</SecondaryNavLinkSpecial>
          </Link>
        </li>
        <li>
          <Link href="/ableton" passHref>
            <SecondaryNavLink>Jobs</SecondaryNavLink>
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 20px 40px;
  background-color: hsl(0deg 0% 100% / 0.9);
  z-index: 9999;
`;

const List = styled(Flex)`
  --gap: 38px;
`;

const SecondaryNavLinkSpecial = styled(SecondaryNavLink)`
  color: var(--clr-orange);
`;

export default SubHeader;
