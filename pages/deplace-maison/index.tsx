import { NextPage } from "next";

import Layout from "@/components/deplaceMaison/Layout";
import { LogoCenter, LogoPrimary } from "@/components/deplaceMaison/Logo";
import Cart from "@/components/deplaceMaison/Cart";
import Navbar from "@/components/deplaceMaison/Navbar";
import Hero from "@/components/deplaceMaison/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <LogoPrimary />
      <LogoCenter />
      <Cart />
      <Navbar />
      <Hero />
    </Layout>
  );
};

export default Home;
