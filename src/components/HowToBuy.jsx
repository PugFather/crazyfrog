import React from "react";
import Image from "../assets/img_howToBuy.png";

const HowToBuy = () => {
  return (
    <section className="mb-[8rem] md:mb-2">
      <div className="mx-auto flex w-full max-w-[1276px] flex-col items-start justify-between gap-5 px-[15px] md:flex-row">
        <div className="flex grow flex-col items-start gap-8">
          <div className="section_heading">How to buy $CF</div>
          <img
            src={Image}
            alt="crazyfrog"
            className="w-full max-w-xl overflow-hidden md:hidden"
          />
          <div className="-mt-20 text-xl md:mt-0">
            To buy $CF, get phantom wallet, Purchase $SOL and send it to your
            Phantom wallet. Then simply swap $SOL to $CF on Raydium.
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-4 sm:w-fit sm:flex-row">
            <a className="group flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-3xl border-2 px-5 py-[0.875rem] text-xl font-medium transition-all duration-300  hover:bg-[#f8f6ff] sm:w-fit">
              <span className="group-hover:text-[#050505]">Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="#f8f7ff"
                className="group-hover:fill-[#050505]"
              >
                <path
                  d="M12.7847 17.7947C12.8896 17.8992 12.9728 18.0234 13.0296 18.1602C13.0864 18.2969 13.1156 18.4435 13.1156 18.5916C13.1156 18.7397 13.0864 18.8863 13.0296 19.023C12.9728 19.1598 12.8896 19.284 12.7847 19.3885L12.2279 19.9453C11.1726 21.0006 9.74144 21.5934 8.24912 21.5934C6.7568 21.5934 5.3256 21.0006 4.27037 19.9453C3.21514 18.8901 2.62231 17.4589 2.62231 15.9666C2.62231 14.4743 3.21514 13.0431 4.27037 11.9878L6.53162 9.72754C7.54551 8.71114 8.90966 8.12087 10.3446 8.07765C11.7796 8.03442 13.1768 8.54151 14.2501 9.49504C14.3609 9.59353 14.4512 9.71288 14.5159 9.84627C14.5805 9.97967 14.6183 10.1245 14.627 10.2725C14.6357 10.4205 14.6152 10.5687 14.5666 10.7088C14.518 10.8489 14.4423 10.978 14.3438 11.0888C14.2453 11.1996 14.126 11.2899 13.9926 11.3546C13.8592 11.4193 13.7143 11.457 13.5663 11.4657C13.4184 11.4744 13.2701 11.4539 13.13 11.4053C12.99 11.3567 12.8609 11.281 12.7501 11.1825C12.1065 10.611 11.2688 10.3069 10.4085 10.3325C9.54811 10.3581 8.73005 10.7115 8.12162 11.3203L5.86224 13.5778C5.2292 14.2109 4.87357 15.0695 4.87357 15.9647C4.87357 16.86 5.2292 17.7186 5.86224 18.3516C6.49528 18.9846 7.35386 19.3403 8.24912 19.3403C9.14437 19.3403 10.003 18.9846 10.636 18.3516L11.1929 17.7947C11.2973 17.6901 11.4214 17.6071 11.558 17.5505C11.6946 17.4939 11.841 17.4648 11.9888 17.4648C12.1366 17.4648 12.283 17.4939 12.4196 17.5505C12.5562 17.6071 12.6803 17.6901 12.7847 17.7947ZM19.7297 4.48222C18.6737 3.42862 17.2428 2.83691 15.751 2.83691C14.2592 2.83691 12.8283 3.42862 11.7722 4.48222L11.2154 5.0391C11.004 5.25044 10.8853 5.53709 10.8853 5.83597C10.8853 6.13486 11.004 6.4215 11.2154 6.63285C11.4267 6.84419 11.7134 6.96292 12.0122 6.96292C12.3111 6.96292 12.5978 6.84419 12.8091 6.63285L13.366 6.07597C13.999 5.44293 14.8576 5.0873 15.7529 5.0873C16.6481 5.0873 17.5067 5.44293 18.1397 6.07597C18.7728 6.70901 19.1284 7.5676 19.1284 8.46285C19.1284 9.3581 18.7728 10.2167 18.1397 10.8497L15.8794 13.111C15.2705 13.7196 14.4519 14.0724 13.5914 14.0973C12.7308 14.1223 11.8932 13.8174 11.2501 13.245C11.1393 13.1465 11.0101 13.0708 10.8701 13.0222C10.73 12.9737 10.5818 12.9531 10.4338 12.9618C10.2858 12.9705 10.1409 13.0083 10.0075 13.073C9.87415 13.1377 9.7548 13.228 9.6563 13.3388C9.55781 13.4496 9.48211 13.5787 9.43352 13.7188C9.38493 13.8588 9.3644 14.0071 9.3731 14.1551C9.38181 14.3031 9.41958 14.4479 9.48425 14.5813C9.54893 14.7147 9.63925 14.834 9.75005 14.9325C10.8225 15.8858 12.2188 16.3933 13.6531 16.3509C15.0874 16.3086 16.4513 15.7197 17.4657 14.7047L19.7269 12.4444C20.7818 11.3886 21.3745 9.95731 21.375 8.46484C21.3756 6.97236 20.7838 5.54068 19.7297 4.4841V4.48222Z"
                  fill="current"
                ></path>
              </svg>
            </a>
            <a className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-3xl border-2 border-[#f8f6ff] bg-gradient-to-r from-[#0866B5] via-[#7EB89D] to-[#36F19A] px-5 py-[0.875rem] text-xl font-medium transition-all duration-300  hover:opacity-50 sm:w-fit">
              Buy on Raydium{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M6.25 5.21387C5.56 5.21387 5 5.77387 5 6.46387V17.9639C5 18.6539 5.56 19.2139 6.25 19.2139H17.75C18.44 19.2139 19 18.6539 19 17.9639V14.2139C19 13.9487 19.1054 13.6943 19.2929 13.5068C19.4804 13.3192 19.7348 13.2139 20 13.2139C20.2652 13.2139 20.5196 13.3192 20.7071 13.5068C20.8946 13.6943 21 13.9487 21 14.2139V17.9639C21 18.8258 20.6576 19.6525 20.0481 20.262C19.4386 20.8715 18.612 21.2139 17.75 21.2139H6.25C5.38805 21.2139 4.5614 20.8715 3.9519 20.262C3.34241 19.6525 3 18.8258 3 17.9639V6.46387C3 5.60191 3.34241 4.77526 3.9519 4.16577C4.5614 3.55628 5.38805 3.21387 6.25 3.21387H10C10.2652 3.21387 10.5196 3.31922 10.7071 3.50676C10.8946 3.6943 11 3.94865 11 4.21387C11 4.47908 10.8946 4.73344 10.7071 4.92097C10.5196 5.10851 10.2652 5.21387 10 5.21387H6.25ZM14 5.21387C13.7348 5.21387 13.4804 5.10851 13.2929 4.92097C13.1054 4.73344 13 4.47908 13 4.21387C13 3.94865 13.1054 3.6943 13.2929 3.50676C13.4804 3.31922 13.7348 3.21387 14 3.21387H20C20.2652 3.21387 20.5196 3.31922 20.7071 3.50676C20.8946 3.6943 21 3.94865 21 4.21387V10.2139C21 10.4791 20.8946 10.7334 20.7071 10.921C20.5196 11.1085 20.2652 11.2139 20 11.2139C19.7348 11.2139 19.4804 11.1085 19.2929 10.921C19.1054 10.7334 19 10.4791 19 10.2139V6.62787L14.707 10.9209C14.5184 11.103 14.2658 11.2038 14.0036 11.2015C13.7414 11.1993 13.4906 11.0941 13.3052 10.9087C13.1198 10.7233 13.0146 10.4725 13.0123 10.2103C13.01 9.94807 13.1108 9.69547 13.293 9.50687L17.586 5.21387H14Z"
                  fill="#F8F7FF"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <img
          src={Image}
          alt="crazyfrog"
          className="-mr-32 -mt-36 hidden max-w-2xl grow md:block"
        />
      </div>
    </section>
  );
};

export default HowToBuy;
