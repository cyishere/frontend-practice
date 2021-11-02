import styled from "styled-components";
import { QUERIES } from "../constants";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Description>
        Backstage Talks is a magazine of casual, but in depth dialogues on
        design and business. Our decisions shape and influence this complex
        world—to have a chance to make the right ones, we need to talk.
      </Description>
      <Copyright>
        &copy; 2021{" "}
        <CopyrightLink href="http://milk.sk/" target="_blank" rel="noreferrer">
          Published by studio Milk
        </CopyrightLink>
      </Copyright>
      <PP href="https://backstagetalks.com/privacy-policy.php">
        Privacy Policy
      </PP>
      <Email href="mailto:info@backstagetalks.com">
        info@backstagetalks.com
      </Email>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  line-height: 1.4;

  @media ${QUERIES.tabletAndLarger} {
    width: ${320 / 16}rem;
    text-align: left;
    position: fixed;
    left: 20px;
    bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: var(--fs-base);
  font-weight: var(--fw-bold);
`;

const Copyright = styled.p`
  font-size: var(--fs-smaller);
  margin-bottom: ${30 / 16}rem;
`;

const CopyrightLink = styled.a`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const PP = styled.a`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Email = styled.a`
  display: block;
  font-size: var(--fs-base);
  font-weight: var(--fw-bold);
  margin-top: ${50 / 16}rem;

  @media ${QUERIES.tabletAndLarger} {
    display: none;
  }
`;

export default Footer;
