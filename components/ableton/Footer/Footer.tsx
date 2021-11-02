import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import FooterList from "../FooterList";
import { HeadingThree } from "../Headings";
import SocialIconGroup from "../SocialIconGroup";
import Paragraph from "../Paragraph";
import { Logo } from "../Assets";
import Select from "../Select";
import TextInput from "../TextInput/TextInput";
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

      <Grid>
        <Column>
          <FooterList items={FOOTER_LIST_LINKS.main} />
          <SocialIconGroup />
        </Column>

        <Column>
          <HeadingThree>Education</HeadingThree>
          <FooterList items={FOOTER_LIST_LINKS.education} />
        </Column>

        <Column>
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
        </Column>
      </Grid>

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

const TextInputWrapper = styled.div`
  margin-top: 1em;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 0.75em;
`;

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
