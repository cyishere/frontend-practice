import styled from "styled-components";
import Link from "next/link";
import { Twitter, GitHub, Codepen } from "react-feather";

import { QUERIES } from "@/styles/constants";
import Emoji from "../Emoji";

const Footer: React.FC = () => {
  const createdAt = new Date("2021").getFullYear();
  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <Wrapper>
      <Container>
        <Copyright>
          <p>
            &copy;{" "}
            {createdAt === thisYear ? thisYear : `${createdAt} - ${thisYear}`}
          </p>
          <p>
            Made with <Emoji name="coffee">☕</Emoji> &{" "}
            <Emoji name="cat">🐈</Emoji> in Tianjin, China.
          </p>
        </Copyright>
        <SocialLinks>
          <Link href="https://twitter.com/cyishere" passHref>
            <SocialIcon>
              <Twitter size={30} />
            </SocialIcon>
          </Link>
          <Link href="https://github.com/cyishere" passHref>
            <SocialIcon>
              <GitHub size={30} />
            </SocialIcon>
          </Link>
          <Link href="https://codepen.io/cyishere" passHref>
            <SocialIcon>
              <Codepen size={30} />
            </SocialIcon>
          </Link>
        </SocialLinks>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 0.5rem 2rem;
`;

const Container = styled.div`
  background: url(/images/footer-top-line.svg) center 4px no-repeat;
  max-width: min(1100px, 100%);
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media ${QUERIES.largerThanPhone} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${QUERIES.largerThanTablet} {
    flex-direction: row;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  background-color: var(--clr-black);
  color: var(--clr-white);
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: grid;
  place-content: center;
  transition: background 500ms ease-in, transform 500ms ease-in;

  &:hover {
    background-color: var(--clr-purple-primary);
    transform: rotate(360deg);
  }
`;

export default Footer;
