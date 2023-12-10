import React from "react";
import {
  Navigation,
  Hero,
  About,
  HowToBuy,
  HowToBuy2,
  Features,
  Tokenomics,
  Social,
  Faq,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <HowToBuy />
      <HowToBuy2 />
      <Features />
      <Tokenomics />
      <Social />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
