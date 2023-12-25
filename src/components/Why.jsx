import React from "react";
import choose1 from "../assets/choose_1.webp";
import choose2 from "../assets/choose_2.svg";
import choose3 from "../assets/choose_3.svg";
import choose4 from "../assets/choose_4.svg";

import { useInView } from "react-intersection-observer";

const Why = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationClass = inView ? "animate__animated animate__bounceIn" : "";

  return (
    <section className="mb-[17rem]">
      <div className="mx-auto flex w-full  max-w-[1276px] flex-col items-start px-[15px]">
        <div
          className={`${animationClass} section_heading mb-14 flex items-end justify-start gap-8`}
          ref={ref}
        >
          Why choose $CF
        </div>
        <div className="grid items-start gap-10 sm:grid-cols-4">
          <div
            className={`${animationClass} flex w-full flex-col items-start gap-5 text-xl`}
            ref={ref}
          >
            <img
              src={choose1}
              className="w-full max-w-[218px]"
              alt="crazyfrog"
            />
            Viral by Design
            <br /> CrazyFrog exudes a contagious energy, naturally blending into
            viral trends, and igniting a cultural sensation within the crypto
            realm.
          </div>
          <div
            className={`${animationClass} flex w-full flex-col items-start gap-5 text-xl sm:mt-[8.25rem]`}
            ref={ref}
          >
            <img src={choose2} alt="choose_2" />
            $CF will be more than just a memecoin, featuring several unique use
            cases and utilities that are beneficial to the long term growth of
            the Solana Ecosystem.
          </div>
          <div
            className={`${animationClass} flex w-full flex-col items-start gap-5 text-xl sm:mt-52`}
            ref={ref}
          >
            <img src={choose3} alt="choose3" />
            The CrazyFrog phenomenon stands out as a unique force within the
            Solana landscape, uniting crypto enthusiasts and fostering a vibrant
            community unlike any other.
          </div>
          <div
            className={`${animationClass} flex w-full flex-col items-start gap-5 text-xl sm:mt-20`}
            ref={ref}
          >
            <img src={choose4} alt="choose4" />
            With the Solana blockchain and coin making a huge return over the
            last few months, it’s time for CrazyFrog to come in and set the
            stardard for memecoins on Solana. There's a new frog in town.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
