import React from "react";
import Image from "../assets/social_picture.svg";
import X from "../assets/social_x.png";
import Tg from "../assets/social_tg.png";

const Social = () => {
  return (
    <section id="social" className="mb-[17rem]">
      <div className="m mx-auto flex w-full max-w-[1276px] flex-col items-start justify-between gap-5 px-[15px] sm:flex-row">
        <img
          src={Image}
          alt="social media handles"
          className="order-2 w-full max-w-[34.2rem] sm:order-1"
        />
        <div className="order-1 w-full max-w-[33.75rem] sm:order-2">
          <div className="section_heading mb-8">
            Follow CF on <br /> social media
          </div>
          <div className="flex items-center justify-start gap-4">
            <a href="" target="_blank">
              <img src={X} />
            </a>
            <a href="" target="_blank">
              <img src={Tg} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
