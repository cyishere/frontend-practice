import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import FooterList from "../FooterList";
import { HeadingThree } from "../Headings";
import SocialIconGroup from "../SocialIconGroup";
import Paragraph from "../Paragraph";
import { Logo } from "../Assets";

const ListLinks = {
  main: ["Register Live or Push", "About Ableton", "Jobs"],
  education: [
    "Offers for students and teachers",
    "Ableton for the Classroom",
    "Ableton for Colleges and Universities",
  ],
  community: [
    "Find Ableton User Groups",
    "Find Certified Training",
    "Become a Certified Trainer",
  ],
  distributors: ["Find Distributors", "Try Push in-store"],
};

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <LogoRow>
        <Image
          src="/images/ableton/ableton-wordmark.svg"
          alt="Ableton logo"
          width={188}
          height={45}
        />
      </LogoRow>

      <Grid>
        <Column>
          <FooterList items={ListLinks.main} />
          <SocialIconGroup />
        </Column>

        <Column>
          <HeadingThree>Education</HeadingThree>
          <FooterList items={ListLinks.education} />
        </Column>

        <Column>
          <HeadingThree>Sign up to our newsletter</HeadingThree>
          <Paragraph>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </Paragraph>
        </Column>
      </Grid>

      <Grid>
        <Column>
          <HeadingThree>Community</HeadingThree>
          <FooterList items={ListLinks.community} />
        </Column>

        <Column>
          <HeadingThree>Distributors</HeadingThree>
          <FooterList items={ListLinks.distributors} />
        </Column>

        <Column>
          <HeadingThree>Language and Location</HeadingThree>
        </Column>
      </Grid>

      <FlexBetween>
        <FlexColumn>
          <Link href="/ableton" passHref>
            <SubLink>Contact Us</SubLink>
          </Link>
          <Link href="/ableton" passHref>
            <SubLink>Press Resources</SubLink>
          </Link>
          <Link href="/ableton" passHref>
            <SubLink>Legal Info</SubLink>
          </Link>
          <Link href="/ableton" passHref>
            <SubLink>Privacy Policy</SubLink>
          </Link>
          <Link href="/ableton" passHref>
            <SubLink>Cookie Settings</SubLink>
          </Link>
          <Link href="/ableton" passHref>
            <SubLink>Imprint</SubLink>
          </Link>
        </FlexColumn>
        <FlexColumn>
          <SubLink as="span">Made in Berlin</SubLink>
          <Logo />
        </FlexColumn>
      </FlexBetween>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 8.33rem;
  border-top: 5px solid var(--clr-light-gray);
`;
const LogoRow = styled.div`
  margin-bottom: 6rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  gap: 3rem;
  margin-bottom: 5rem;
`;

const Column = styled.div``;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexColumn = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SubLink = styled.a`
  font-size: ${14 / 16}rem;
  font-weight: var(--fw-bold);
  color: var(--clr-black);
`;

export default Footer;
