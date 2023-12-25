import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "../assets/img_about.webp";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation once
    threshold: 0.2, // Adjust as needed
  });

  const animationClass = inView ? "animate__animated animate__bounceIn" : ""; // Your desired animation class

  return (
    <section className="mb-[17.25rem]" id="about">
      <div className="mx-auto flex w-full max-w-[1276px] flex-col items-center justify-between gap-5 px-[15px] md:flex-row">
        <img
          src={Image}
          alt="crazyfrog"
          className={`${animationClass} -mt-10 w-full max-w-[40rem]`}
          ref={ref}
        />
        <div
          className={`${animationClass} flex w-full flex-col items-start gap-8`}
          ref={ref}
        >
          <div className="section_heading">About $CF</div>
          <div className="text-xl ">
            CrazyFrog on Solana ($CF) is a vibrant homage to the iconic Crazy
            Frog legacy dating back to 2003. Embracing the enthusiasm of the
            Crazy Frog fanbase, $CF welcomes those who value its cultural
            significance, aiming to amplify its presence within the dynamic
            Solana ecosystem. Beyond a mere digital asset, CrazyFrog signifies a
            movement rooted in creativity and community inclusivity. It stands
            as a testament to Solana's potential for innovation and aims to
            redefine engagement within the platform.
            <br />
            <br />
            $CF intertwines Crazy Frog's spirited history with Solana's
            boundless possibilities, championing unity, innovation, and the
            evolving spirit of the crypto sphere.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
