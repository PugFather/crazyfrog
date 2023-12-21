import React from "react";
import { MayanWidget } from ".";
import { useInView } from "react-intersection-observer";

const HowToBuy2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationClass = inView ? "animate__animated animate__bounceIn" : "";

  return (
    <section className="mb-[15.25rem] overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1276px] flex-col items-center justify-center gap-10 px-[15px] sm:flex-row sm:items-start">
        <div
          ref={ref}
          className={`${animationClass} flex w-full max-w-[38.35rem] flex-col items-start gap-8`}
        >
          <div className="section_heading">
            Or buy using <br />
            Mayan
          </div>
          <div className="text-xl ">
            Swap seamlessly from ETH, BSC, ARB, AVAX or Solana chain to buy $CF.
            Low fees, cross chain.
          </div>
        </div>

        <div className="">
          <MayanWidget />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy2;
