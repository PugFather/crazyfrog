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
            Viral by Design:
            <br />
            $CF embodies contagious energy, seamlessly blending into viral
            trends, and sparking a cultural sensation within the crypto realm.
          </div>
          <div
            className={`${animationClass} flex w-full flex-col items-start gap-5 text-xl sm:mt-[8.25rem]`}
            ref={ref}
          >
            <img src={choose2} alt="choose_2" />
            Community-Driven: <br />
            Embracing a community-focused approach, $CF aims to offer unique use
            cases and utilities beneficial for Solana's long-term growth.
          </div>
          <div
            className={`${animationClass} flex w-full flex-col items-start gap-5 text-xl sm:mt-60`}
            ref={ref}
          >
            <img src={choose3} alt="choose3" />
            Unique Force: <br />
            The CrazyFrog phenomenon unites crypto enthusiasts, fostering a
            vibrant community unlike any other within the Solana landscape.
          </div>
          <div
            className={`${animationClass} flex w-full flex-col items-start gap-5 text-xl sm:mt-20`}
            ref={ref}
          >
            <img src={choose4} alt="choose4" />
            Setting the Standard: <br />
            With Solana's resurgence, $CF arrives to set the bar for meme coins
            on the blockchain, infusing the space with new energy.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
