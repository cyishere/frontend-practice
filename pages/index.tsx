import type { NextPage } from "next";
import { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

import SEO from "@/components/SEO";
import GlobalStyles from "@/styles/GlobalStyles";

const Home: NextPage = () => {
  return (
    <Fragment>
      <SEO title="Home" pathname="/" />
      <Wrapper>
        <Header>
          <PageHeading>Projects of Frontend Practice</PageHeading>
          <p>
            Become a better frontend developer by recreating{" "}
            <strong>real websites</strong>.
          </p>
          <p>
            Projects from{" "}
            <a
              href="https://www.frontendpractice.com/"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Practice
            </a>
            .
          </p>
        </Header>
        <Main>
          <List>
            <ListItem>
              <Link href="/ableton">Ableton</Link>
            </ListItem>
            <ListItem>Monstercat</ListItem>
            <ListItem>Déplacé Maison</ListItem>
          </List>
        </Main>
        <Footer>
          <p>
            Made by{" "}
            <a href="https://cyishere.dev" target="_blank" rel="noreferrer">
              CY
            </a>
            .
          </p>
        </Footer>
      </Wrapper>
      <GlobalStyles />
    </Fragment>
  );
};

const Wrapper = styled.div`
  max-width: 960px;
  padding: 32px;
  margin: auto;
  font-family: "Poppins", sans-serif;
  font-size: ${18 / 16}rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const PageHeading = styled.h1`
  font-family: "Barlow", sans-serif;
  font-size: ${60 / 16}rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5em;
`;

const Main = styled.main`
  margin-bottom: 3rem;
`;

const List = styled.ol`
  list-style: revert;
`;

const ListItem = styled.li`
  display: list-item;
  &:not(:last-of-type) {
    margin-bottom: 0.5em;
  }

  &::marker {
    color: plum;
  }
`;

const Footer = styled.footer`
  text-align: center;
`;

export default Home;
