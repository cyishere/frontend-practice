import type { NextPage } from "next";
// import { CSSProperties } from "react";
import styled from "styled-components";

import Layout from "@/components/backstagetalks/Layout";
import Header from "@/components/backstagetalks/Header";
import Footer from "@/components/backstagetalks/Footer";
import IssueScreen from "@/components/backstagetalks/IssueScreen";
import { ISSUES } from "data/backstagetalks";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Wrapper>
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
  /* background-color: var(--bg-color); */

  /*
    With the settings below,
    the scroll snapping effect works.
  */
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

export default Home;
