import React from "react";
import {
  Navigation,
  Hero,
  About,
  Comment,
  HowToBuy,
  HowToBuy2,
  Features,
  Tokenomics,
  Social,
  Faq,
  Footer,
  WhyChoose,
} from "../components";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Comment />
      <HowToBuy />
      <HowToBuy2 />
      <Features />
      <Tokenomics />
      <Social />
      <WhyChoose />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
