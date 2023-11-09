import React from "react";
import Button from "./Button";
import { arrowRight } from "@/public/icons";

const Hero = () => {
  return (
    <section id='home' className='xl:padding-1 wide:padding-r padding-b '>
      <div className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  '>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
          <h1>
            <span>The New Arrival</span> <br />
            <span>Nike </span> Shoes
          </h1>
          <p>
            Discover stylist Nike arrivals, quality, comfort, annd innovation
            for your active life.
          </p>
          <p>Our Summer collection</p>
          <Button label='Shop Now' iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
