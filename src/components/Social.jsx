import React from "react";
import Image from "../assets/social_picture.svg";
import X from "../assets/social_x.png";
import R from "../assets/social_r.png";
import Tg from "../assets/social_tg.png";
import { useInView } from "react-intersection-observer";

const Social = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationClass = inView ? "animate__animated animate__bounceIn" : "";

  return (
    <section id="social" className="mb-[17rem] overflow-hidden">
      <div className="m mx-auto flex w-full max-w-[1276px] flex-col items-start justify-between gap-16 px-[15px] sm:flex-row">
        <img
          src={Image}
          alt="social media handles"
          className={`${animationClass} order-2 sm:order-1 sm:w-1/2`}
          ref={ref}
        />
        <div className={`${animationClass} order-1 sm:order-2 sm:w-1/2`}>
          <div className="section_heading mb-8">Follow CF on social media</div>
          <div className="flex items-center justify-start gap-4">
            <a
              href="https://x.com/CrazyFrog_sol"
              rel="noreferrer"
              target="_blank"
            >
              <img src={X} className="w-20" />
            </a>
            <a
              href="https://t.me/crazyfrog_sol"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Tg} className="w-20" />
            </a>
            <a
              href="https://www.reddit.com/user/CrazyFrog-sol"
              rel="noreferrer"
              target="_blank"
            >
              <img src={R} className="w-20" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
