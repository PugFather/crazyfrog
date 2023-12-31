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
            CrazyFrog on Solana ($CF) embodies the vibrant legacy of Crazy Frog,
            tracing back to 2003. Beyond a digital asset, $CF is a movement
            driven by community inclusivity and creativity. It celebrates the
            spirited history of Crazy Frog while championing unity within the
            dynamic Solana ecosystem.
            <br />
            <br />
            At $CF, our mission extends beyond a cryptocurrency. We strive to
            redefine accessibility and engagement within the digital currency
            realm, fostering a community-driven experience rooted in simplicity,
            security, and inclusivity.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
