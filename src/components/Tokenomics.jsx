import React from "react";
import { useInView } from "react-intersection-observer";

const Tokenomics = () => {
  const copyContent = () => {
    const address = "HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4"; // Address to copy
    const el = document.createElement("textarea");
    el.value = address;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationClass = inView ? "animate__animated animate__bounceIn" : "";

  return (
    <section id="tokenomics" className="token mb-[18.25rem]">
      <div className=" grad relative mx-auto flex w-full max-w-[1276px] flex-col items-center px-[15px]">
        <div
          className={`${animationClass} section_heading mb-16 flex w-full items-center justify-start gap-8`}
          ref={ref}
        >
          Tokenomics
        </div>
        <div className="mb-8 grid w-full gap-8 md:grid-cols-3">
          <div
            ref={ref}
            className={`${animationClass}  flex w-full items-center justify-between rounded-3xl border-4 border-[#f8f6ff] p-8`}
          >
            <div className="text-2xl font-bold sm:text-4xl">Symbol</div>
            <div className="text-xl sm:text-2xl">CF</div>
          </div>

          <div
            ref={ref}
            className={`${animationClass}  flex w-full items-center justify-between rounded-3xl border-4 border-[#f8f6ff] p-8`}
          >
            <div className="text-2xl font-bold sm:text-4xl">Tax</div>
            <div className="text-xl sm:text-2xl">0/0</div>
          </div>

          <div
            ref={ref}
            className={`${animationClass}  flex w-full items-center justify-between rounded-3xl border-4 border-[#f8f6ff] p-8`}
          >
            <div className="text-2xl font-bold sm:text-4xl">Liquidity</div>
            <div className="text-xl sm:text-2xl">Locked</div>
          </div>
        </div>
        <div
          ref={ref}
          className={`${animationClass} flex w-full flex-wrap items-center justify-between gap-3 rounded-3xl border-4 border-[#f8f6ff] p-8`}
        >
          <div className="text-2xl font-bold sm:text-4xl">Token Address</div>
          <div className="flex items-center justify-end gap-4 overflow-hidden text-xl sm:text-2xl">
            <p className="truncate">
              HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4
            </p>

            <svg
              onClick={copyContent}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M27 4.23828H11C10.6022 4.23828 10.2206 4.39632 9.93934 4.67762C9.65804 4.95893 9.5 5.34046 9.5 5.73828V10.2383H5C4.60218 10.2383 4.22064 10.3963 3.93934 10.6776C3.65804 10.9589 3.5 11.3405 3.5 11.7383V27.7383C3.5 28.1361 3.65804 28.5176 3.93934 28.7989C4.22064 29.0802 4.60218 29.2383 5 29.2383H21C21.3978 29.2383 21.7794 29.0802 22.0607 28.7989C22.342 28.5176 22.5 28.1361 22.5 27.7383V23.2383H27C27.3978 23.2383 27.7794 23.0802 28.0607 22.7989C28.342 22.5176 28.5 22.1361 28.5 21.7383V5.73828C28.5 5.34046 28.342 4.95893 28.0607 4.67762C27.7794 4.39632 27.3978 4.23828 27 4.23828ZM19.5 26.2383H6.5V13.2383H19.5V26.2383ZM25.5 20.2383H22.5V11.7383C22.5 11.3405 22.342 10.9589 22.0607 10.6776C21.7794 10.3963 21.3978 10.2383 21 10.2383H12.5V7.23828H25.5V20.2383Z"
                fill="#F8F7FF"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
