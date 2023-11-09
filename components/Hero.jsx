"use client";

import Image from "next/image";
import { shoes, statistics } from "../constants";
import Button from "./Button";
import ShoeCard from "./ShoeCard";
import { bigShoe1 } from "@/assets/images";
import { arrowRight } from "@/assets/icons";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='xl:padding-1 wide:padding-r padding-b flex flex-col '
    >
      <div className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  '>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
          <p className='text-xl font-montserrat text-red-500'>
            Our Summer collection
          </p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              The New Arrival
            </span>
            <br />
            <span className='text-red-500 inline-block mt-3'>Nike </span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm '>
            Discover stylist <span className='text-red-500'>Nike</span>{" "}
            arrivals, quality, comfort, and innovation for your active life.
          </p>
          <a href='https://www.nike.com/w/new-shoes-3n82yzy7ok' target='_blank'>
            <Button label='Shop Now' iconURL={arrowRight} />
          </a>
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((item) => (
              <div key={item.label}>
                <p className='text-4xl font-palanquin font-bold'>
                  {item.value}
                </p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary '>
          <Image
            src={bigShoeImg}
            width={610}
            height={500}
            alt='shoe collection'
            className='relative z-10 object-contain'
          />
          <div>
            <div className='flex sm:gap-6 gap-4 absolute -bottom-[10%]  xl:bottom-[2%] sm:left-[10%] max-sm:px-6'>
              {shoes.map((image, index) => (
                <div key={index}>
                  <ShoeCard
                    index={index}
                    imgURL={image}
                    changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                    bigShoeImg={bigShoeImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
