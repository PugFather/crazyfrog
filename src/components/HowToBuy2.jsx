import React from "react";
import Image from "../assets/mayan.png";

const HowToBuy2 = () => {
  return (
    <section className="mb-[15.25rem]">
      <div className="mx-auto flex w-full max-w-[1276px] flex-col items-center justify-center gap-10 px-[15px] sm:flex-row sm:items-start">
        <img
          src={Image}
          alt="crazyfrog"
          className="order-2 h-[40rem] w-[22.5rem] sm:order-1"
        />
        <div className="order-1 flex w-full max-w-[38.35rem] flex-col items-start gap-8 sm:order-2">
          <div className="section_heading">
            Or buy using <br />
            Mayan
          </div>
          <div className="text-xl ">
            Swap seamlessly from ETH, BSC, ARB, AVAX or Solana chain to buy $CF.
            Low fees, cross chain.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy2;
