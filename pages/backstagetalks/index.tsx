import type { NextPage } from "next";
import { useState } from "react";

import Layout from "@/components/backstagetalks/Layout";
import Header from "@/components/backstagetalks/Header";
import TableOfContent from "@/components/backstagetalks/TableOfContent";
import Footer from "@/components/backstagetalks/Footer";
import FullpageIssueScreen from "@/components/backstagetalks/FullpageIssueScreen";

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);

  const onLeave = (origin: any, destination: any, direction: "down" | "up") => {
    if (direction === "down") {
      setIndex(origin.index + 1);
    } else if (direction === "up") {
      setIndex(origin.index - 1);
    }
    console.log("Leaving section " + origin.index);
  };

  const afterLoad = (origin: any, destination: any, direction: any) => {
    console.log("After load: " + destination.index);
  };

  return (
    <Layout>
      <Header />
      <TableOfContent index={index} />
      <FullpageIssueScreen onLeave={onLeave} afterLoad={afterLoad} />
      <Footer />
    </Layout>
  );
};

export default Home;
