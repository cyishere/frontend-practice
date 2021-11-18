import type { NextPage } from "next";
import { Fragment } from "react";
import styled from "styled-components";

import SEO from "@/components/SEO";
import GlobalStyles from "@/styles/GlobalStyles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { PROJECTS } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid";
import { COLORS, QUERIES } from "@/styles/constants";

const Home: NextPage = () => {
  return (
    <Fragment>
      <SEO title="The Clone Webs" pathname="/" />
      <Header />
      <Hero />
      <Wrapper>
        <Intro>
          <IntroHeading>
            <Marker>The Clone Album:</Marker>
            To hone my skills as a frontend developer, I recreate real websites,
            some of which were chosen by the inspiring{" "}
            <FP
              href="https://www.frontendpractice.com/"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Practice
            </FP>{" "}
            and others from which I believe I can learn a lot.
          </IntroHeading>
        </Intro>
        <Main>
          {PROJECTS.map((project) => (
            <ProjectWrapper key={project.id}>
              <ProjectGrid project={project} />
            </ProjectWrapper>
          ))}
        </Main>

        <BackToAllWrapper>
          <BackToAll href="https://cyishere.dev/portfolio">
            Back to All Portfolio
          </BackToAll>
        </BackToAllWrapper>
      </Wrapper>
      <Footer />
      <GlobalStyles />
    </Fragment>
  );
};

const Wrapper = styled.main`
  max-width: 960px;
  padding: 0 2rem;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  font-size: ${18 / 16}rem;
  font-weight: 400;
  line-height: 1.5;

  @media ${QUERIES.largerThanTablet} {
    padding: 0;
  }
`;

const Intro = styled.section`
  padding: 6rem 1rem;
  border-bottom: 1px solid hsl(${COLORS.black} / 0.3);
`;

const Marker = styled.marker`
  background-image: linear-gradient(45deg, gold, deeppink);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: block;
  margin-bottom: 1rem;
`;

const IntroHeading = styled.h2`
  width: 100%;
  max-width: 60ch;
  font-family: var(--ff-heading);
  font-size: ${36 / 16}rem;
  font-weight: 400;
  line-height: 1.5;
  margin: auto;
`;

const FP = styled.a`
  color: var(--clr-pink);
  text-decoration: underline;
`;

const Main = styled.section`
  padding-top: 10rem;
  margin-bottom: 10rem;
`;

const ProjectWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 10rem;
  }
`;

const BackToAllWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
`;

const BackToAll = styled.a`
  color: var(--clr-white);
  background-color: var(--clr-pink);
  padding: 1rem 2rem;
`;

export default Home;
