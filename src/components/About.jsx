import React from "react";
import Image from "../assets/img_about.png";

const About = () => {
  return (
    <section className="mb-[15.25rem]">
      <div className="mx-auto flex w-full max-w-[1276px] flex-col items-start justify-between gap-5 px-[15px] md:flex-row">
        <img
          src={Image}
          alt="crazyfrog"
          className="-mt-10 w-full max-w-[32.25rem]"
        />
        <div className="flex w-full max-w-[38.35rem] flex-col items-start gap-8">
          <div className="section_heading">About $CF</div>
          <div className="text-xl ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper
            at ac tempus enim laoreet massa non. Lorem ipsum dolor sit amet
            consectetur adipiscing elit dolor semper at ac tempus enim laoreet
            massa non. Lorem ipsum dolor sit amet consectetur adipiscing elit
            dolor semper at ac tempus enim laoreet massa non. Lorem ipsum dolor
            sit amet consectetur adipiscing elit dolor semper at ac tempus enim
            laoreet massa non.
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper
            at ac tempus enim laoreet massa non.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
