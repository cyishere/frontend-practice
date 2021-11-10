import { NextPage } from "next";

import Layout from "@/components/deplaceMaison/Layout";
import { LogoCenter, LogoPrimary } from "@/components/deplaceMaison/Logo";
import Cart from "@/components/deplaceMaison/Cart";
import Navbar from "@/components/deplaceMaison/Navbar";

const Home: NextPage = () => {
  return (
    <Layout>
      <LogoPrimary />
      <LogoCenter />
      <Cart />
      <Navbar />
    </Layout>
  );
};

export default Home;
