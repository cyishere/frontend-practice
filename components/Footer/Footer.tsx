import styled from "styled-components";

import { BREAKPOINTS, QUERIES } from "@/styles/constants";
import Emoji from "../Emoji";
import SocialIcon from "./SocialIcon";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <InfoList>
          <li>&copy; 2021.</li>
          <li>
            Made with <Emoji name="coffee">☕</Emoji> &{" "}
            <Emoji name="cat">🐈</Emoji> in Tianjin, China.
          </li>
        </InfoList>

        <SocialList>
          <li>
            <a
              href="https://twitter.com/cyishere"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon iconUrl="/icons/twitter.svg" text="CY's Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cyishere"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon iconUrl="/icons/github.svg" text="CY's GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/cyishere"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon iconUrl="/icons/codepen.svg" text="CY's CodePen" />
            </a>
          </li>
        </SocialList>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-green-300);
  margin-top: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  max-width: ${BREAKPOINTS.laptop / 16}rem;
  padding: 3rem 0.5rem;
  margin: auto;

  @media ${QUERIES.largerThanTablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${QUERIES.largerThanTablet} {
    flex-direction: row;
  }
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${QUERIES.largerThanTablet} {
    justify-content: flex-end;
  }
`;

export default Footer;
