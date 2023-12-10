import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive((current) => !current);
  };
  return (
    <header className="mt-[2.8rem]">
      <div className="mx-auto flex w-full max-w-[79.75rem] items-center justify-between gap-5 px-8 lg:px-0">
        <a href="/" className="cursor-pointer hover:opacity-90">
          <img src={Logo} className="w-[17rem]" />
        </a>

        {/* mobile-btn */}
        <div className="relative z-50 flex lg:hidden" onClick={toggleActive}>
          {/* open menu */}
          <svg
            className={`${active ? "hidden" : ""}`}
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

          {/* close menu */}
          <svg
            className={`${active ? "block" : "hidden"}`}
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
        </div>

        <div className={`header__links ${active ? "active" : ""}`}>
          <a
            href="/"
            className="links__link text-[20px] font-normal hover:opacity-50"
          >
            Home
          </a>
          <a
            href="/"
            className="links__link text-[20px] font-normal hover:opacity-50"
          >
            About
          </a>
          <a
            href="/"
            className="links__link text-[20px] font-normal hover:opacity-50"
          >
            Tokenomics
          </a>
          <a
            href="/"
            className="links__link text-[20px] font-normal hover:opacity-50"
          >
            Whitepaper
          </a>
          <a
            href="/"
            className="border-{#f8f6ff} links__link bottom-3 shrink-0 rounded-3xl border-2 border-solid px-5 py-[14px] text-[20px] font-normal hover:bg-[#f8f6ff] hover:text-[#050505]"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
