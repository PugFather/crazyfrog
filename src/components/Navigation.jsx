import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { Transition } from "@headlessui/react";

import X from "../assets/social_x.png";
import Tg from "../assets/social_tg.png";
import R from "../assets/social_r.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = useRef(null);
  const closeMenuButton = useRef(null);

  // Close the navbar if outside of the navbar is clicked
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!navbar.current || !closeMenuButton.current) return;
      if (
        !isOpen ||
        navbar.current.contains(target) ||
        closeMenuButton.current.contains(target)
      )
        return;
      setIsOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  });

  //CLose the navbar is escape button is clicked
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!navbar || keyCode !== 27) return;
      setIsOpen(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [isOpen]);

  return (
    <header
      className={`relative z-50 self-stretch px-8 pt-12 ${
        isOpen ? "bg-black/80 backdrop-blur" : ""
      }`}
      ref={navbar}
    >
      <nav className="mx-auto flex w-full max-w-[1276px] items-center justify-between lg:gap-24">
        <a href="/" className="cursor-pointer hover:opacity-90">
          <img src={Logo} className="h-full max-h-24 sm:max-h-28" />
        </a>

        {/* Desktop Navlinks */}
        <div className="hidden grow items-center gap-2.5 lg:flex lg:justify-between">
          <a
            href="/"
            className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
          >
            About
          </a>
          <a
            href="#tokenomics"
            className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
          >
            Tokenomics
          </a>
          <a
            href="https://drive.google.com/file/d/19FvRWZRX0Y2zlx4EyJNMbT2HTHkO13An/view?usp=sharing"
            className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
          >
            Whitepaper
          </a>
          <a
            href="https://crazyairdrop.vercel.app/"
            className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
          >
            Airdrop
          </a>

          <a
            href="https://t.me/crazyfrog_sol"
            className="border-{#f8f6ff} links__link bottom-3 shrink-0 rounded-3xl border-2 border-solid px-5 py-[14px] text-[20px] font-normal hover:bg-[#f8f6ff] hover:text-[#050505]"
          >
            Join the community
          </a>
        </div>

        {/* Mobile Navlinks */}
        <div className="transition-all lg:hidden">
          {isOpen ? (
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className={`h-8 w-8`}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M8.3335 8.33333L20.0002 20L31.6668 8.33333"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
              <path
                d="M8.3335 31.6667L20.0002 20L31.6668 31.6667"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
            </svg>
          ) : (
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className={`h-8 w-8`}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M8.3335 8.33333H20.0002H31.6668"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
              <path
                d="M8.3335 20H31.6668"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
              <path
                d="M8.3335 31.6667H20.0002H31.6668"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
            </svg>
          )}
        </div>

        <div className="absolute left-0 top-full w-full  bg-black/80 backdrop-blur lg:hidden">
          <Transition
            show={isOpen}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-200 ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className=" bg-primary flex flex-col items-start gap-8 rounded-b-[40px] border-b-4 border-b-[#f8f6ff] p-8 pb-10">
              <a
                href="/"
                className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
              >
                Home
              </a>
              <a
                href="about"
                className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
              >
                About
              </a>
              <a
                href="#tokenomics"
                className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
              >
                Tokenomics
              </a>
              <a
                href="https://drive.google.com/file/d/19FvRWZRX0Y2zlx4EyJNMbT2HTHkO13An/view?usp=sharing"
                className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
              >
                Whitepaper
              </a>
              <a
                href="https://crazyairdrop.vercel.app/"
                className="text-4xl font-normal hover:opacity-50 md:text-[20px]"
              >
                Airdrop
              </a>

              <a
                href="https://t.me/crazyfrog_sol"
                className="border-{#f8f6ff} w-full rounded-3xl border-2 px-5 py-[14px] text-center text-[20px] font-normal hover:bg-[#f8f6ff] hover:text-[#050505]"
              >
                Join the community
              </a>
              <div className="mb-20 flex w-full items-center justify-center gap-4">
                <a
                  href="https://x.com/CrazyFrog_sol"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={X} className="w-16" />
                </a>
                <a
                  href="https://t.me/crazyfrog_sol"
                  rel="noreferrer"
                  target="_blank"
                >
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
            </div>
          </Transition>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
