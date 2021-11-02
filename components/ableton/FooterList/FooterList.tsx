import styled from "styled-components";
import Link from "next/link";
import { ChevronRight } from "react-feather";

interface FooterListProps {
  items: string[];
}

const FooterList: React.FC<FooterListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Link href="/ableton" passHref>
            <ListLink>
              {item}
              <IconWrapper>
                <ChevronRight size={16} />
              </IconWrapper>
            </ListLink>
          </Link>
        </ListItem>
      ))}
    </ul>
  );
};

const ListItem = styled.li`
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-light);
  line-height: 1.5;
`;

const ListLink = styled.a`
  display: inline-block;
  color: var(--clr-black);
  padding-right: ${20 / 16}rem;
  position: relative;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 1px;
  right: 0;
`;

export default FooterList;
