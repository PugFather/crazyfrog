import React from "react";
import Logo from "../assets/crazyfrog.png";
import X from "../assets/social_x.png";
import Tg from "../assets/social_tg.png";
import R from "../assets/social_r.png";
import Image from "../assets/img_about.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center rounded-t-[80px] border-t-4 border-t-[#f8f6ff]">
      <div className="relative z-0 flex w-full max-w-[1276px] flex-col items-center px-[15px] pb-[600px] pt-[7.375rem] sm:items-start sm:pb-0">
        <div className="mb-10 flex w-full max-w-[48.25rem] flex-col items-center justify-center gap-10 text-center sm:flex-row sm:items-start sm:gap-16 sm:text-left md:mb-0">
          <img src={Logo} className="w-64" alt="logo" />
          Jump into the CrazyFrog community, where we celebrate the enduring
          legacy of Crazy Frog. Embrace the fun and inclusivity while
          recognizing that $CF is a meme coin designed purely for entertainment
          and community engagement. <br />
          Let's get crazy together with $CF.
        </div>
        <div className="mb-16 flex items-center justify-start gap-4 md:-mt-12">
          <a
            href="https://x.com/CrazyFrog_sol"
            rel="noreferrer"
            target="_blank"
          >
            <img src={X} className="w-16" />
          </a>
          <a href="https://t.me/crazyfrog_sol" rel="noreferrer" target="_blank">
            <img src={Tg} className="w-16" />
          </a>
          <a
            href="https://www.reddit.com/user/CrazyFrog-sol"
            rel="noreferrer"
            target="_blank"
          >
            <img src={R} className="w-16" />
          </a>
        </div>
        <div className="-z-20 flex w-full items-center justify-start gap-16 border-t border-t-[#3d4148] py-8 text-xl opacity-50">
          © 2023 CF • All Rights Reserved
        </div>
        <img
          src={Image}
          alt="crazyfrog"
          className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[36.875rem] sm:right-[-4.125rem]"
        />
      </div>
    </footer>
  );
};

export default Footer;
