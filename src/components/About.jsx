import React from "react";
import Image from "../assets/img_about.png";

const About = () => {
  return (
    <section className="mb-[15.25rem]  overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1276px] flex-col items-start justify-between gap-5 px-[15px] md:flex-row">
        <img
          src={Image}
          alt="crazyfrog"
          className="-mt-10 w-full max-w-[32.25rem]"
        />
        <div className="flex w-full flex-col items-start gap-8">
          <div className="section_heading">About $CF</div>
          <div className="text-xl ">
            CrazyFrog on Solana ($CF) is a vibrant homage to the iconic Crazy
            Frog legacy dating back to 2003. Embracing the enthusiasm of the
            Crazy Frog fanbase, $CF welcomes those who value its cultural
            significance, aiming to amplify its presence within the dynamic
            Solana ecosystem. Beyond a mere digital asset, CrazyFrog signifies a
            movement rooted in creativity and community inclusivity. It stands
            as a testament to Solana's potential for innovation and aims to
            redefine engagement within the platform. sphere.
            <br />
            <br />
            <br />
            $CF intertwines Crazy Frog's spirited history with Solana's
            boundless possibilities, championing unity, innovation, and the
            evolving spirit of the crypto
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
