import type { NextPage } from "next";
import { CSSProperties } from "react";
import styled from "styled-components";

import Layout from "@/components/backstagetalks/Layout";
import Header from "@/components/backstagetalks/Header";
import TableOfContent from "@/components/backstagetalks/TableOfContent";
import Footer from "@/components/backstagetalks/Footer";
import IssueScreen from "@/components/backstagetalks/IssueScreen";
import { ISSUES } from "data/backstagetalks";
import useChangeBackground from "utils/useChangeBackground";

const Home: NextPage = () => {
  const bgColor = useChangeBackground();

  return (
    <Layout>
      <Header />
      <TableOfContent />
      <Wrapper style={{ "--bgColor": bgColor } as CSSProperties}>
        {ISSUES.map((issue) => (
          <IssueScreen issue={issue} key={issue.title} />
        ))}
      </Wrapper>
      <Footer />
    </Layout>
  );
};

const Wrapper = styled.main`
  width: 100%;
  background-color: var(--bgColor);
  transition: background-color 500ms ease;

  /*
    With the settings below,
    the scroll snapping effect works.
  */
  /* height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory; */
`;

export default Home;
