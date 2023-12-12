import React from "react";
import Image from "../assets/img_hero.png";
import Grad from "../assets/hero_grad.png";
import CrazyFrog from "../assets/crazyfrog.png";

const Hero = () => {
  return (
    <section className="mb-[10.25rem] mt-[16.25rem] sm:mb-[22rem]">
      <div className="relative mx-auto flex w-full max-w-[1276px] flex-col items-start px-[15px]">
        <div className="absolute right-0 top-[-160px] -z-10 w-full max-w-[720px]">
          <img src={Grad} className="absolute inset-0 -z-20" />
          <img src={Image} alt="crazyfrog" className="w-full" />
        </div>

        <h2 className="mt-24 text-[2.875rem] font-bold md:mt-0 md:text-7xl">
          Welcome to
        </h2>
        <h1 className="-mt-3 mb-8">
          <img src={CrazyFrog} className="w-full max-w-xl" />
        </h1>
        <h3 className="mb-8 text-xl">
          Elevating a Timeless Legacy on Solana <br /> The Unstoppable Journey
          of Crazy Frog.
        </h3>
        <div className="flex w-full flex-col items-center justify-start gap-4 sm:w-fit sm:flex-row sm:justify-center">
          <a className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-3xl bg-[#f8f6ff] px-5 py-[0.875rem] text-xl font-medium text-[#050505] transition-all duration-300 hover:opacity-50 sm:w-fit">
            Buy on Raydium{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6.25 5.44702C5.56 5.44702 5 6.00702 5 6.69702V18.197C5 18.887 5.56 19.447 6.25 19.447H17.75C18.44 19.447 19 18.887 19 18.197V14.447C19 14.1818 19.1054 13.9275 19.2929 13.7399C19.4804 13.5524 19.7348 13.447 20 13.447C20.2652 13.447 20.5196 13.5524 20.7071 13.7399C20.8946 13.9275 21 14.1818 21 14.447V18.197C21 19.059 20.6576 19.8856 20.0481 20.4951C19.4386 21.1046 18.612 21.447 17.75 21.447H6.25C5.38805 21.447 4.5614 21.1046 3.9519 20.4951C3.34241 19.8856 3 19.059 3 18.197V6.69702C3 5.83507 3.34241 5.00842 3.9519 4.39892C4.5614 3.78943 5.38805 3.44702 6.25 3.44702H10C10.2652 3.44702 10.5196 3.55238 10.7071 3.73991C10.8946 3.92745 11 4.18181 11 4.44702C11 4.71224 10.8946 4.96659 10.7071 5.15413C10.5196 5.34166 10.2652 5.44702 10 5.44702H6.25ZM14 5.44702C13.7348 5.44702 13.4804 5.34166 13.2929 5.15413C13.1054 4.96659 13 4.71224 13 4.44702C13 4.18181 13.1054 3.92745 13.2929 3.73991C13.4804 3.55238 13.7348 3.44702 14 3.44702H20C20.2652 3.44702 20.5196 3.55238 20.7071 3.73991C20.8946 3.92745 21 4.18181 21 4.44702V10.447C21 10.7122 20.8946 10.9666 20.7071 11.1541C20.5196 11.3417 20.2652 11.447 20 11.447C19.7348 11.447 19.4804 11.3417 19.2929 11.1541C19.1054 10.9666 19 10.7122 19 10.447V6.86102L14.707 11.154C14.5184 11.3362 14.2658 11.437 14.0036 11.4347C13.7414 11.4324 13.4906 11.3272 13.3052 11.1418C13.1198 10.9564 13.0146 10.7056 13.0123 10.4434C13.01 10.1812 13.1108 9.92862 13.293 9.74002L17.586 5.44702H14Z"
                fill="#050505"
              ></path>
            </svg>
          </a>
          <a className="flex w-full cursor-pointer items-center justify-center rounded-3xl border-2 px-5 py-[0.875rem] text-xl font-medium transition-all duration-300 hover:bg-[#f8f6ff] hover:text-[#050505] sm:w-fit">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
