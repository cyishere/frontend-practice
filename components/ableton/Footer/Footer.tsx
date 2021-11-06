import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { QUERIES } from "../constants";
import FooterList from "../FooterList";
import { HeadingThree } from "../Headings";
import SocialIconGroup from "../SocialIconGroup";
import Paragraph from "../Paragraph";
import { Logo } from "../Assets";
import Select from "../Select";
import TextInput from "../TextInput";
import { FOOTER_LIST_LINKS, LANGUAGES, LOCATIONS } from "data/ableton";

const Footer: React.FC = () => {
  const [language, setLanguage] = useState("en");
  const [location, setLocation] = useState("us");

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

      <GridWithArea>
        <PrimaryColumn>
          <FooterList items={FOOTER_LIST_LINKS.main} />
          <SocialIconGroup />
        </PrimaryColumn>

        <EducationColumn>
          <HeadingThree>Education</HeadingThree>
          <FooterList items={FOOTER_LIST_LINKS.education} />
        </EducationColumn>

        <NewsletterColumn>
          <HeadingThree>Sign up to our newsletter</HeadingThree>
          <Paragraph>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </Paragraph>

          <TextInputWrapper>
            <TextInput
              label="Sign up newsletter"
              buttonText="Sign up"
              placeholder="Email Address"
            />
          </TextInputWrapper>
        </NewsletterColumn>
      </GridWithArea>

      <Grid>
        <Column>
          <HeadingThree>Community</HeadingThree>
          <FooterList items={FOOTER_LIST_LINKS.community} />
        </Column>

        <Column>
          <HeadingThree>Distributors</HeadingThree>
          <FooterList items={FOOTER_LIST_LINKS.distributors} />
        </Column>

        <Column>
          <HeadingThree>Language and Location</HeadingThree>

          <SelectWrapper>
            <Select
              label="Choose a language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              width={118}
            >
              {LANGUAGES.map((op) => (
                <option value={op.value} key={op.value}>
                  {op.name}
                </option>
              ))}
            </Select>

            <Select
              label="Choose a location"
              value={location}
              width={200}
              onChange={(e) => setLocation(e.target.value)}
            >
              {LOCATIONS[0].options.map((location) => (
                <option value={location.value} key={location.value}>
                  {location.name}
                </option>
              ))}
            </Select>
          </SelectWrapper>
        </Column>
      </Grid>

      <Flex>
        <FlexItem>
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
        </FlexItem>
        <FlexItem>
          <SubLink as="span">Made in Berlin</SubLink>
          <Logo />
        </FlexItem>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 8.33vw;
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

  @media ${QUERIES.desktopAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

const GridWithArea = styled(Grid)`
  grid-template-areas: "primaryList educationList newsletter";

  @media ${QUERIES.desktopAndSmaller} {
    grid-template-areas:
      "newsletter"
      "primaryList"
      "educationList";
  }
`;

const Column = styled.div``;

const PrimaryColumn = styled(Column)`
  grid-area: primaryList;
`;

const EducationColumn = styled(Column)`
  grid-area: educationList;
`;

const NewsletterColumn = styled(Column)`
  grid-area: newsletter;
`;

const TextInputWrapper = styled.div`
  margin-top: 1em;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 0.75em;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media ${QUERIES.desktopAndSmaller} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const FlexItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${QUERIES.desktopAndSmaller} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const SubLink = styled.a`
  font-size: ${14 / 16}rem;
  font-weight: var(--fw-bold);
  color: var(--clr-black);
`;

export default Footer;
