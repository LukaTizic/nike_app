import React from "react";
import Button from "./Button";
import { arrowRight } from "@/assets/icons";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='padding border-2 border-red-500 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-red-500 '> Super </span>
          <span className='text-red-500 '>Quality </span> Shoes
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
